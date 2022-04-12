import React from 'react';
import { Header } from './components/Header';

import { GlobalProvider } from './context/GlobalState';

import {Routes} from "./routes/routes";

function App() {
  return (
    <GlobalProvider>
      <Header />
        <Routes/>
    </GlobalProvider>
  );
}

export default App;
