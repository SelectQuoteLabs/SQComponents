import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import RoundedButton from '../RoundedButton';
import './DialogForm.css';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="down" ref={ref} {...props} />;
});

function DialogForm({
  cancelButtonText = 'Cancel',
  children,
  isOpen,
  onClose,
  onSave,
  saveButtonText = 'Save',
  title,
}) {
  return (
    <Dialog open={isOpen} TransitionComponent={Transition} onClose={onClose}>
      <DialogTitle disableTypography={true} className="dialogForm__title">
        {title}
      </DialogTitle>
      <DialogContent dividers={true}>{children}</DialogContent>
      <DialogActions className="dialogForm__actions">
        <RoundedButton onClick={onClose} color="secondary" variant="outlined">
          {cancelButtonText}
        </RoundedButton>
        <RoundedButton onClick={onSave} color="primary">
          {saveButtonText}
        </RoundedButton>
      </DialogActions>
    </Dialog>
  );
}

DialogForm.propTypes = {
  cancelButtonText: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saveButtonText: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default DialogForm;
