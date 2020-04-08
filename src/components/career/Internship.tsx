import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Internship = (props: {
    name: string;
    img: string;
    description: string;
    position: string;
    type: string;
    term: string;
    topic: string;
}) => {
    return (
        <Card bg={'dark'}>
            <Card.Header as={'h3'}>{props.name}</Card.Header>
            <Card.Body>
                <Row className="justify-content-center align-items-center">
                    <Col xs={10} md={10} lg={3}>
                        <img
                            src={props.img}
                            alt="placeholder"
                            className="img-fluid"
                        />
                    </Col>
                    <Col xs={10} md={10} lg={7}>
                        <Col className="justify-content-start">
                            <p className="i-description text-left">
                                {props.description}
                            </p>
                        </Col>
                        <Col>
                            <ul className="site-list">
                                <li className="site-check">
                                    Type: {props.type}
                                </li>
                                <li className="site-check">
                                    Position: {props.position}
                                </li>
                                <li className="site-check">
                                    Term:{' '}
                                    <span className="date">
                                        <span className="icon-calendar"></span>{' '}
                                        {props.term}
                                    </span>
                                </li>
                                <li className="site-check">
                                    Topic: {props.topic}
                                </li>
                            </ul>
                        </Col>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Internship;
