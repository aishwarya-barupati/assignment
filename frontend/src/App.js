import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import TransactionSummary from './components/TransactionSummary';
import axios from 'axios';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('/api/transactions');
      setTransactions(response.data);
      setFilteredTransactions(response.data); // Initialize with all transactions
    } catch (error) {
      console.error('Error fetching transactions', error);
    }
  };

  const addTransaction = async (transaction) => {
    try {
      const response = await axios.post('/api/transactions', transaction);
      setTransactions([...transactions, response.data]);
    } catch (error) {
      console.error('Error adding transaction', error);
    }
  };

  const editTransaction = async (id, updatedTransaction) => {
    try {
      const response = await axios.put(`/api/transactions/${id}`, updatedTransaction);
      setTransactions(transactions.map(tx => (tx._id === id ? response.data : tx)));
    } catch (error) {
      console.error('Error editing transaction', error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/transactions/${id}`);
      setTransactions(transactions.filter(tx => tx._id !== id));
    } catch (error) {
      console.error('Error deleting transaction', error);
    }
  };

  return (
    <div>
      <h1>Transaction Manager</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionSummary transactions={transactions} />
      <TransactionList
        transactions={filteredTransactions}
        editTransaction={editTransaction}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default App;
