const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
    price: { type: Number },
    transactionType: { type: String },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    fantasyTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'FantasyTeam' },
    createdAt: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
