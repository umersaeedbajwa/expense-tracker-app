import React from 'react';
import './App.css';
import { Header } from './components/header.js';
import { Balance } from './components/balance';  
import { AccountSummary } from './components/accountSummary';
import { TransactionHistory} from './components/transactionHistory';
import { AddTransaction } from './components/addTransactoin';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div> 
    </div>
  );
}

export default App;
