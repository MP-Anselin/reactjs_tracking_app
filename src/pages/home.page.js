import React from "react";
import "../App.css";
import {GlobalProvider} from "../context/GlobalState";
import {Header} from "../components/Header";
import {Balance} from "../components/Balance";
import {IncomeExpenses} from "../components/IncomeExpenses";
import {TransactionList} from "../components/TransactionList";
import {AddTransaction} from "../components/AddTransaction";

import '../App.css';

const HomePage = () => {
    return (
        <GlobalProvider>
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
};

export {HomePage};
