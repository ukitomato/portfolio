import * as React from "react"
import { ReactElement } from "react"

import { Button, Col, Container, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"

import ColoredLine from "./colored-line"

function About(): ReactElement {
  return (
    <Container
      fluid
      id="about"
      className="about d-flex flex-column justify-content-center align-items-center pt-5"
      style={{ minHeight: "50vh", backgroundColor: "#212529FF" }}
    >
      <Row
        className="justify-content-center"
        style={{ backgroundColor: "#212529FF", color: "whitesmoke" }}
      >
        <Col xs={10} md={10} lg={5} className="p-4">
          <StaticImage
            src="../../images/me.jpg"
            alt="This is my face."
            layout="constrained"
            aspectRatio={414 / 552}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            style={{ maxHeight: "70vh" }}
          />
        </Col>
        <Col xs={10} md={10} lg={5} className="p-4 justify-content-center align-items-center d-flex flex-column">
          <Row>
            <Col xs={12} className="section-heading justify-content-start">
              <h2 className={"text-left"}>
                About <strong>Me</strong>
              </h2>
              <ColoredLine color={"#52cef6"} className={"section-line"} />
            </Col>
            <Col xs={12} className="justify-content-start">
              <p className="description text-left">
                I&apos;m a Master&apos;s student at University of Tsukuba and an engineer.
              </p>
              <p className="about-page text-left">
                I&apos;m majoring in User Interface, Human-Computer Interaction,
                Computer Science. I have proposed interfaces that enable a new
                interaction and have mplemented a prototype/Proof of Concept.{" "}
                <br />
                As an engineer, I have experienced both a long-term internship
                and short-term internships.
                <br />
                Of course, I also do developments on my own.
              </p>
              <Button variant="light" size={"lg"} className={"mt-5"}>
                Contact Me
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

const StyledAbout = styled(About)`
  color: white;
`

export default StyledAbout
