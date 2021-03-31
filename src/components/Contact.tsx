import React, { ReactElement } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ColoredLine from './ColoredLine';

function Contact(): ReactElement {
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
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="input"
                        placeholder="Enter your name"
                        name={'name'}
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name={'email'}
                    />
                    <Form.Text className="text-muted">
                        We&apos;ll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formContent">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={3} name={'freespace'} />
                </Form.Group>

                <Button
                    variant="light"
                    type="submit"
                    className="pageclip-form__submit"
                >
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Contact;
