import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog as MUIDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
  Slide,
} from '@material-ui/core';
import RoundedButton from '../RoundedButton';

const useStyles = makeStyles(theme => ({
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: '1 1 100%',
    padding: '16px 24px',
  },
  primaryButton: {
    marginLeft: 'auto',
  },
  secondaryButton: {
    marginRight: 'auto',
  },
}));

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="down" ref={ref} {...props} />;
});

function Dialog({
  secondaryButtonText,
  children,
  disableBackdropClick = false,
  isDisabled = false,
  isOpen,
  onSecondaryButtonClick,
  onPrimaryButtonClick,
  primaryButtonText,
  title,
  ...muiProps
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
    <MUIDialog
      disableBackdropClick={disableBackdropClick}
      open={isOpen}
      TransitionComponent={Transition}
      {...muiProps}
    >
      <DialogTitle disableTypography={true}>
        <Typography variant="h4">{title}</Typography>
      </DialogTitle>
      <DialogContent dividers={true}>{children}</DialogContent>
      <DialogActions className={classes.actions}>
        {shouldRenderSecondaryButton && (
          <span className={classes.secondaryButton}>
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
          <span className={classes.primaryButton}>
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
    </MUIDialog>
  );
}

Dialog.propTypes = {
  /** If DialogAlert or DialogForm don't meet your usecase, this Dialogs content is completely unopionated what you do with it */
  children: PropTypes.any.isRequired,
  /** If true, clicking the backdrop will not fire the onClose callback. */
  disableBackdropClick: PropTypes.bool,
  /** The current disabled state of the Dialog Primary Button */
  isDisabled: PropTypes.bool,
  /** The current open/closed state of the Dialog */
  isOpen: PropTypes.bool.isRequired,
  /** Any valid props for MUI Dialog can be passed here https://material-ui.com/api/dialog/#props */
  muiProps: PropTypes.object,
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

export default Dialog;
