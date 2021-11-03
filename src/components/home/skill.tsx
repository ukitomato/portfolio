import * as React from "react"
import { ReactElement } from "react"
import { Accordion, Col, Container, ProgressBar, Row } from "react-bootstrap"

import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import ColoredLine from "./colored-line"
import "./skill.css"

function Skill(): ReactElement {
  const data = useStaticQuery(graphql`
    query {
      allSkillsJson {
        edges {
          node {
            language
            level
            duration
            experience_at
            topic
          }
        }
      }
    }
  `)
  console.log(data.allSkillsJson)
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
            {data.allSkillsJson.edges.map((skill, i) => {
              return (
                <Accordion.Item eventKey={i.toString()}>
                  <Accordion.Header>
                    <Container fluid>
                      <h5>{skill.node.language}</h5>
                      <ProgressBar
                        now={skill.node.level}
                        label={`${skill.node.level}%`}
                        style={{ color: "#52cef6" }}
                      />
                    </Container>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Container fluid className="text-center">
                      {skill.node.duration} <br />
                      {skill.node.experience_at} | {skill.node.topic}
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
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
