const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    league: { type: String, required: true },
    wins: { type: Number },
    losses: { type: Number },
    points: { type: Number },
    createdAt: { type: Date, default: Date.now }
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team