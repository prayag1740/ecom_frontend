import './App.css';
import React from 'react';
import { Header } from './components/Header';
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
    <Header />
    </Router>
    </>
  );
}

export default App;
