import React from 'react';
import { Header } from './components/Header';

import { GlobalProvider } from './context/GlobalState';

import './App.css';
import {HomePage} from "./pages/home.page";

function App() {
  return (
    <GlobalProvider>
      <Header />
        <HomePage/>
    </GlobalProvider>
  );
}

export default App;
