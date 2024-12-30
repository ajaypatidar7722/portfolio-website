import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import resumeData from "../resumeData";

function Home2() {
  const trackView = (link) => {
    gtag('event', `Link ${link}`, {
      'event_category': link,
      'event_label': link,
    });
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about programming and thrive on solving complex problems while embracing new challenges.With expertise in
              <i>
                <b className="purple"> React.js, JavaScript, TypeScript, and Node.js. </b>
              </i>
              <br />
              <br />
              I specialize in building innovative web applications.
            
                My areas of interest include blockchain, decentralized finance (DeFi), and collaboration tools.
                I work with technologies such as MongoDB, GraphQL, and microservices to develop efficient, scalable solutions.
              
              <br />
              <br />
              {/* I also have experience with cloud platforms like GCP and AWS, which will help in scaling your platform. I have efficiently utilized AWS services for deployment, scaling, and ensuring high availability of the application.
              <br />
              <br /> */}
              My goal is to create impactful software for startups, talent recruitment platforms, and decentralized projects.
          </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {resumeData.socialLinks.map((socialLink) => (
                <li className="social-icons">
                  <a
                    href={socialLink.url}
                    className="icon-colour  home-social-icons"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackView(socialLink.name)}
                  >
                    {socialLink.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
