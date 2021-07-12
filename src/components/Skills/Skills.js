import React from 'react';
import styled from 'styled-components';

import PageHeader from '@src/components/common/PageHeader';
import { Hidden } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from '@src/components/common/Flex';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Avatar from './Avatar';
//import AvatarSmall from './AvatarSmall';

const SkillsWrapper = styled.section`
  ${props => props.theme.spacing.sectionBottom};
  position: relative;
  .skill__icons {
    padding: 30px 0;
    @media ${props => props.theme.media.tablet} {
      padding: 10px 0;
    }

    svg {
      color: ${props => props.theme.primaryColor};
    }
  }
  .skills__word-clouds {
    @media ${props => props.theme.media.tablet} {
      display: none;
    }

    p {
      position: absolute;
      color: ${props => props.theme.accentColor};
      z-index: -1;
      left: 0;
      right: 0;
      font-weight: 900;
    }
    z-index: -1;
  }
`;

const WordClouds = () => {
  return (
    <Parallax
      y={['-350px', '150px']}
      slowerScrollRate={true}
      aria-hidden="true"
      className="skills__word-clouds"
    >
      
      
    </Parallax>
  );
};

const Skills = () => (
  <SkillsWrapper>
    <ParallaxProvider>
      <PageHeader>My Skillsets</PageHeader>

      {/* <SkillPie percent={90} name={"JavaScript"} /> */}
      <Flex className="skill__icons" justify="space-around" align="center">
      <Avatar src="python.png" />
      <Avatar src="cpp.png" />
      <Avatar src="mysql.png" />
      <Avatar src="git.png" />
      <Avatar src="azure.jpg" />
	  <Avatar src="asp.png" />
	  <Avatar src="ubuntu.jpg" />
	  <Avatar src="mongodb.png" />
	  <Avatar src="nginx.png" />
	  <Avatar src="pytorch.png" />
	  <Avatar src="matlab.png" />
	  <Avatar src="r.jpg" />
	  <Avatar src="tensorflow.png" />
	  <Avatar src="java.png" />
        <FontAwesomeIcon icon={['fab', 'node']} size="5x" />
      </Flex>

      <Hidden md xs sm>
        <WordClouds />
      </Hidden>
    </ParallaxProvider>
  </SkillsWrapper>
);

export default Skills;
