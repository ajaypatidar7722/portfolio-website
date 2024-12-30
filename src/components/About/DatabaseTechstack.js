import React from 'react'
import { Col, Row } from "react-bootstrap";
import {
  DiMongodb,
 } from "react-icons/di";

import {
  SiPostgresql,
  SiMysql,
  SiElasticsearch,
  SiRedis,
} from "react-icons/si";

export default function DatabaseTechstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <DiMongodb />
      <h6>MongoDB</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiPostgresql />
      <h6>PostgreSQL</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiMysql />
      <h6>MySQL</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiElasticsearch />
      <h6>ElasticSearch</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiRedis />
      <h6>Redis</h6>
    </Col>
  </Row>
  )
}
