const mongoose = require('mongoose');

const LeagueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
    schedule: [{
        team1: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
        team2: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
        date: { type: Date },
    }],
    rules: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const League = mongoose.model('League', LeagueSchema);
