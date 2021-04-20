import React from 'react';
import PropTypes from 'prop-types';
import {Toolbar, makeStyles} from '@material-ui/core';
import SystemHeaderTitle from './SystemHeaderTitle/SystemHeaderTitle';
import SQRings from '../SQRings/SQRings';

const useStyles = makeStyles({
  root: {
    background: ({backgroundColor}) => backgroundColor,
  },
  systemHeader: {
    padding: '0 20px',
  },
  ringsIcon: {
    padding: '0',
    marginRight: '15px',
  },
  buttonGroup: {
    display: 'flex',
    padding: '0',
  },
});

function SystemHeader({
  backgroundColor,
  headerComponents,
  productTitle,
  solutionTitle = 'SC +',
}) {
  const classes = useStyles({backgroundColor});

  return (
    <Toolbar className={`${classes.systemHeader} ${classes.root}`}>
      <SQRings className={classes.ringsIcon} height="35" />
      <SystemHeaderTitle
        solutionTitle={solutionTitle}
        productTitle={productTitle}
      />
      {headerComponents && (
        <div className={classes.buttonGroup}>{headerComponents}</div>
      )}
    </Toolbar>
  );
}

SystemHeader.propTypes = {
  /* Defines the background color */
  backgroundColor: PropTypes.string.isRequired,
  /* Components to display on the right side of the header */
  headerComponents: PropTypes.node,
  /* The product title for the product */
  productTitle: PropTypes.string.isRequired,
  /* The solution title for the product */
  solutionTitle: PropTypes.string,
};

export default SystemHeader;
