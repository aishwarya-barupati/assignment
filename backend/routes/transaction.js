const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionController');


router.get('/', getTransactions);
router.post('/', addTransaction);
router.put('/:id', editTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router;
