import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  padding: '0 1.5rem',
};

function SectionBody({children, style}) {
  return <div style={{...styles, ...style}}>{children}</div>;
}

SectionBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default SectionBody;
