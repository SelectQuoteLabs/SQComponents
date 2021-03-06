import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Tooltip, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    textButton: {
      padding: '0rem',
      height: '2.5rem',
      lineHeight: '1rem',
      borderRadius: '2rem',
      boxShadow: 'none',
      border: 'none',
      '&:hover': {
        boxShadow: 'none',
        border: 'none',
      },
    },
  };
});

function TextButton({
  onClick,
  tooltip,
  isDisabled = false,
  children,
  color = 'primary',
  toolipPlacement = 'top',
}) {
  const classes = useStyles();
  return (
    <Tooltip placement={toolipPlacement} arrow title={tooltip}>
      <span>
        <Button
          onClick={onClick}
          className={classes.textButton}
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
  /** The placement of the tooltip on the button */
  toolipPlacement: PropTypes.string,
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
