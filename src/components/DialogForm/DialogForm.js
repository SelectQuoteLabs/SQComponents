import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
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
  };
});

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="down" ref={ref} {...props} />;
});

function DialogForm({
  cancelButtonText = 'Cancel',
  children,
  disableBackdropClick = false,
  isDisabled = false,
  isOpen,
  maxWidth = 'sm',
  onClose,
  onSave,
  saveButtonText = 'Save',
  title,
}) {
  const classes = useStyles();
  return (
    <Dialog
      disableBackdropClick={disableBackdropClick}
      maxWidth={maxWidth}
      open={isOpen}
      TransitionComponent={Transition}
      onClose={onClose}
    >
      <DialogTitle disableTypography={true}>
        <Typography variant="h4">{title}</Typography>
      </DialogTitle>
      <DialogContent dividers={true}>{children}</DialogContent>
      <DialogActions className={classes.actions}>
        <RoundedButton
          title={cancelButtonText}
          onClick={onClose}
          color="secondary"
          variant="outlined"
        >
          {cancelButtonText}
        </RoundedButton>
        {onSave && (
          <RoundedButton
            isDisabled={isDisabled}
            onClick={onSave}
            color="primary"
            title={saveButtonText}
          >
            {saveButtonText}
          </RoundedButton>
        )}
      </DialogActions>
    </Dialog>
  );
}

DialogForm.propTypes = {
  /** The secondary button text (Button located on left side of Dialog) */
  cancelButtonText: PropTypes.string,
  /** The content to be rendered in the dialog body */
  children: PropTypes.node.isRequired,
  /** If true, clicking the backdrop will not fire the onClose callback. */
  disableBackdropClick: PropTypes.bool,
  /** The current disabled state of the Dialog Save Button */
  isDisabled: PropTypes.bool,
  /** The current open/closed state of the Dialog */
  isOpen: PropTypes.bool.isRequired,
  /** Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth. */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
  /** Callback function invoked when the user clicks on the secondary button or outside the Dialog */
  onClose: PropTypes.func.isRequired,
  /** Callback function invoke when the user clicks the primary button */
  onSave: PropTypes.func,
  /** The primary button text (Button located on right side of Dialog) */
  saveButtonText: PropTypes.string,
  /** Title text at the top of the Dialog */
  title: PropTypes.string.isRequired,
};

export default DialogForm;
