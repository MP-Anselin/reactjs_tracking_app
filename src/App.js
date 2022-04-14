import React from 'react';
import {Header} from './components/Header';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

import {Routes} from "./routes/routes";

function App() {
    return (
        <>
            <Header/>
            <Routes/>
        </>
    );
}

export default App;
