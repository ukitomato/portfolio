import React from 'react';
import { Button, Container } from 'react-bootstrap';
import logo from '../logo.svg';

function Contact() {
    return (
        <Container fluid id="contact" className="page">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Contact</p>
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

export default Contact;
