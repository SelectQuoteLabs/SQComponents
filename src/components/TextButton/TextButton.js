import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './TextButton.css';
import {Tooltip} from '@material-ui/core';

/** Rounded Button - base button component */
function TextButton({
  onClick,
  tooltip,
  isDisabled = false,
  children,
  color = 'primary',
}) {
  return (
    <Tooltip arrow title={tooltip}>
      <span>
        <Button
          key={tooltip}
          onClick={onClick}
          className="textButton"
          disabled={isDisabled}
          type="button"
          color={color}
        >
          <Typography variant="overline">{children}</Typography>
        </Button>
      </span>
    </Tooltip>
  );
}

TextButton.propTypes = {
  /** The onClick action if button is clicked */
  onClick: PropTypes.func,
  /** The tooltip title of the button */
  tooltip: PropTypes.string.isRequired,
  /** Will override the text inside the button */
  children: PropTypes.node,
  /** If the button is disabled */
  isDisabled: PropTypes.bool,
  /** An <Icon> component that prepends button text */
};

export default TextButton;
