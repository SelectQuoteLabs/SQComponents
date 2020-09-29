import {
  CircularProgress,
  Grid,
  Step,
  StepButton,
  Stepper,
  Dialog,
} from '@material-ui/core';
import {Form, Formik} from 'formik';
import React, {useState} from 'react';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import RoundedButton from '../RoundedButton';
import SQFormButton from '../SQForm/SQFormButton';
import IconButton from 'material-ui/IconButton';
import './SQDialogStepper.css';

export function SQFormStep({children}) {
  return <>{children}</>;
}

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="down" ref={ref} {...props} />;
});

export function SQDialogStepper({
  cancelButtonText = 'Cancel',
  children,
  disableBackdropClick = false,
  isOpen = false,
  maxWidth = 'sm',
  onClose,
  onSubmit,
  saveButtonText = 'Save',
  title,
  enableReinitialize = false,
  muiGridProps = {},
  setValues,
  fullWidth = true,
  ...props
}) {
  const childrenArray = React.Children.toArray(children);
  const [activeStep, setActiveStep] = React.useState(0);
  const currentChild = childrenArray[activeStep];
  const [completed, setCompleted] = useState(false);

  const totalSteps = React.useMemo(() => {
    return childrenArray.length;
  }, [childrenArray]);

  const completedSteps = React.useMemo(() => {
    return Object.keys(completed).length;
  }, [completed]);

  const isLastStep = React.useMemo(() => {
    return activeStep === totalSteps - 1;
  }, [activeStep, totalSteps]);

  const allStepsCompleted = React.useMemo(() => {
    console.log(completedSteps, totalSteps);
    return completedSteps === totalSteps;
  }, [completedSteps, totalSteps]);

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleNext = () => {
    // const newActiveStep =
    //   isLastStep && !allStepsCompleted
    //     ? // It's the last step, but not all steps have been completed,
    //     // find the first step that has been completed
    //     childrenArray.findIndex((step, i) => !(i in completed))
    //     : activeStep + 1;
    setActiveStep(activeStep + 1);
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleSubmit = async (values, helpers) => {
    if (isLastStep()) {
      await onSubmit(values, helpers);
      setCompleted(true);
    } else {
      setValues(values);
      handleComplete();
    }
  };

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={handleSubmit}
    >
      {({isSubmitting}) => (
        <Dialog
          disableBackdropClick={disableBackdropClick}
          maxWidth={maxWidth}
          open={isOpen}
          TransitionComponent={Transition}
          onClose={onClose}
          fullWidth={fullWidth}
        >
          <Form>
            <DialogTitle disableTypography={true}>
              <Typography variant="h4">{title}</Typography>
            </DialogTitle>
            <DialogContent dividers={true}>
              <Stepper nonLinear activeStep={activeStep}>
                {activeStep > 0 ? (
                  <IconButton
                    onClick={handleBack}
                    className="sqDialogStepper__arrow"
                  >
                    <ArrowLeft color="var(--color-cerulean)" />
                  </IconButton>
                ) : null}
                {childrenArray.map((child, index) => (
                  <Step key={child.props.label}>
                    <StepButton
                      onClick={handleStep(index)}
                      completed={completed[index]}
                    >
                      {child?.props.label}
                    </StepButton>
                  </Step>
                ))}
                <IconButton
                  containerStyle="cirlce"
                  type="submit"
                  className="sqDialogStepper__arrow"
                >
                  <ArrowRight color="var(--color-cerulean)" />
                </IconButton>
              </Stepper>
              <Grid
                {...muiGridProps}
                container
                spacing={muiGridProps.spacing || 3}
              >
                {currentChild}
              </Grid>
            </DialogContent>
            <DialogActions className="sqDialogStepper__actions">
              <RoundedButton
                title={cancelButtonText}
                onClick={onClose}
                color="secondary"
                variant="outlined"
              >
                {cancelButtonText}
              </RoundedButton>
              <SQFormButton
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={!isLastStep || !allStepsCompleted}
                title={cancelButtonText}
              >
                Submit
              </SQFormButton>
            </DialogActions>
          </Form>
        </Dialog>
      )}
    </Formik>
  );
}

SQDialogStepper.propTypes = {
  /** The secondary button text (Button located on left side of Dialog) */
  cancelButtonText: PropTypes.string,
  /** The content to be rendered in the dialog body */
  children: PropTypes.node.isRequired,
  /** If true, clicking the backdrop will not fire the onClose callback. */
  disableBackdropClick: PropTypes.bool,
  /** Sets the dialog to the maxWidth. */
  fullWidth: PropTypes.bool,
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
  /** Form Entity Object */
  initialValues: PropTypes.object.isRequired,
  /** Any prop from https://material-ui.com/api/grid */
  muiGridProps: PropTypes.object,
  /**
   * Yup validation schema shape
   * https://jaredpalmer.com/formik/docs/guides/validation#validationschema
   * */
  validationSchema: PropTypes.object,
};
