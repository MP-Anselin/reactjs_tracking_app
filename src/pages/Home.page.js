import React from "react";
import {Balance} from "../components/Balance";
import {IncomeExpenses} from "../components/IncomeExpenses";
import {AddTransaction} from "../components/AddTransaction";

import '../App.css';
import {ChartDisplay} from "../components/ChartDisplay";

const HomePage = () => {
    return (
        <div className="container">
            <Balance/>
            <IncomeExpenses/>
            <ChartDisplay/>
            <AddTransaction/>
        </div>
    );
};

export {HomePage};
