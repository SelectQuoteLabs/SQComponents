import React from 'react';

import PropTypes from 'prop-types';

const sectionStyles = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '3rem',
  width: '100%',
};

function Section({children, style}) {
  return <section style={{...sectionStyles, ...style}}>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
