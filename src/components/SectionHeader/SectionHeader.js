import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  borderBottom: '1px solid var(--color-lightGray)',
  fontSize: '1.4rem',
  marginBottom: '1.5rem',
};

function SectionHeader({children, style}) {
  return <header style={{...styles, ...style}}>{children}</header>;
}

SectionHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default SectionHeader;
