import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MUIIconButton from '@material-ui/core/IconButton';

import './IconButton.css';

function IconButton({
  title,
  onClick,
  IconComponent,
  isDisabled = false,
  type = 'button',
}) {
  return (
    <MUIIconButton
      disableRipple={true}
      disableFocusRipple={true}
      title={title}
      onClick={onClick}
      disabled={isDisabled}
      type={type}
    >
      <IconComponent
        className={`iconButton ${classnames({
          iconButton__enabled: !isDisabled,
          iconButton__disabled: isDisabled,
        })}`}
      />
    </MUIIconButton>
  );
}

IconButton.propTypes = {
  /** The title of the button */
  title: PropTypes.string.isRequired,
  /** The onClick action if not of type "submit" */
  onClick: PropTypes.func,
  /** If the button is disabled */
  isDisabled: PropTypes.bool,
  /** Type of button, defaults to 'button' */
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  /** The Material UI Icon to render inside the button */
  IconComponent: PropTypes.func.isRequired,
};

export default IconButton;
