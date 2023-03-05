const mongoose = require('mongoose');

const LeagueSchema = new mongoose.Schema({
    name: String,
    id: String,
    teams: [{ 
        name: String, 
        point: Number
     }]
});

const League = mongoose.model('League', LeagueSchema);

module.exports = League 