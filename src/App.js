import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import './App.css';
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Landing} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
