import * as React from "react"
import { ReactElement } from "react"
import { Accordion, Col, Container, ProgressBar, Row } from "react-bootstrap"

import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import ColoredLine from "./colored-line"
import "./skill.css"

function Skill(): ReactElement {
  const data = useStaticQuery<GatsbyTypes.getSkillsQuery>(graphql`
      query getSkills {
          allContentfulSkill(sort: { fields: level, order: DESC }) {
              nodes {
                  experienceAt
                  duration
                  id
                  language
                  topic
                  level
              }
          }
      }
  `)
  return (
    <Container
      fluid
      id="skill"
      className="skill justify-content-center align-items-center pt-5"
      style={{
        minHeight: "50vh",
        backgroundColor: "#212529FF",
        color: "whitesmoke",
      }}
    >
      <Row className="justify-content-center p-4">
        <Col
          xs={10}
          md={10}
          lg={3}
          className="section-heading justify-content-start"
        >
          <h2 className={"text-start"}>
            My
            <br />
            Programming
            <br />
            <strong>Skill</strong>
          </h2>
          <ColoredLine color={"#52cef6"} className={"section-line"} />
        </Col>
        <Col xs={10} md={10} lg={7}>
          <Accordion>
            {data.allContentfulSkill.nodes.map((skill, i) => {
              return (
                <div key={skill.id}>
                  <Accordion.Item eventKey={i.toString()}>
                    <Accordion.Header>
                      <Container fluid>
                        <h5>{skill.language}</h5>
                        <ProgressBar
                          now={skill.level}
                          label={`${skill.level}%`}
                          style={{ color: "#52cef6" }}
                        />
                      </Container>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Container fluid className="text-center">
                        {skill.duration} <br />
                        {skill.experienceAt} | {skill.topic}
                      </Container>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              )
            })}
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

const StyledSkill = styled(Skill)`
  color: white;
`

export default StyledSkill
