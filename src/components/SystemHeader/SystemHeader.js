import React from 'react';
import PropTypes from 'prop-types';
import {Toolbar, makeStyles} from '@material-ui/core';
import SystemHeaderTitle from './SystemHeaderTitle/SystemHeaderTitle';
import SQRings from '../SQRings/SQRings';
import './SystemHeader.css';

const useStyles = makeStyles({
  root: {
    background: ({backgroundColor}) => backgroundColor,
  },
});

function SystemHeader({
  backgroundColor,
  headerComponents,
  productTitle,
  solutionTitle = 'SC +',
}) {
  const {root} = useStyles({backgroundColor});

  return (
    <Toolbar className={`systemHeader ${root}`}>
      <SQRings className="systemHeader__ringsIcon" height="35" />
      <SystemHeaderTitle
        solutionTitle={solutionTitle}
        productTitle={productTitle}
      />
      {headerComponents && (
        <div className="systemHeader__buttonGroup">{headerComponents}</div>
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
