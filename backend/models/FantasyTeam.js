const mongoose = require('mongoose');

const FantasyTeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
    captain: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
    viceCaptain: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
    points: { type: Number },
    createdAt: { type: Date, default: Date.now }
});

const FantasyTeam = mongoose.model('FantasyTeam', FantasyTeamSchema);

module.exports = FantasyTeam