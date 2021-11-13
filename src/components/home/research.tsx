import * as React from "react"
import { ReactElement } from "react"
import { Col, Container, Row } from "react-bootstrap"

import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import ColoredLine from "./colored-line"
import "./skill.css"
import Paper from "./paper"

function Research(): ReactElement {
  const data = useStaticQuery<GatsbyTypes.getPapersQuery>(graphql`
      query getPapers {
          allContentfulPaper {
              nodes {
                  id
                  name
                  description {
                      description
                  }
                  publish {
                      publish
                  }
                  type
                  term
                  topic
                  url
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
      id="research"
      className="skill justify-content-center align-items-center pt-5"
      style={{
        minHeight: "50vh",
        backgroundColor: "#212529FF",
        color: "whitesmoke"
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
          {data.allContentfulPaper.nodes.map((paper: any) => {
            return (
              <div key={paper.id} className="p-4">
                <Paper data={paper} />
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
