import React from "react";
import {GlobalProvider} from "../context/GlobalState";
import {Balance} from "../components/Balance";
import {IncomeExpenses} from "../components/IncomeExpenses";
import {TransactionList} from "../components/TransactionList";
import {AddTransaction} from "../components/AddTransaction";

import '../App.css';

const HomePage = () => {
    return (
        <div className="container">
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
        </div>
    );
};

export {HomePage};
