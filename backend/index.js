const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const Player = require("./models/Player");
const Team = require("./models/Team");
const User = require("./models/User");
const FantasyTeam = require("./models/FantasyTeam");
const League = require("./models/League");
const Transaction = require("./models/Transaction");

const cors = require("cors");

const router = express.Router();
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Connect to the MongoDB database
mongoose.connect(
  "mongodb://127.0.0.1:27017/fantasysoccer",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to db");
    }
  }
);

// Define routes for the Player resource
app.get("/players", async (req, res) => {
  const players = await Player.find();
  res.json(players);
});

app.get("/players/:id", async (req, res) => {
  const player = await Player.findById(req.params.id);
  res.json(player);
});

app.post("/players", async (req, res) => {
  const player = new Player(req.body);
  await player.save();
  res.json(player);
});

app.put("/players/:id", async (req, res) => {
  const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(player);
});

app.delete("/players/:id", async (req, res) => {
  await Player.findByIdAndRemove(req.params.id);
  res.json({ message: "Player deleted" });
});

// Define routes for the Team resource
app.get("/teams", async (req, res) => {
  const teams = await Team.find();
  res.json(teams);
});

app.get("/teams/:id", async (req, res) => {
  const team = await Team.findById(req.params.id);
  res.json(team);
});

app.post("/teams", async (req, res) => {
  const team = new Team(req.body);
  await team.save();
  res.json(team);
});

app.put("/teams/:id", async (req, res) => {
  const team = await Team.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(team);
});

app.delete("/teams/:id", async (req, res) => {
  await Team.findByIdAndRemove(req.params.id);
  res.json({ message: "Team deleted" });
});

// Define routes for the User resource
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
});

app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({ message: "User deleted" });
});

// SIGNUP
app.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User successfully registered" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }).then((user) => {
    if(!user){
        return res.status(400).json({
            message: 'User not found'
        })
    }
    bcrypt.compare(password, user.password).then(isMatch=>{
        if (!isMatch){
            return res.status(400).json({
                message: 'Incorrect password'
            })
        }
    })
  });
});

// Define routes for the FantasyTeam resource
app.get("/fantasyteams", async (req, res) => {
  const fantasyteams = await FantasyTeam.find();
  res.json(fantasyteams);
});

app.get("/fantasyteams/:id", async (req, res) => {
  const fantasyteam = await FantasyTeam.findById(req.params.id);
  res.json(fantasyteam);
});

app.post("/fantasyteams", async (req, res) => {
  const fantasyteam = new FantasyTeam(req.body);
  await fantasyteam.save();
  res.json(fantasyteam);
});

app.put("/fantasyteams/:id", async (req, res) => {
  const fantasyteam = await FantasyTeam.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(fantasyteam);
});

app.delete("/fantasyteams/:id", async (req, res) => {
  await FantasyTeam.findByIdAndRemove(req.params.id);
  res.json({ message: "Fantasy Team deleted" });
});

// Define routes for the League resource
app.get("/leagues", async (req, res) => {
  const leagues = await League.find();
  res.json(leagues);
});

app.get("/leagues/:id", async (req, res) => {
  const league = await League.findById(req.params.id);
  res.json(league);
});

app.post("/leagues", async (req, res) => {
  const league = new League(req.body);
  await league.save();
  res.json(league);
});

app.put("/leagues/:id", async (req, res) => {
  const league = await League.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(league);
});

app.delete("/leagues/:id", async (req, res) => {
  await League.findByIdAndRemove(req.params.id);
  res.json({ message: "League deleted" });
});

// Define routes for the Transaction resource
app.get("/transactions", async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

app.get("/transactions/:id", async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);
  res.json(transaction);
});

app.post("/transactions", async (req, res) => {
  const transaction = new Transaction(req.body);
  await transaction.save();
  res.json(transaction);
});

app.put("/transactions/:id", async (req, res) => {
  const transaction = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(transaction);
});

app.delete("/transactions/:id", async (req, res) => {
  await Transaction.findByIdAndRemove(req.params.id);
  res.json({ message: "Transaction deleted" });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

module.exports = router;
