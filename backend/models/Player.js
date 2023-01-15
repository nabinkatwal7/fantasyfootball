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
    image: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Player = mongoose.model('Player', PlayerSchema);
