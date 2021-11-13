import * as React from "react"
import { ReactElement } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image"

type InternshipProps = {
  name: string
  description: { description: string }
  img: ImageDataLike
  type: string
  position: string
  term: string
  topic: string
}

const Internship = (props: { data: InternshipProps }): ReactElement => {
  const image: IGatsbyImageData = getImage(props.data.img)!

  return (
    <Card style={{ backgroundColor: "#292f33" }}>
      <Card.Header as={"h3"} className="text-center p-3">
        {props.data.name}
      </Card.Header>
      <Card.Body>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={10} md={10} lg={4} className="p-4">
              <GatsbyImage image={image} alt="company image" />
            </Col>
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
                    Position: {props.data.position}
                  </li>
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
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default Internship
