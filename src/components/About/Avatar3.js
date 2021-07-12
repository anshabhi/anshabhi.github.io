import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Image from '@components/Image';

const AvatarWrapper3 = styled.div`
  width: auto;
  height: auto;
  border-radius: 0%;
  border: 1px solid #f8f8f8;
  overflow: stretch;
  margin: 0;
  background-color: #f8f8f8;
`;
const Avatar3 = ({ src }) => {
  return (
    <AvatarWrapper3>
      <Image src={src} />
    </AvatarWrapper3>
  );
};

Avatar3.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Avatar3;