import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";
import {useParams} from "react-router-dom";

export const Post = () => {
    const { id } = useParams();
    const {transactions, deleteTransaction} = useContext(GlobalContext);
    const transaction = transactions[id];

    return (
        <h2>
            <div className="col-1 mt-2">
                {transaction.text}
                <br/>
                {/*<span>{transaction.amount)}</span>*/}
                <br/>
                <span>{transaction.date}</span>
                <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            </div>
        </h2>
    )
}
