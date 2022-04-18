import React from 'react';
import {ExpenseInfo} from "./Expenses";

//Money formatter function
function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
        p[0]
            .split('')
            .reverse()
            .reduce(function (acc, num, i, orig) {
                return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
            }, '') +
        '.' +
        p[1] +
        ' €'
    );
}

export const IncomeExpenses = () => {
    const info = ExpenseInfo();

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{moneyFormatter(info.income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{moneyFormatter(info.expense)}</p>
            </div>
        </div>
    )
}
