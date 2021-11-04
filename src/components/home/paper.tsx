import * as React from "react"
import { ReactElement } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Paper = (props: { data }): ReactElement => {
  const image = getImage(props.data.img)

  return (
    <Card style={{ backgroundColor: "#292f33" }}>
      <Card.Header as={"h3"} className="text-center p-3">
        {props.data.name}
      </Card.Header>
      <Card.Body>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs={10} md={10} lg={8}>
              <Col className="justify-content-start">
                <p className="i-description text-left">
                  {props.data.description}
                </p>
              </Col>
              <Col>
                <ul className="site-list">
                  <li className="site-check">Type: {props.data.type}</li>
                  <li className="site-check">
                    Term:{" "}
                    <span className="date">
                      <span className="icon-calendar" /> {props.data.term}
                    </span>
                  </li>
                  <li className="site-check">Topic: {props.data.topic}</li>
                </ul>
              </Col>
            </Col>
            <Col xs={10} md={10} lg={4} className="p-4">
              <Link to={props.data.url}>
                <GatsbyImage image={image} alt="publisher image" />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <small style={{ color: "darkgray" }}>{props.data.publish}</small>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default Paper
