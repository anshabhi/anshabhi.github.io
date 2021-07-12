import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

//import Quote from './Quote';
import Avatar from './Avatar';
import Avatar3 from './Avatar3';
import { AboutWrapper, AboutInfo } from './About.style';
import { Card, CardIcon, CardText, CardTitle } from './Card';
const certs = () => (
  <Flex justify="space-between" align="center" id="concepts">
  <PageHeader>Other Achievements & Certificates</PageHeader>
  <br />
   <Card style={{ height: "280px" }}>
    <CardIcon>
          <Avatar3 src="gcny.png" />
        </CardIcon>
        <CardTitle> Google Cloud & New York Institute of Finance </CardTitle>
      <CardText>
   <p style={{ color: "red" }}><a href = "https://github.com/anshabhi/gcloud-trading-machine-learning"> Machine Learning for Trading </a> </p>
        
      </CardText>
    </Card>
	
    <Card style={{ height: "160px" }}>
    <CardIcon>
          <Avatar3 src="stanford.png" />
        </CardIcon>
        <CardTitle> Stanford University </CardTitle>
      <CardText>
   <p style={{ color: "red" }}><a href = "https://www.coursera.org/account/accomplishments/certificate/N7QBP8QLFPGN">  Machine Learning </a> </p>
        
      </CardText>
    </Card>
 <Card style={{ height: "180px" }}>
    <CardIcon>
          <Avatar3 src="google.jpg" />
        </CardIcon>
        <CardTitle> Google IT Support </CardTitle>
      <CardText>
   <p style={{ color: "red" }}><a href = "https://www.coursera.org/account/accomplishments/certificate/V5RTYETZQDRA">  Professional Certificate </a> </p>
        
      </CardText>
    </Card>
	 <Card style={{ height: "280px" }}>
    <CardIcon>
          <Avatar3 src="ucsd.png" />
        </CardIcon>
        <CardTitle> UC San Diego & HSE University </CardTitle>
      <CardText>
   <p style={{ color: "red" }}><a href = "https://github.com/anshabhi/discrete-maths"> Introduction to Discrete Mathematics for Computer Science </a> </p>
        
      </CardText>
    </Card>
     <Card style={{ height: "300px" }}>
    <CardIcon>
          <Avatar3 src="wharton.jpg" />
        </CardIcon>
        <CardTitle> Wharton School of Business </CardTitle>
      <CardText>
   <p style={{ color: "red" }}><a href = "https://www.coursera.org/account/accomplishments/certificate/DQFK96USHTVB"> Business Foundations </a>
	<br/>
	<a href = "https://www.coursera.org/account/accomplishments/certificate/SQWPVRXJ5E47"> Business Analytics </a>
   </p>
        
      </CardText>
    </Card>
	
	 <Card style={{ height: "230px" }}>
    <CardIcon>
          <Avatar3 src="imperial.jpg" />
        </CardIcon>
        <CardTitle> Imperial College London </CardTitle>
      <CardText>
   <p style={{ color: "red" }}><a href = "https://www.coursera.org/account/accomplishments/certificate/5YS3HL86VGJA"> Mathematics for Machine Learning </a> </p>
        
      </CardText>
    </Card>
		 <Card style={{ height: "240px" }}>
    <CardIcon>
          <Avatar3 src="csm.png" />
        </CardIcon>
        <CardTitle> Scrum Alliance </CardTitle>
      <CardText>
   <p style={{ color: "red" }}><a href = "https://github.com/anshabhi/certificates/blob/master/scrum.pdf"> Certified Scrum Master </a> </p>
        
      </CardText>
    </Card>
		 <Card style={{ height: "230px" }}>
    <CardIcon style={{ height: "170px",width: "170px" }}>
          <Avatar3 src="ETS.jpg" />
        </CardIcon>
        <CardTitle> Test Scores </CardTitle>
      <CardText>
   <p style={{ color: "red" }}><a href = "https://github.com/anshabhi/certificates/blob/master/gre.pdf"> GRE: 325 (166Q, 159V) </a>
	<br/>
	
	<a href = "https://github.com/anshabhi/certificates/blob/master/toefl.pdf"> TOEFL: 112 </a>
   </p>
        
      </CardText>
    </Card>
	
  </Flex>
);
export default certs;
