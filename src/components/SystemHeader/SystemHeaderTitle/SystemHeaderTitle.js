import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    title: {
      flexGrow: '1',
      '& h4': {
        display: 'inline',
        textDecoration: 'none',
        color: 'var(--color-white)',
      },
    },
    base: {
      fontWeight: 'var(--font-weight-bold)',
    },
    productTitle: {
      textTransform: 'capitalize',
    },
  };
});

function SystemHeaderTitle({productTitle, solutionTitle}) {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Typography variant="h4" className={classes.base}>
        {solutionTitle}
      </Typography>
      <Typography variant="h4"> | </Typography>
      <Typography variant="h4" className={classes.productTitle}>
        {productTitle}
      </Typography>
    </div>
  );
}

SystemHeaderTitle.propTypes = {
  /* Product title to display, including path if applicable*/
  productTitle: PropTypes.string.isRequired,
  /* Solution title to display */
  solutionTitle: PropTypes.string.isRequired,
};

export default SystemHeaderTitle;
