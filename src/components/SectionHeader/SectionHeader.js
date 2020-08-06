import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    borderBottom: '1px solid var(--color-lightGray)',
    fontSize: '1.4rem',
    marginBottom: '1.5rem',
    color: '#5B5858'
  }
});

function SectionHeader({children}) {
  const classes = useStyles();
  return (
    <Typography variant="overline">
      <header className={classes.header}>{children}</header>;
    </Typography>
  )
}

SectionHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default SectionHeader;
