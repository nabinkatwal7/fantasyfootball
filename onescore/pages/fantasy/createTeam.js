import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 400,
  },
  listItem: {
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const createTeam = () => {
  const classes = useStyles();
  const [players, setPlayers] = useState([]);
<<<<<<< HEAD
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20);
  const [team, setTeam] = useState([]);
  const [budget, setBudget] = useState(1000);
  const [teamName, setTeamName] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/players")
      .then((res) => {
        setPlayers(res.data);
        setFilteredPlayers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const searchPlayers = (players) => {
    return players.filter((player) => {
      return (
        player.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.second_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  useEffect(() => {
    setFilteredPlayers(
      searchPlayers(players).filter((player) => player.cost >= minPrice && player.cost <= maxPrice)
    );
  }, [searchTerm, minPrice, maxPrice]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
=======
  const [team, setTeam] = useState([]);
  const [budget, setBudget] = useState(1000);
  const router = useRouter();

  useEffect(() => {
    async function fetchPlayers() {
      const res = await fetch("http://localhost:5000/createteam");
      const data = await res.json();
      setPlayers(data.players);
    }

    fetchPlayers();
  }, []);

  const addPlayerToTeam = (player) => {
    if (budget - player.cost >= 0 && team.length < 15) {
      setTeam([...team, player]);
      setBudget(budget - player.cost);
    }
  };

  const removePlayerFromTeam = (player) => {
    setTeam(team.filter((p) => p.id !== player.id));
    setBudget(budget + player.cost);
>>>>>>> parent of c93a18f (createTeam contd)
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  }

<<<<<<< HEAD
  
return (

  <div className={classes.root}>
    <Typography variant="h4" className={classes.teamName}>
      {teamName || 'Create Your Team'}
    </Typography>
    <Typography variant="h5" className={classes.budget}>
      Budget: {budget}
    </Typography>
    <TextField
      className={classes.search}
      label="Search Player"
      value={searchTerm}
      onChange={handleSearchChange}
    />
    <Button className={classes.searchBtn} onClick={handleSearch}>
      Search
    </Button>
    <InputRange
      min={0}
      max={20}
      step={0.5}
      value={priceRange}
      onChange={handlePriceRangeChange}
    />
    <Typography variant="body1" className={classes.rangeLabel}>
      Price Range: {priceRange.min} - {priceRange.max}
    </Typography>
    <FormControl className={classes.position}>
      <InputLabel id="position-label">Position</InputLabel>
      <Select
        labelId="position-label"
        id="position-select"
        value={position}
        onChange={handlePositionChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Forward">Forward</MenuItem>
        <MenuItem value="Midfielder">Midfielder</MenuItem>
        <MenuItem value="Defender">Defender</MenuItem>
        <MenuItem value="Goalkeeper">Goalkeeper</MenuItem>
      </Select>
    </FormControl>
    <List className={classes.list}>
      {filteredPlayers
        .slice(0, 100)
        .filter((player) => player.position === position || !position)
        .map((player) => (
          <ListItem key={player.id} className={classes.listItem}>
            <ListItemText
              primary={`${player.first_name} ${player.second_name}`}
              secondary={`Cost: ${player.cost}`}
            />
            <IconButton
              className={classes.iconBtn}
              onClick={() => addPlayerToTeam(player)}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </ListItem>
    if (res.ok) {
      router.push("/teams");
    }
  };

  return (
    <div>
      <h1>Create Team</h1>
      <h2>Available Budget: ${budget}</h2>
      <h2>Players:</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.first_name} {player.second_name} - ${player.now_cost}
            <button onClick={() => addPlayerToTeam(player)}>Add</button>
          </li>
        ))}
      </ul>
      <h2>Team:</h2>
      <ul>
        {team.map((player) => (
          <li key={player.id}>
            {player.first_name} - ${player.now_cost}
            <button onClick={() => removePlayerFromTeam(player)}>Remove</button>
          </li>
>>>>>>> parent of c93a18f (createTeam contd)
        ))}
    </List>
    <div className={classes.team}>
      <Typography variant="h6" className={classes.teamHeader}>
        Your Team
      </Typography>
      <List className={classes.teamList}>
        {team.map((player) => (
          <ListItem key={player.id} className={classes.teamItem}>
            <ListItemText
              primary={`${player.first_name} ${player.second_name}`}
              secondary={`Cost: ${player.cost}`}
            />
            <IconButton
              className={classes.iconBtn}
              onClick={() => removePlayerFromTeam(player)}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            )}
      </List>
      </Paper>

{/* Team Name Input */}
<TextField
label="Team Name"
value={teamName}
onChange={(e) => setTeamName(e.target.value)}
fullWidth
margin="normal"
variant="outlined"
/>

{/* Budget Input */}
<TextField
label="Budget"
value={budget}
onChange={(e) => setBudget(e.target.value)}
type="number"
fullWidth
margin="normal"
variant="outlined"
inputProps={{ min: "100", max: "1000", step: "5" }}
/>

{/* Submit Button */}
<Button
variant="contained"
color="primary"
fullWidth
disabled={budget - teamCost < 0 || team.length === 0}
onClick={submitTeam}

Submit Team
</Button>

</div>
</div>
);
}
export default createTeam;



