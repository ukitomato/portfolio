import * as React from "react"
import { ReactElement } from "react"
import { Accordion, Col, Container, ProgressBar, Row } from "react-bootstrap"

import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import ColoredLine from "./colored-line"
import "./skill.css"
import Internship from "./internship"
import { getImage } from "gatsby-plugin-image"
import Paper from "./paper"

function Research(): ReactElement {
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
            publish
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
  return (
    <Container
      fluid
      id="research"
      className="skill justify-content-center align-items-center pt-5"
      style={{
        minHeight: "50vh",
        backgroundColor: "#212529FF",
        color: "whitesmoke",
      }}
    >
      <Row className="justify-content-center p-4">
        <Col xs={10} className="section-heading justify-content-center">
          <h2 className={"text-center"}>
            My <strong>Research</strong>
          </h2>
          <ColoredLine color={"#52cef6"} className={"career-section-line"} />
        </Col>
        <Col xs={10}>
          {data.allMdx.nodes
            .filter(node => node.fields.source === "research")
            .map((paper, i) => {
              return (
                <div className="p-4">
                  <Paper data={paper.frontmatter} />
                </div>
              )
            })}
        </Col>
      </Row>
    </Container>
  )
}

const StyledResearch = styled(Research)`
  color: white;
`

export default StyledResearch
