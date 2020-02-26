import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import classnames from 'classnames';

import './SelectChip.css';

function SelectChip({
  children,
  staticWidth,
  onClick,
  optionIsSelected,
  tabIndex = 0,
}) {
  const widthStyle = React.useMemo(() => {
    return {width: staticWidth || '100%'};
  }, [staticWidth]);

  return (
    <Card
      tabIndex={tabIndex}
      onClick={onClick}
      className={classnames('selectChip', {
        'selectChip--isSelected': optionIsSelected,
      })}
      style={widthStyle}
    >
      {children}
    </Card>
  );
}

SelectChip.propTypes = {
  /** The content of the component */
  children: PropTypes.node.isRequired,
  /** Defines a static width of the component */
  staticWidth: PropTypes.string,
  /** Click handler callback function */
  onClick: PropTypes.func.isRequired,
  /** This component becomes selected when you click on it */
  optionIsSelected: PropTypes.bool,
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex */
  tabIndex: PropTypes.number,
};

export default SelectChip;
