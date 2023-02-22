const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  username: String,
  league: String,
  players: [
    {
      name: String,
      position: String,
      cost_now: Number,
    },
  ],
  points: Number,
  total_cost: Number,
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team