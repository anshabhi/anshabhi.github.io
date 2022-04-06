import React from 'react';
import PropTypes from 'prop-types';

import {
  ProjectContent,
  ProjectDetail,
  ProjectWrapper,
} from './ProjectTemplate.style';

const ProjectTemplate = ({ title, desc1,desc2,desc3, links, preview }) => {
  return (
    <ProjectWrapper>
      <ProjectContent>
        <ProjectDetail>
          <div className="project__detail-container">
            <h2>{title}</h2>
			<ul style={{   listStyleType: "circle", textAlign: "left" }}>
			<li> {desc1}</li>
			<li> {desc2} </li>
			<li> {desc3} </li>
			</ul>
            
            {links}
          </div>
        </ProjectDetail>

        {preview}
      </ProjectContent>
    </ProjectWrapper>
  );
};

ProjectTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  links: PropTypes.node.isRequired,
  preview: PropTypes.node.isRequired,
};

export default ProjectTemplate;
