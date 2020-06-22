import React, { useContext } from 'react';

import { Transaction } from './transation';


import { GlobalContext } from '../context/globalState';




export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    console.log(transactions);

    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />

                ))}
            </ul>
        </div>
    )
}