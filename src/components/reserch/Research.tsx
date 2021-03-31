import React, { ReactElement } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Research = (props: {
    name: string;
    img: string;
    description: string;
    type: string;
    term: string;
    topic: string;
    publish: string;
    url: string;
}): ReactElement => {
    return (
        <Card bg={'dark'}>
            <Card.Header as={'h3'}>{props.name}</Card.Header>
            <Card.Body>
                <Row className="justify-content-center align-items-center">
                    <Col xs={10} md={10} lg={8}>
                        <Col className="justify-content-start">
                            <p className="r-description text-left">
                                {props.description}
                            </p>
                        </Col>
                        <Col>
                            <ul className="site-list">
                                <li className="site-check">
                                    Type: {props.type}
                                </li>
                                <li className="site-check">
                                    Term:{' '}
                                    <span className="date">{props.term}</span>
                                </li>
                                <li className="site-check">
                                    Topic: {props.topic}
                                </li>
                            </ul>
                        </Col>
                        <Col className="justify-content-start">
                            <p className="r-publish text-left">
                                {props.publish}
                            </p>
                        </Col>
                    </Col>
                    <Col xs={10} md={10} lg={2}>
                        <a href={props.url}>
                            <img
                                src={props.img}
                                alt="placeholder"
                                className="img-fluid"
                            />
                        </a>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Research;
