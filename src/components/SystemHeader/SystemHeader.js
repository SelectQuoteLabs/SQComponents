import React from 'react';
import PropTypes from 'prop-types';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import SystemHeaderTitle from './SystemHeaderTitle/SystemHeaderTitle';
import classnames from 'classnames';
import SqRings from './SqRings';
import './SystemHeader.css';

function SystemHeader({
  division,
  headerComponents,
  productTitle,
  solutionTitle = 'SC +',
}) {
  return (
    <Toolbar
      className={`systemHeader ${classnames({
        systemHeader__life: division === 'life',
        systemHeader__senior: division === 'senior',
        systemHeader__sqah: division === 'sqah',
        systemHeader__recruit: division === 'recruit',
        systemHeader__srts: division === 'srts',
      })}`}
    >
      <ToolbarGroup>
        <SqRings className="systemHeader__ringsIcon" height="35" />
        <SystemHeaderTitle
          solutionTitle={solutionTitle}
          productTitle={productTitle}
        />
      </ToolbarGroup>
      {headerComponents && (
        <ToolbarGroup className="systemHeader__buttonGroup">
          {headerComponents}
        </ToolbarGroup>
      )}
    </Toolbar>
  );
}

SystemHeader.propTypes = {
  /* Determines background color */
  division: PropTypes.oneOf(['life', 'senior', 'sqah', 'recruit', 'srts'])
    .isRequired,
  /* Components to display on the right side of the header */
  headerComponents: PropTypes.node,
  /* The product title for the product */
  productTitle: PropTypes.string.isRequired,
  /* The solution title for the product */
  solutionTitle: PropTypes.string,
};

export default SystemHeader;
