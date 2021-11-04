import * as React from "react"
import { ReactElement } from "react"
import { Col, Container, Row } from "react-bootstrap"

import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import ColoredLine from "./colored-line"
import "./skill.css"
import Internship from "./internship"

function Career(): ReactElement {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          fields {
            source
          }
          frontmatter {
            name
            description
            position
            type
            term
            topic
            img {
              childImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 100 }
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `)

  console.log(data.allMdx.nodes[0].fields)
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
          {data.allMdx.nodes
            .filter(node => node.fields.source === "career")
            .map((career) => {
              return (
                <div className="p-4">
                  <Internship data={career.frontmatter} />
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
