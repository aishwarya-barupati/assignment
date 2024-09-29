import React from 'react';

const TransactionList = ({ transactions, editTransaction, deleteTransaction }) => {
  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.type} - {transaction.amount} - {transaction.description} - {transaction.date}
            <button onClick={() => editTransaction(transaction._id, transaction)}>Edit</button>
            <button onClick={() => deleteTransaction(transaction._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
