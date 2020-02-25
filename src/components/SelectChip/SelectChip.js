import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import classnames from 'classnames';

import './SelectChip.css';

function SelectChip({children, onClick, optionIsSelected, tabIndex}) {
  return (
    <Card
      tabIndex={tabIndex}
      onClick={onClick}
      className={classnames('selectChip', {
        'selectChip--isSelected': optionIsSelected,
      })}
    >
      {children}
    </Card>
  );
}

SelectChip.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  optionIsSelected: PropTypes.bool,
  tabIndex: PropTypes.number,
};

export default SelectChip;
