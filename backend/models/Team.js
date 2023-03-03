const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  username: String,
  teamname: String,
  players: [
    {
      GK: Array,
      DEF: Array, 
      MID: Array,
      FWD: Array, 
      SUBS: Array
    },
  ],
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team