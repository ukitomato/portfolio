import * as React from "react"
import { ReactElement } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import scrollTo from "gatsby-plugin-smoothscroll"

import styled from "styled-components"

function Landing(): ReactElement {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "placeholder.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const filteredImage = [
    data.desktop.childImageSharp.fluid,
    `linear-gradient(rgba(26, 38, 47, 0.5), rgba(19, 28, 34, 0.9))`,
  ].reverse()

  return (
    <BackgroundImage
      Tag="section"
      fluid={filteredImage}
      style={{
        maxHeight: "100vh",
        backgroundPosition: "center right",
        backgroundSize: "cover",
      }}
      preserveStackingContext
    >
      <Container
        id="home"
        className="home d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Row>
          <Col style={{ color: "whitesmoke" }} className="text-center">
            <div style={{ fontSize: 72 }}>
              Howdy, I&apos;m<strong> Yuki Yamato</strong>!
            </div>
            <p style={{ fontSize: 26 }}>
              I&apos;m a full-stack web/mobile/IoT/interface developer.
            </p>
          </Col>
        </Row>
        <Row>
          <Button
            variant="info"
            size={"lg"}
            className={"mt-5"}
            onClick={() => scrollTo("#about")}
          >
            About Me
          </Button>
        </Row>
      </Container>
    </BackgroundImage>
  )
}

const StyledLanding = styled(Landing)`
  color: white;
`

export default StyledLanding
