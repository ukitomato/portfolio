import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../logo.svg';
import ColoredLine from './ColoredLine';

function Contact() {
    return (
        <Container fluid id="contact" className="page">
            <Row className="justify-content-center">
                <Col className="section-heading justify-content-center">
                    <h2 className={'text-left'}>
                        Contact <strong>Me</strong>
                    </h2>
                    <ColoredLine
                        color={'#52cef6'}
                        className={'contact-section-line'}
                    />
                </Col>
            </Row>
            <Form
                action="https://send.pageclip.co/8QGBlPOoermKOh5p4RMD0StWFp7Evysh"
                className={'pageclip-form'}
                method={'post'}
            >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    className="pageclip-form__submit"
                >
                    Submit
                </Button>
            </Form>
            <form
                action="https://send.pageclip.co/8QGBlPOoermKOh5p4RMD0StWFp7Evysh"
                className="pageclip-form"
                method="post"
            >
                <input type="text" name="name" value="Roscoe Jones" />
                <input type="email" name="email" value="roscoe@example.com" />

                <button type="submit" className="pageclip-form__submit">
                    <span>Send</span>
                </button>
            </form>
        </Container>
    );
}

export default Contact;
