import React from 'react';

import Layout from '@components/Layout/Layout';
import SEO from '@components/seo';

import Home from '@components/Home/Home';
import About from '@components/About/About';
import Skills from '@components/Skills/Skills';
import Projects from '@components/Projects/Projects';
import Concepts from '@components/Concepts/Concepts';
import Contact from '@components/Contact/Contact';
import SmallProjects2 from '@components/Projects/SmallProjects2';
import Certs from '@components/About/Certs';

const IndexPage = () => (
  <Layout>
    <SEO title="Abhinav Agarwal - Highly Skilled Software Developer" />

    <Home />
    <About />
    <Skills />
    <Projects />
    <SmallProjects2/>
    <Certs />
    <Contact />
  </Layout>
);

export default IndexPage;