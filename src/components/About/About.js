import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import BackendTechstack from "./BackendTechstack";
import FrentendTechstack from "./FrentendTechstack";
import DatabaseTechstack from "./DatabaseTechstack";

function About() {

  useEffect(() => {
    gtag('event', 'About page', {
      'event_category': 'Page view',
      'event_label': 'About page view',
    });
  }, [])

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Row style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}>
         <h1 className="project-heading" style={{
          paddingTop:"30px !important"
        }}>
          Professional <strong className="purple">Skillset </strong>
        </h1>
        </Row>
        <h3 className="project-heading">
           <strong className="purple">Backend   </strong>
        </h3>

        <BackendTechstack />

        <h6 className="project-heading">
          <strong className="purple">Frontend  </strong>
        </h6>

        <FrentendTechstack />

        <h3 className="project-heading">
          <strong className="purple">DataBase  </strong>
        </h3>

        <DatabaseTechstack />
        {/* <Row style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}>
          And a few more. Check out the RESUME.
        </Row> */}

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Row style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}>
          And a few more. Check out the RESUME.
        </Row>

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
