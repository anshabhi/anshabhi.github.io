import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import svgRect from '@src/static/home_rect.svg';

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '@common/IconLink';
//import PageHeader from '@common/PageHeader';
//import Flex from '@common/Flex';
import Button from '@common/Button';

//import { Card, CardIcon, CardText, CardTitle } from '@common/Card';
//import Avatar from './Avatar';



const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>Abhinav Agarwal</h1>
          <p className="adjust">Software Developer skilled in Full Stack developement and Machine Learning</p>

          <div className="home__CTA">
            <Button className="cta" as="a" href="#">
              Download Resume
            </Button>

            <div className="home__social">
              <IconLink
                label="github"
                icon={['fab', 'github']}
                href="//github.com/anshabhi"
              />
              <IconLink
                label="linkedin"
                icon={['fab', 'linkedin']}
                href="//linkedin.com/in/mrabhinavagarwal"
              />
              <IconLink
                label="stack-exchange"
                icon={['fab', 'stack-exchange']}
                href="https://stackexchange.com/users/5887324"
              />
			  <IconLink
                label="kaggle"
                icon={['fab', 'kaggle']}
                href="https://www.kaggle.com/abhinavagarwal17"
              />
			  <IconLink
                label="hackerrank"
                icon={['fab', 'hackerrank']}
                href="https://www.hackerrank.com/abhinav_agarwal4"
              />
			   <IconLink
                label="leetcode"
                icon={['fa', 'code']}
                href="https://leetcode.com/anshabhi/"
              />
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>

      {/* Things I LOVE */}
     
    </HomeWrapper>
  );
};

export default Home;
