import React from 'react'
import { Col, Row } from "react-bootstrap";
import { TiCloudStorage } from "react-icons/ti";
import { AiFillGitlab } from "react-icons/ai";
import {
  DiNodejs,
  DiMongodb,
  } from "react-icons/di";
import {
  SiGithub,
  SiFirebase,
  SiDocker,
 } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

export default function BackendTechstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <DiNodejs />
      <h6>Node.js</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiFirebase />
      <h6>Firebase</h6>
    </Col>
     <Col xs={4} md={2} className="tech-icons">
      <GrGraphQl />
      <h6>GraphQl</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiDocker />
      <h6>Docker</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <TiCloudStorage />
      <h6>CloudStorage</h6>
    </Col>
  </Row>
  )
}


