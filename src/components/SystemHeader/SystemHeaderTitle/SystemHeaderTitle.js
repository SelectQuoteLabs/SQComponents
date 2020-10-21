import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import './SystemHeaderTitle.css';

function SystemHeaderTitle({productTitle, solutionTitle}) {
  return (
    <div className="systemHeader__title">
      <Typography variant="h4" className="systemHeader__base">
        {solutionTitle}
      </Typography>
      <Typography variant="h4"> | </Typography>
      <Typography variant="h4" className="systemHeader__productTitle">
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
