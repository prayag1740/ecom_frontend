import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home'
import ProductDetails from './components/ProductCard/ProductDetails'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
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
    <Routes>
    <Route exact path='/' Component={Home} />
    <Route exact path='/product/:id' Component={ProductDetails} />
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
