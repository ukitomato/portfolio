import * as React from "react"

import { Col, Container, Row } from "react-bootstrap"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="bg-dark">
    <Container
      className=" justify-content-center align-content-center"
      style={{ color: "white" }}
    >
      <Row className="text-center">
        <Col>
          <small style={{ color: "#52cef6" }}>
            © {new Date().getFullYear()} by ukitomato All Rights Reserved.
          </small>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
