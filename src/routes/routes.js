import React from "react";
import {Routes as ReactRouterRoutes, Route} from "react-router-dom";
import {HomePage} from "../pages/Home.page";
import {TransactionListPage} from "../pages/TransactionList.page";

const Routes = () => {
    return (
        <ReactRouterRoutes>
            <Route
                path="/"
                element={<HomePage/>}
            />
            <Route path="list" element={<TransactionListPage/>}/>
        </ReactRouterRoutes>
    );
};

export {Routes};
