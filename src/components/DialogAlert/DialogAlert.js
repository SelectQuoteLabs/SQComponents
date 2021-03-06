import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import {makeStyles} from '@material-ui/core';
import RoundedButton from '../RoundedButton';

const useStyles = makeStyles(() => {
  return {
    actions: {
      display: 'flex',
      justifyContent: 'space-between',
      flex: '1 1 100%',
      padding: '1.3333rem 2rem',
    },
    primary: {
      marginLeft: 'auto',
    },
    secondary: {
      marginRight: 'auto',
    },
  };
});

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="down" ref={ref} {...props} />;
});

function DialogAlert({
  secondaryButtonText,
  children,
  disableBackdropClick = false,
  isDisabled = false,
  isOpen,
  onSecondaryButtonClick,
  onPrimaryButtonClick,
  primaryButtonText,
  title,
}) {
  const classes = useStyles();
  const shouldRenderSecondaryButton = React.useMemo(
    () => secondaryButtonText && onSecondaryButtonClick,
    [onSecondaryButtonClick, secondaryButtonText]
  );
  const shouldRenderPrimaryButton = React.useMemo(
    () => primaryButtonText && onPrimaryButtonClick,
    [onPrimaryButtonClick, primaryButtonText]
  );

  return (
    <Dialog
      disableBackdropClick={disableBackdropClick}
      open={isOpen}
      TransitionComponent={Transition}
    >
      <DialogTitle disableTypography={true}>
        <Typography variant="h4">{title}</Typography>
      </DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
      <DialogActions className={classes.actions}>
        {shouldRenderSecondaryButton && (
          <span className={classes.secondary}>
            <RoundedButton
              onClick={onSecondaryButtonClick}
              color="secondary"
              variant="outlined"
              title={secondaryButtonText}
            >
              {secondaryButtonText}
            </RoundedButton>
          </span>
        )}
        {shouldRenderPrimaryButton && (
          <span className={classes.primary}>
            <RoundedButton
              isDisabled={isDisabled}
              onClick={onPrimaryButtonClick}
              color="primary"
              title={primaryButtonText}
            >
              {primaryButtonText}
            </RoundedButton>
          </span>
        )}
      </DialogActions>
    </Dialog>
  );
}

DialogAlert.propTypes = {
  /** The content to be rendered in the dialog body */
  children: PropTypes.node.isRequired,
  /** If true, clicking the backdrop will not fire the onClose callback. */
  disableBackdropClick: PropTypes.bool,
  /** The current disabled state of the Dialog Primary Button */
  isDisabled: PropTypes.bool,
  /** The current open/closed state of the Dialog */
  isOpen: PropTypes.bool.isRequired,
  /** The primary button text (Button located on right side of Dialog) */
  primaryButtonText: PropTypes.string,
  /** Callback function invoke when the user clicks the primary button */
  onPrimaryButtonClick: PropTypes.func,
  /** The secondary button text (Button located on left side of Dialog) */
  secondaryButtonText: PropTypes.string,
  /** Callback function invoked when the user clicks on the secondary button or outside the Dialog */
  onSecondaryButtonClick: PropTypes.func,
  /** Title text at the top of the Dialog */
  title: PropTypes.string.isRequired,
};

export default DialogAlert;
