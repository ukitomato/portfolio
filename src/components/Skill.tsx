import React, { ReactElement } from 'react';
import '../App.css';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import ColoredLine from './ColoredLine';

const java = 85;
const android = 70;
const python = 65;
const nodejs = 70;
const react = 70;
const git = 70;

function Skill(): ReactElement {
    return (
        <Container fluid id="skill" className="page ">
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
                    <ColoredLine color={'#52cef6'} className={'section-line'} />
                </Col>
                <Col xs={6} md={6} lg={7} className={'skill-progress'}>
                    <Row>
                        <h5>Java</h5>
                        <ProgressBar now={java} label={`${java}%`} />
                    </Row>
                    <Row>
                        <h5>Android</h5>
                        <ProgressBar now={android} label={`${android}%`} />
                    </Row>
                    <Row>
                        <h5>Python</h5>
                        <ProgressBar now={python} label={`${python}%`} />
                    </Row>
                    <Row>
                        <h5>NodeJS</h5>
                        <ProgressBar now={nodejs} label={`${nodejs}%`} />
                    </Row>
                    <Row>
                        <h5>React</h5>
                        <ProgressBar now={react} label={`${react}%`} />
                    </Row>
                    <Row>
                        <h5> Git</h5>
                        <ProgressBar now={git} label={`${git}%`} />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Skill;
