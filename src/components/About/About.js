import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

//import Quote from './Quote';
import Avatar from './Avatar';
import Avatar2 from './Avatar2';
import Avatar3 from './Avatar3';
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
   <p style={{ color: "red" }}>September 2021 - March 2022</p>
	<br />
	Completed 16 credits towards MS in Computer Science & Software Engineering 
<p style={{ fontSize: "12px" }}>  Completed Coursework: High Performance Computing, Evidence Based Design, Evaluating Software Design</p>
        
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
	  
	<p style={{ fontSize: "12px" }}>  Relevant Coursework: Data Structures, Database Systems, Distributed Systems, Operating Systems, Pattern Recognition, Big Data Analytics, Neural Networks, Data Warehousing, Data Mining, Advanced Calculus and Combinatorics</p>
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
          Hi, I'm Abhinav Agarwal, a passionate student recently graduated from Bachelor of Technology in Information Technology program from Manipal Institute of Technology.
          Through a combination of course work, projects and certifications, I have a wide range of skills across the domains of full stack development and machine learning.
          <br />
          <br />
          I am currently looking entry level full time software developer roles. I am based in India (GMT +5:30 timezone).
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
      <Card style={{ height: "420px" }}>
    <CardIcon>
        <Avatar3 src="ms-uw-nv.png" />
        </CardIcon>
        <CardTitle> Sponsored by Microsoft, Nvidia and UW </CardTitle>
      <CardText>
	  <p style={{ color: "turquoise" }}>Graduate Student Research Project Member</p>
	  <p style={{ color: "red" }}> April 2021 - July 2021 </p>
        <ul style={{   listStyleType: "circle", textAlign: "left" }}>
		<li> Performing several studies to evaluate how <i>artificial intelligence</i> could be more <i>energy-efficient.</i> </li>

	<li> Centered around <b>Yolov4, BERT, and Turing-NLG</b> implemented in <b>Pytorch</b> and <b>ONNX</b>. </li>
	</ul>
      </CardText>
    </Card>
    <Card style={{ height: "370px" }}>
    <CardIcon>
        <Avatar2 src="icici-lombard.jpg" />
        </CardIcon>
        <CardTitle> ICICI Lombard </CardTitle>
      <CardText>
	  <p style={{ color: "turquoise" }}> Software Developer Intern </p>
	  <p style={{ color: "red" }}>February 2021 - July 2021</p>
        <ul style={{   listStyleType: "circle", textAlign: "left" }}>
		<li> Built new APIs for 5 different customer-facing <b>ASP.NET</b> applications using <b>SQL</b> database.  </li>

	<li> Migrated a project with <i>multiple tables and procedures</i> from MS SQL to Oracle SQL Database. </li>
	</ul>

      </CardText>
    </Card>
    <Card style={{ height: "450px" }}>
    <CardIcon>
        <Avatar2 src="cmu.png" />
        </CardIcon>
        <CardTitle>Xu Labs, Careneige Mellon University </CardTitle>
      <CardText>
	  <p style={{ color: "turquoise" }}>Summer Intern</p>
	  <p style={{ color: "red" }}>July 2020 - November 2020</p>
        <ul style={{   listStyleType: "circle", textAlign: "left" }}>
		<li> Used <i>Parameter Pruning & Quantization</i> to reduce the size of a large and complex <b>Tensorflow</b> convolution neural network by 75% while preserving up to 70% of original accuracy.  </li>

	<li> Built a GUI web application for exploration of MRC models using <b>Django</b> framework and Metro UI </li>
	</ul>
	
      </CardText>
    </Card>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
