import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillGitlab } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import {
  SiClubhouse,
  SiGithub,
  SiTrello,
  SiJira,
  SiNetlify,
  SiBitbucket,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h6>Github</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGitlab />
        <h6>Gitlab</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitSquare />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
        <h6>Trello</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <h6>Jira</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiClubhouse />
        <h6>Clubhouse</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
    <SiNetlify />
      <h6>Netlify</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiBitbucket />
      <h6>Bitbucket</h6>
    </Col>
    </Row>
  );
}

export default Toolstack;
