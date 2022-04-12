import React from "react";
import {Routes as ReactRouterRoutes, Route} from "react-router-dom";
import {HomePage} from "../pages/home.page";

const Routes = () => {
    return (
        <ReactRouterRoutes>
            <Route
                path="/"
                element={<HomePage/>}
            />
            {/*<Route path="login" element={<LoginPage/>}/>*/}
        </ReactRouterRoutes>
    );
};

export {Routes};
