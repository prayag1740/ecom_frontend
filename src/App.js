import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import {BrowserRouter as Router} from "react-router-dom"
import WebFont from 'webfontloader';
import { Footer } from './components/Footer/Footer';



function App() {

  React.useEffect(() => {
    WebFont.load({
      'google' : {'families' : ['Roboto']}
    })
  }, [])

  return (
    <>
    <Router>
    <Header />
    <Footer />
    </Router>
    </>
  );
}

export default App;
