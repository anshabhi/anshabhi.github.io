import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Image from '@components/Image';

const AvatarWrapper2 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #f8f8f8;
  overflow: hidden;
  margin: 0;
  background-color: #f8f8f8;
`;
const Avatar2 = ({ src }) => {
  return (
    <AvatarWrapper2>
      <Image src={src} />
    </AvatarWrapper2>
  );
};

Avatar2.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Avatar2;