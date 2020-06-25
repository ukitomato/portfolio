import React, { ReactElement } from 'react';
import '../App.css';
import {
    Accordion,
    Card,
    Col,
    Container,
    ProgressBar,
    Row,
} from 'react-bootstrap';
import ColoredLine from './ColoredLine';

const java = 85;
const android = 70;
const python = 65;
const nodejs = 70;
const ios = 60;
const react = 70;
const git = 80;
const rails = 50;
const flutter = 70;

function Skill(): ReactElement {
    return (
        <Container fluid id="skill" className="page ">
            <Accordion>
                <Row className="justify-content-center">
                    <Col
                        xs={4}
                        md={4}
                        lg={4}
                        className="section-heading  justify-content-star"
                    >
                        <h2 className={'text-left'}>
                            My
                            <br />
                            Programming
                            <br />
                            <strong>Skill</strong>
                        </h2>
                        <ColoredLine
                            color={'#52cef6'}
                            className={'section-line'}
                        />
                    </Col>
                    <Col xs={6} md={6} lg={6} className={'skill-progress'}>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <Row>
                                <h5>Java</h5>
                                <ProgressBar
                                    bsPrefix={'skill-progress-bar progress'}
                                    now={java}
                                    label={`${java}%`}
                                />
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                4 years <br />
                                Internship | Server Side, GWT, GCP
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <Row>
                                <h5>NodeJS</h5>
                                <ProgressBar
                                    bsPrefix={'skill-progress-bar progress'}
                                    now={nodejs}
                                    label={`${nodejs}%`}
                                />
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                3 years <br />
                                Internship | express, Slack App, VS Code
                                Extension, GCP
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            <Row>
                                <h5>Python</h5>
                                <ProgressBar
                                    bsPrefix={'skill-progress-bar progress'}
                                    now={python}
                                    label={`${python}%`}
                                />
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                3 years <br />
                                Research | scikit-learn, tensorflow, keras,
                                flask
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            <Row>
                                <h5>Android</h5>
                                <ProgressBar
                                    bsPrefix={'skill-progress-bar progress'}
                                    now={android}
                                    label={`${android}%`}
                                />
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                2 years <br />
                                Internship, Startup, Research | Google Maps,
                                Firebase, Bluetooth Serial
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} eventKey="5">
                            <Row>
                                <h5>iOS</h5>
                                <ProgressBar
                                    bsPrefix={'skill-progress-bar progress'}
                                    now={ios}
                                    label={`${ios}%`}
                                />
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>
                                1 years <br />
                                Startup, Research | Chat Application,
                                Eye-Tracking
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="6">
                            <Row>
                                <h5>React</h5>
                                <ProgressBar
                                    bsPrefix={'skill-progress-bar progress'}
                                    now={react}
                                    label={`${react}%`}
                                />
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>
                                2 years <br />
                                Internship, Individual | ReactJS, ReactNative
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} eventKey="7">
                            <Row>
                                <h5>Rails</h5>
                                <ProgressBar
                                    bsPrefix={'skill-progress-bar progress'}
                                    now={rails}
                                    label={`${rails}%`}
                                />
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                            <Card.Body>
                                1 years <br />
                                Individual | Chat Application (Advanced Rails
                                Tutorial)
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} eventKey="8">
                            <Row>
                                <h5> Flutter</h5>
                                <ProgressBar
                                    bsPrefix={'skill-progress-bar progress'}
                                    now={flutter}
                                    label={`${flutter}%`}
                                />
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="8">
                            <Card.Body>
                                0.5 years <br />
                                Startup | Dart, Firebase, Cross Platform
                                Development, PWA
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="9">
                            <Row>
                                <h5> Git</h5>
                                <ProgressBar
                                    bsPrefix={'skill-progress-bar progress'}
                                    now={git}
                                    label={`${git}%`}
                                />
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="9">
                            <Card.Body>
                                5 years <br />
                                Internship, Research, Individual | Github
                                Enterprise Management, Github Actions
                            </Card.Body>
                        </Accordion.Collapse>
                    </Col>
                </Row>
            </Accordion>
        </Container>
    );
}

export default Skill;
