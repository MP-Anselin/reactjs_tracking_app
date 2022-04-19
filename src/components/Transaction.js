import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {MoneyFormatter} from "./MoneyFormatter";

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus ' : 'plus'}>
            <div className="col-3">
                {transaction.text}
                <br/>
                <br/>
                <span className="right">{sign}{MoneyFormatter(transaction.amount)}</span>
                <br/>
                <br/>
                <span>{transaction.date}</span>
                <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            </div>
        </li>
    )
}
