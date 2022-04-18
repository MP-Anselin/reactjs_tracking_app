import React, {useContext} from 'react';
import {Line} from "react-chartjs-2";
import {MDBContainer} from "mdbreact";

import {GlobalContext} from '../context/GlobalState';

export const ChartDisplay = () => {
    const {transactions} = useContext(GlobalContext);

    const dateList = transactions.map(transaction => transaction.date);
    const income = transactions.filter(transaction => transaction.amount > 0);
    const expensed = transactions.filter(transaction => transaction.amount < 0);
    const incomeAmountList = income.map(ic => ic.amount);
    const expensedAmountList = expensed.map(ex => ex.amount);

    const data = {
        dataLine: {
            labels: dateList,
            datasets: [
                {
                    label: "EARNED",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "green",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "green",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: incomeAmountList,
                },
                {
                    label: "EXPENSED",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(184, 185, 210, .3)",
                    borderColor: "red",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "red",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: expensedAmountList,
                }
            ]
        }
    };


    return (
        <MDBContainer>
            <h3 className="mt-5">Bar chart</h3>
            <Line data={data.dataLine} options={{ responsive: true }} />
        </MDBContainer>
    )
}
