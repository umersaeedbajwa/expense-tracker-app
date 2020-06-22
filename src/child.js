import React from 'react';
import './App.css';

function Child() {
    let transaction = [
        {amount: 500, desc: "Cash"},
        {amount: -200, desc: "Cloth"},
        {amount: -400, desc: "Fish"}
    ]
    return (
        <div className='container'>
            <h1 className="text-centre">Expense Tracker</h1>
            <h3>Your Balance <br /> $260</h3>

            <div className="expense-container">

                <h3>Income <br /> $100</h3>
                <h3>Expense <br />$200</h3>

            </div>

            <h3>History</h3>
            <hr />
            <ul className="transation-list">
                <li>
                    <span>Cash</span>
                    <span>+500</span>
                </li>
                <li>
                    <span>Cloth</span>
                    <span>-500</span>
                </li>
                <li>
                    <span>Fruits</span>
                    <span>-500</span>
                </li>
            </ul>

            <h3>Add New Transations</h3>
            <form className="transaction-form">
                <label>
                    Enter Description <br />
                    <input type="text" required/>
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="number" required/>
                </label>
                <br />

                <input type="submit" value="Add Transaction" />
            </form>


        </div>
    );
}

export default Child;
