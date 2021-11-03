import * as React from "react"
import { ReactElement } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import ColoredLine from "./colored-line"

import styled from "styled-components"

function Contact(): ReactElement {
  return (
    <Container
      fluid
      id="contact"
      className="contact d-flex flex-column justify-content-center align-items-center pt-5"
      style={{ minHeight: "50vh", backgroundColor: "#212529FF" }}
    >
      <Row
        className="justify-content-center"
        style={{ backgroundColor: "#212529FF", color: "whitesmoke" }}
      >
        <Col className="section-heading justify-content-center">
          <h2 className={"text-left"}>
            Contact <strong>Me</strong>
          </h2>
          <ColoredLine color={"#52cef6"} className={"contact-section-line"} />
        </Col>
      </Row>
      <Form
        action="https://send.pageclip.co/8QGBlPOoermKOh5p4RMD0StWFp7Evysh"
        className={"text-center"}
        method={"post"}
        style={{ backgroundColor: "#212529FF", color: "whitesmoke" }}
      >
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="input"
            placeholder="Enter your name"
            name={"name"}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name={"email"} />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formContent" className="mt-3">
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows={3} name={"freespace"} />
        </Form.Group>

        <Button
          variant="light"
          type="submit"
          className="pageclip-form__submit m-5"
        >
          Submit
        </Button>
      </Form>
    </Container>
  )
}

const StyledContact = styled(Contact)`
  color: white;
`

export default StyledContact
