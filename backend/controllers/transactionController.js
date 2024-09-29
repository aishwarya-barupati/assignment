const Transaction = require('../models/Transaction');

// Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add a new transaction
exports.addTransaction = async (req, res) => {
  const { type, amount, description, date } = req.body;

  try {
    const newTransaction = new Transaction({ type, amount, description, date });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Error adding transaction' });
  }
};

// Edit a transaction
exports.editTransaction = async (req, res) => {
  const { id } = req.params;
  const { type, amount, description, date } = req.body;

  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(id, { type, amount, description, date }, { new: true });
    if (!updatedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Error updating transaction' });
  }
};

// Delete a transaction
exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(id);
    if (!deletedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting transaction' });
  }
};
