import * as React from "react"
import { ReactElement } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image"

type PaperProps = {
  name: string
  description: { description: string }
  publish: { publish: string }
  type: string
  term: string
  topic: string
  url: string
  img: ImageDataLike
}

const Paper = (props: { data: PaperProps }): ReactElement => {
  const image: IGatsbyImageData = getImage(props.data.img)!

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
                  {props.data.description.description}
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
              <a href={props.data.url}>
                <GatsbyImage image={image} alt="publisher image" />
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <small style={{ color: "darkgray" }}>
                {props.data.publish.publish}
              </small>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default Paper
