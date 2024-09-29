import React from 'react';

const TransactionSummary = ({ transactions }) => {
  const income = transactions
    .filter(tx => tx.type === 'Income')
    .reduce((acc, tx) => acc + Number(tx.amount), 0);
  
  const expense = transactions
    .filter(tx => tx.type === 'Expense')
    .reduce((acc, tx) => acc + Number(tx.amount), 0);

  const balance = income - expense;

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Income: {income}</p>
      <p>Total Expense: {expense}</p>
      <p>Current Balance: {balance}</p>
    </div>
  );
};

export default TransactionSummary;
