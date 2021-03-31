import React, { ReactElement } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Researches from './components/Researches';

function App(): ReactElement {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Skill />
            <Career />
            <Researches />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
