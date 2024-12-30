import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import pdf from '../../Assets/../Assets/Resume_Ajay Patidar _Full-Stack.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import ReactGA from 'react-ga';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  'https://raw.githubusercontent.com/Madhavkabra/Portfolio/master/src/Assets/Resume%20Madhav%202023%20Dated.pdf';
// const resumeLink='https://drive.google.com/file/d/1gB-yScd-50V-YALTS8n8Of5H-4ThII1C/view?usp=sharing';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    gtag('event', 'Resume page', {
      event_category: 'Page view',
      event_label: 'Resume page view',
    });
    setWidth(window.innerWidth);
  }, []);

  const trackDownload = () => {
    gtag('event', 'Resume download', {
      event_category: 'Download',
      event_label: 'Resume download',
    });
  };

  return (
    <div>
      <Container
        fluid
        className='resume-section'
      >
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant='primary'
            href={pdf}
            target='_blank'
            style={{ maxWidth: '250px' }}
            onClick={trackDownload}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className='resume'>
          <Document
            file={resumeLink}
            className='d-flex flex-column align-items-center justify-content-center'
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
            />
            <Page
              pageNumber={2}
              scale={width > 786 ? 1.7 : 0.6}
            />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
