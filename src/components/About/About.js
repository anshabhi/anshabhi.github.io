import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

//import Quote from './Quote';
import Avatar from './Avatar';
import Avatar2 from './Avatar2';
import { AboutWrapper, AboutInfo } from './About.style';
import { Card, CardIcon, CardText, CardTitle } from '@common/Card';
const ThingsILove = () => (
  <Flex justify="space-between" align="center">
    <Card style={{ height: "400px" }}>
    <CardIcon>
          <Avatar2 src="uwb.jpg" />
        </CardIcon>
        <CardTitle> University of Washington Bothell </CardTitle>
      <CardText>
   <p style={{ color: "red" }}>Autumn 2021 - Winter 2023</p>
	<br />
	Master of Science in Computer Science & Software Engineering
<p style={{ fontSize: "12px" }}>  Expected Coursework: Machine Learning, Algorithm Design And Analysis, Advanced Topics in Computer Vision, Evaluating Software Design, Software Management, Deep Learning and Artificial Intelligence, Multimedia Database Systems</p>
        
      </CardText>
    </Card>

    <Card style={{ height: "400px" }}>
      <CardIcon>
      <Avatar2 src="manipal.png" />
      </CardIcon>
      <CardTitle>Manipal Institute of Technology</CardTitle>
	  <CardText>
      <p style={{ color: "red" }}>July 2017 - July 2021</p>
	  <br />
	Bachelor of Technology in Information Technology
	  
	<p style={{ fontSize: "12px" }}>  Relevant Coursework: Data Structures, Algorithms, Database Systems, Distributed Systems, Operating Systems, Software Engineering, Pattern Recognition, Big Data Analytics, Neural Networks, Data Warehousing, Advanced Calculus and Combinatorics</p>
	  </CardText>
    </Card>

    <Card>
    <CardIcon>
      <Avatar2 src="kvs.png" />
      </CardIcon>
      <CardTitle> Kendriya Vidyalaya Sangathan </CardTitle>
      <CardText>
        I did my schooling through various schools operated by the KV Sangathan.
      </CardText>
    </Card>
  </Flex>
);
const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
        <p>
          Hi, I'm Abhinav Agarwal, a passionate software developer currently pursuing the MS in CSSE degree at the University of Washington.
          Through a combination of course work, projects and certification, I have a wide range of skills across the domains of full stack development and machine learning.
          <br />
          <br />
          I am currently looking for Summer 2022 internships. I am willing to relocate and I have CPT work authorization.
        </p>
      </AboutInfo>
      <PageHeader style={{ marginTop: "120px" }}>
        My Alma Matter
      </PageHeader>
      <ThingsILove />
      <PageHeader style={{ marginBottom: "10px" }}>
        Work Experience <i className="fas fa-heart" />
      </PageHeader>
      <Flex justify="space-between" align = "center">
      <Card style={{ height: "350px" }}>
    <CardIcon>
        <Avatar2 src="icici-lombard.jpg" />
        </CardIcon>
        <CardTitle> ICICI Lombard </CardTitle>
      <CardText>
	  <p style={{ color: "blue" }}>Software Developer Intern</p>
	  <p style={{ color: "red" }}>February 2021 - August 2021</p>
        Part of a team tasked with maintenance and development of the backend systems of 5 customer facing applications, coded primarily in ASP.NET, C# WebAPI and Oracle SQL database.
      </CardText>
    </Card>
    <Card style={{ height: "450px" }}>
    <CardIcon>
        <Avatar2 src="cmu.png" />
        </CardIcon>
        <CardTitle> Careneige Mellon University </CardTitle>
      <CardText>
	  <p style={{ color: "blue" }}>Virtual Intern</p>
	  <p style={{ color: "red" }}>July 2020 - November 2020</p>
       Worked on developing model compression methods using parameter pruning & quantization for faster alignment of subtomograms captured by cryo-electron
tomography. The algorithms are implemented in Keras. Also, developed a GUI for a Python application for slicing and zooming into a tomogram model using
Django and JavaScript.

      </CardText>
    </Card>
    <Card style={{ height: "350px" }}>
    <CardIcon>
        <Avatar2 src="spicejet.png" />
        </CardIcon>
        <CardTitle> SpiceJet </CardTitle>
      <CardText>
	  <p style={{ color: "blue" }}>Information Technology Intern</p>
	  <p style={{ color: "red" }}>May 2019 - June 2019</p>
        Learnt the operations involved in DevOps and Agile Software Development. Developed and deployed containerized application on a Cluster using Kubernetes and studied orchestration between different nodes.
      </CardText>
    </Card>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
