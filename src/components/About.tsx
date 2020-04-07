import React, { ReactElement } from 'react';
import person from '../imgs/person.gif';
import '../App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import ColoredLine from './ColoredLine';

function About(): ReactElement {
    return (
        <Container fluid id="about" className="about page">
            <Row className="justify-content-center">
                <Col xs={10} md={10} lg={4}>
                    <img src={person} alt="placeholder" className="img-fluid" />
                </Col>
                <Col xs={10} md={10} lg={4}>
                    <Col className="section-heading justify-content-start">
                        <h2 className={'text-left'}>
                            About <strong>Me</strong>
                        </h2>
                        <ColoredLine
                            color={'#52cef6'}
                            className={'section-line'}
                        />
                    </Col>
                    <Col className="justify-content-start">
                        <p className="description text-left">
                            I&apos;m a Master&apos;s student at University of
                            Tsukuba <br /> and an engineer.
                        </p>
                        <p className="about-page text-left">
                            I&apos;m majoring in User Interface, Human-Computer
                            Interaction, Computer Science. I have proposed
                            interfaces that enable a new interaction and have
                            implemented a prototype/Proof of Concept. As an
                            engineer, I have experienced both a long-term
                            internship and short-term internships. Of course, I
                            also do developments on my own.
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
                </Col>
            </Row>
        </Container>
    );
}

export default About;
