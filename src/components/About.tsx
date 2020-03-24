import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Button, Container } from 'react-bootstrap';

function About() {
    return (
        <Container fluid id="about" className="page">
            <img src={logo} className="App-logo" alt="logo" />
            <p>About</p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <Button variant="primary" className="mr-1">
                Primary
            </Button>
        </Container>
    );
}

export default About;
