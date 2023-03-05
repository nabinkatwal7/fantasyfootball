const mongoose = require('mongoose');

const LeagueSchema = new mongoose.Schema({
    name: String,
    teams: [{ 
        teamname: String, 
        point: Number
     }]
});

const League = mongoose.model('League', LeagueSchema);

module.exports = League 