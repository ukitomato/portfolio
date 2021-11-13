import * as React from "react"
import { ReactElement } from "react"
import { Col, Container, Row } from "react-bootstrap"

import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import ColoredLine from "./colored-line"
import Internship from "./internship"

import "./skill.css"

function Career(): ReactElement {
  const data = useStaticQuery<GatsbyTypes.getCareersQuery>(graphql`
      query getCareers {
          allContentfulCareer {
              nodes {
                  id
                  name
                  description {
                      description
                  }
                  position
                  type
                  term
                  topic
                  img {
                      gatsbyImageData(placeholder: BLURRED)
                  }
              }
          }
      }
  `)

  return (
    <Container
      fluid
      id="career"
      className="career justify-content-center align-items-center pt-5"
      style={{
        minHeight: "50vh",
        backgroundColor: "#212529FF",
        color: "whitesmoke",
      }}
    >
      <Row className="justify-content-center p-4">
        <Col xs={10} className="section-heading justify-content-center">
          <h2 className={"text-center"}>
            My <strong>Career</strong>
          </h2>
          <ColoredLine color={"#52cef6"} className={"career-section-line"} />
        </Col>
        <Col xs={10}>
          {data.allContentfulCareer.nodes.map((node: any) => {
            return (
              <div key={node.id} className="p-4">
                <Internship data={node} />
              </div>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

const StyledCareer = styled(Career)`
  color: white;
`

export default StyledCareer
