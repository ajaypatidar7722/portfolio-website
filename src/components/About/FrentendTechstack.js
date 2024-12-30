import React from 'react'
import { Col, Row } from "react-bootstrap";
import { TbBrandNextjs } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import {
  SiStorybook,
  SiRedux,
  SiMaterialui,
  SiTypescript,
  SiReduxsaga,
} from "react-icons/si";


export default function FrentendTechstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      <h6>Javascript</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiTypescript />
      <h6>Typescript</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiReact />
      <h6>React.js</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiRedux />
      <h6>Redux</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiReduxsaga />
      <h6>Reduxsaga</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <TbBrandNextjs />
      <h6>Next.js</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiStorybook />
      <h6>Storybook</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiMaterialui />
      <h6>Material UI</h6>
    </Col>
</Row>
  )
}
