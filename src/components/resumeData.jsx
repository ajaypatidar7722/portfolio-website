import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { GiClick } from 'react-icons/gi';
import acceleratorImg from '../Assets/Projects/AcceleratorApp.png';
import glintImg from '../Assets/Projects/Glints.png';
import santimentImg from '../Assets/Projects/Santiment.png';
import iWaveImg from '../Assets/Projects/Iwave.png';

const resumeData = {
  imagebaseurl: `https://picsum.photos/2133/1200`,
  name: 'Ajay Patidar',
  role: 'Full-Stack Developer',
  linkedinId: 'https://www.linkedin.com/in/ajay-patidar-6b123778/',
  whatsappLink: '',
  skypeid: '',
  roleDescription:
    'I am a full-stack developer with a passion for working with modern technologies such as React.js, Node.js, and blockchain. I enjoy collaborating on innovative projects and building scalable solutions that drive meaningful impact.',
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ajay-patidar-6b123778/',
      icon: <FaLinkedinIn />,
    },
    {
      name: 'github',
      url: 'https://github.com/ajaypatidar7722',
      icon: <AiFillGithub />,
    },
    {
      name: 'email',
      url: 'mailto:ajaypatidar7722@gmail.com',
      icon: <MdEmail />,
    },

    {
      name: 'upwork',
      url: 'https://www.upwork.com/freelancers/~01a3a10a5eb07177a6',
      icon: <SiUpwork />,
    },
  ],
  aboutme: '',
  address: 'India',
  website: '',
  education: [
    // {
    //   UniversityName: '',
    //   specialization: '',
    //   MonthOfPassing: '',
    //   YearOfPassing: '',
    //   Achievements: '',
    // },
  ],
  work: [
    // {
    //   CompanyName: '',
    //   specialization: '',
    //   MonthOfLeaving: '',
    //   YearOfLeaving: '',
    //   responsibilites: [''],
    // },
  ],
  skills: [
    // {
    //   title: 'Frontend',
    //   list: [
    //     {
    //       skillname: '',
    //       skillPercent: 0.9,
    //     },
    //   ],
    // },
  ],
  portfolio: [
    {
      name: 'Accelerator app',
      technologies: ['Postgres', 'AWS', 'GraphQL', 'ElasticSearch', 'MongoDB', 'TypeScript', 'Jest', 'React'],
      description: `Developed a platform that connects product teams with CEOs to support startup growth. Focused on enhancing collaboration and communication, driving innovation, and refining features to facilitate effective interactions and engagement within the startup ecosystem.`,
      imgurl: acceleratorImg,
      buttonLabel: `View`,
      ghLink: 'https://www.acceleratorapp.co/en/',
      icon: <GiClick />,
    },
    {
      name: 'Glints',
      technologies: ['React.js', 'Node.js', 'Mocha', 'TypeScript', 'Postgres', 'ElasticSearch'],
      description: `Created an online job and talent platform designed to simplify the recruitment process. Enhanced user experience by delivering a streamlined interface that connects job seekers with opportunities, ultimately improving engagement and efficiency in talent acquisition.`,
      imgurl: glintImg,
      buttonLabel: `View`,
      ghLink: 'https://glints.com/',
      icon: <GiClick />,
    },
    {
      name: 'Santiment',
      technologies: ['ReactJS', 'Node.js', 'Storybook', 'SemanticUI', 'GraphQL', 'Jest', 'Webdriver.io'],
      description: ` Designed a library of reusable components that significantly improved application performance. Focused on enhancing user experience and development speed, while implementing quality assurance practices to ensure robust and reliable functionality throughout the application.`,
      imgurl: santimentImg,
      buttonLabel: `View`,
      ghLink: 'https://app.santiment.net/',
      icon: <GiClick />,
    },
    {
      name: 'iWave',
      technologies: ['React', 'Redux', 'Redux-Saga', 'Node.js', 'React Native', 'MongoDB'],
      description: `Collaborated with the CEO to design an intuitive user interface through comprehensive research and prototyping. Developed APIs and a mobile application, ensuring a seamless user experience across devices while meeting the specific needs of the target audience.`,
      imgurl: iWaveImg,
      // ghLink: "https://www.hashicorp.com/events/webinars/adfinis-hashiconf-2020-recap",
      // buttonLabel: `Website`,
    },
  ],
  testimonials: [
    // {
    //   description: '',
    //   name: '',
    // },
  ],
};

export default resumeData;
