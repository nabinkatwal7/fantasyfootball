const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Player = require('./models/Player');
const Team = require('./models/Team');
const User = require('./models/User');
const FantasyTeam = require('./models/FantasyTeam');
const League = require('./models/League');
const Transaction = require('./models/Transaction');

const app = express();
app.use(bodyParser.json());

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

// Define routes for the Player resource
app.get('/players', async (req, res) => {
    const players = await Player.find();
    res.json(players);
});

app.get('/players/:id', async (req, res) => {
    const player = await Player.findById(req.params.id);
    res.json(player);
});

app.post('/players', async (req, res) => {
    const player = new Player(req.body); 
    await player.save();
    res.json(player);
});

app.put('/players/:id', async (req, res) => {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(player);
});

app.delete('/players/:id', async (req, res) => {
    await Player.findByIdAndRemove(req.params.id);
    res.json({ message: 'Player deleted' });
});

// Define routes for the Team resource
app.get('/teams', async (req, res) => {
    const teams = await Team.find();
    res.json(teams);
});

app.get('/teams/:id', async (req, res) => {
    const team = await Team.findById(req.params.id);
    res.json(team);
});

app.post('/teams', async (req, res) => {
    const team = new Team(req.body);
    await team.save();
    res.json(team);
});

app.put('/teams/:id', async (req, res) => {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(team);
});

app.delete('/teams/:id', async (req, res) => {
    await Team.findByIdAndRemove(req.params.id);
    res.json({ message: 'Team deleted' });
});

// Define routes for the User resource
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
});

app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
});

app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ message: 'User deleted' });
});

// Define routes for the FantasyTeam resource
app.get('/fantasyteams', async (req, res) => {
    const fantasyteams = await FantasyTeam.find();
    res.json(fantasyteams);
});

app.get('/fantasyteams/:id', async (req, res) => {
    const fantasyteam = await FantasyTeam.findById(req.params.id);
    res.json(fantasyteam);
});

app.post('/fantasyteams', async (req, res) => {
    const fantasyteam = new FantasyTeam(req.body);
    await fantasyteam.save();
    res.json(fantasyteam);
});

app.put('/fantasyteams/:id', async (req, res) => {
    const fantasyteam = await FantasyTeam.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(fantasyteam);
});

app.delete('/fantasyteams/:id', async (req, res) => {
    await FantasyTeam.findByIdAndRemove(req.params.id);
    res.json({ message: 'Fantasy Team deleted' });
});

// Define routes for the League resource
app.get('/leagues', async (req, res) => {
    const leagues = await League.find();
    res.json(leagues);
});

app.get('/leagues/:id', async (req, res) => {
    const league = await League.findById(req.params.id);
    res.json(league);
});

app.post('/leagues', async (req, res) => {
    const league = new League(req.body);
    await league.save();
    res.json(league);
});

app.put('/leagues/:id', async (req, res) => {
    const league = await League.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(league);
});

app.delete('/leagues/:id', async (req, res) => {
    await League.findByIdAndRemove(req.params.id);
    res.json({ message: 'League deleted' });
});

// Define routes for the Transaction resource
app.get('/transactions', async (req, res) => {
    const transactions = await Transaction.find();
    res.json(transactions);
});

app.get('/transactions/:id', async (req, res) => {
    const transaction = await Transaction.findById(req.params.id);
    res.json(transaction);
});

app.post('/transactions', async (req, res) => {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.json(transaction);
});

app.put('/transactions/:id', async (req, res) => {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(transaction);
});

app.delete('/transactions/:id', async (req, res) => {
    await Transaction.findByIdAndRemove(req.params.id);
    res.json({ message: 'Transaction deleted' });
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
