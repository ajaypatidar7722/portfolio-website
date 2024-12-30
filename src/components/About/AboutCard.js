import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';
import resumeData from '../resumeData';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hello Everyone, I am <span className='purple'>{resumeData.name}. </span>
            {resumeData.roleDescription}
            <br />
            <br />
            I'm passionate about writing clean, efficient code and I love solving problems. I'm also a good communicator
            and enjoy working with a team to achieve common goals. I’m flexible with my work hours to make sure we can
            collaborate easily across time zones. I’m committed to being available during key hours so we can
            communicate in real-time and keep projects moving forward.
            <br />
            <br />
            <p style={{ width: '80vw', marginTop: '30px' }}>
              I also have experience with cloud platforms like GCP and AWS, which will help in scaling your platform. I
              have efficiently utilized AWS services for deployment, scaling, and ensuring high availability of the
              application.
            </p>
            Outside of coding, I enjoy:
          </p>

          <ul>
            <li className='about-activity'>
              <ImPointRight /> Exploring emerging technologies
            </li>
            <li className='about-activity'>
              <ImPointRight /> Reading tech articles
            </li>
            <li className='about-activity'>
              <ImPointRight /> Traveling and experiencing diverse cultures
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
