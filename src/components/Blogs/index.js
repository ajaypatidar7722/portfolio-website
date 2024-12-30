import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Blog from "./Blog";

 const blogs = [{
  title: "",
  link: "",
  content: "",
  readTime: '',
  stack: [""]
 }]
function About() {

  useEffect(() => {
    gtag('event', 'About page', {
      'event_category': 'Page view',
      'event_label': 'About page view',
    });
  }, [])

  return (
    <Container fluid className="about-section blog-container">
      <Particle />
      <Container>
        <Row>
          {blogs.map(blog =>
            <Col
              xxl={3}
              xl={3}
              lg={4}
              md={6}
              sm={1}
              style={{
                justifyContent: "center",
                paddingBottom: "50px",
              }}
            >
              <Blog
                {...blog}
              />
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default About;
