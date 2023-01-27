const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    team: { type: String, required: true },
    goals: { type: Number },
    assists: { type: Number },
    appearances: { type: Number },
    yellowCards: { type: Number },
    redCards: { type: Number },
    form: { type: Number },
    price: { type: Number },
    ict_index:{type: Number},
    minutes: {type: Number},
    expected_goals: {type:Number},
    expected_assists:{type:Number},
    createdAt: { type: Date, default: Date.now }
});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player