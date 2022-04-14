import React, {useContext, useEffect, useState} from 'react';
import {Transaction} from './Transaction';

import {GlobalContext} from '../context/GlobalState';

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    const [transactionsList, setTransactionsList] = useState(transactions);

    useEffect(() => {
        function setHistory() {
            window.addEventListener('storage', () => {
                setTransactionsList(JSON.parse(localStorage.getItem('transactionData')) || [])
            });
        }

        setHistory();
    }, [])

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactionsList.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </>
    )
}
