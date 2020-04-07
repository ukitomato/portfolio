import React from 'react';
import person from '../imgs/person.gif';
import '../App.css';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import ColoredLine from './ColoredLine';

function About() {
    return (
        <Container fluid id="about" className="about page">
            <Row className="justify-content-md-center align-items-center">
                <Col xs={6} md={5} lg={4}>
                    <img
                        src={person}
                        alt="Image placeholder"
                        className="img-fluid"
                    />
                </Col>
                <Col xs={6} md={5} lg={4}>
                    <Col className="section-heading">
                        <h2>
                            About <strong>Me</strong>
                        </h2>
                        <ColoredLine
                            color={'#52cef6'}
                            className={'section-line'}
                        />
                    </Col>
                    <p className="description">
                        I&apos;m a Master&apos;s student at University of
                        Tsukuba <br /> and an engineer.
                    </p>
                    <p className="about-page">
                        I&apos;m majoring in User Interface, Human-Computer
                        Interaction, Computer Science. I have proposed
                        interfaces that enable a new interaction and have
                        implemented a prototype/Proof of Concept. As an
                        engineer, I have experienced both a long-term internship
                        and short-term internships. Of course, I also do
                        developments on my own.
                    </p>
                    <Button variant="light" size={'lg'} className={'mt-5'}>
                        <Link
                            activeClass="active"
                            to={'contact'}
                            spy={true}
                            smooth={true}
                            offset={-56}
                            duration={500}
                        >
                            Contact Me
                        </Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
