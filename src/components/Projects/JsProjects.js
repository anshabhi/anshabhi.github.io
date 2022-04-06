import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import PageHeader from '@common/PageHeader';
import IFrame from '@common/IFrame';
import { IconButton } from '@common/Button';

import { ProjectLinks, ProjectPreview } from './ProjectTemplate.style';
import ProjectTemplate from './ProjectTemplate';

const JsProjectsWrapper = styled.section`
  ${props => props.theme.spacing.sectionBottom};
`;

const JsProjects = () => {
  const jsprojects = useStaticQuery(
    graphql`
      query {
        allJsprojectsJson {
          edges {
            node {
             excerpt1
			 excerpt2
			 excerpt3
              title
              id
              links {
                github
                codepen
              }
            }
          }
        }
      }
    `
  );

  return (
    <JsProjectsWrapper id = "jsprojects">
      <PageHeader> Machine Learning Projects</PageHeader>

      {jsprojects.allJsprojectsJson.edges.map(({ node }) => (
        <ProjectTemplate
          key={node.id}
          title={node.title}
          desc1={node.excerpt1}
		  desc2={node.excerpt2}
		  desc3={node.excerpt3}
          links={
            <ProjectLinks>
             
              <IconButton
                label="github"
                href={node.links.github}
                icon={['fab', 'github']}
              />
            </ProjectLinks>
          }
          preview={
            <ProjectPreview>
              <IFrame livedemo src={node.links.codepen} />
            </ProjectPreview>
          }
        />
      ))}
    </JsProjectsWrapper>
  );
};

export default JsProjects;
