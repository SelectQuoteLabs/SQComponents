import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const styles = {
  borderBottom: '1px solid var(--color-lightGray)',
  fontSize: '1.4rem',
  marginBottom: '1.5rem',
  color: 'var(--color-granite)',
};

function SectionHeader({children, style = {}}) {
  return (
    <Typography
      variant="overline"
      component="header"
      style={{...styles, ...style}}
    >
      {children}
    </Typography>
  );
}

SectionHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default SectionHeader;
