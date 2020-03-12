import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '3rem',
  // width: '100%',
};

function Section({children}) {
  return <section style={styles}>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
