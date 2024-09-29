import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [type, setType] = useState('Income');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { type, amount, description, date };
    addTransaction(newTransaction);
    setType('Income');
    setAmount('');
    setDescription('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
