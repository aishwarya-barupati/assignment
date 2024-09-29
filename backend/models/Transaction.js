const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Income', 'Expense'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);
