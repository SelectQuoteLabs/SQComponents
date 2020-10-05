import React from 'react';
import {
  DialogActions,
  DialogContent,
  Grid,
  Step,
  StepButton,
  Stepper,
  Dialog,
  Typography,
} from '@material-ui/core';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import {Divider} from 'material-ui';
import {Form, Formik, useFormikContext} from 'formik';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import RoundedButton from '../RoundedButton';
import IconButton from '../IconButton';
import './SQDialogStepper.css';

export function SQDialogStep({children}) {
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
  contentStyle,
  ...props
}) {
  const steps = React.Children.toArray(children);
  const [activeStep, setActiveStep] = React.useState(0);
  const currentChild = steps[activeStep];
  const [completed, setCompleted] = React.useState({});

  const totalSteps = React.useMemo(() => {
    return steps.length;
  }, [steps]);

  const isLastStep = React.useMemo(() => {
    return activeStep === totalSteps - 1;
  }, [activeStep, totalSteps]);

  // Our last step doesn't get marked complete
  const allStepsCompleted = () =>
    Object.keys(completed).length === totalSteps - 1;

  const handleNext = () => {
    const newActiveStep =
      isLastStep && !allStepsCompleted
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    handleComplete();
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = step => () => {
    const nextStep = step.toString();
    const prevStep = (step - 1).toString();
    const completedKeys = Object.keys(completed);
    if ([nextStep, prevStep].some(step => completedKeys.includes(step))) {
      setActiveStep(step);
    }
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
  };

  const handleSubmit = async (values, helpers) => {
    if (isLastStep) {
      await onSubmit(values, helpers);
      setCompleted(true);
    } else {
      setValues(values);
      handleNext();
    }
  };

  function NextButton() {
    const {errors, values} = useFormikContext();

    const isButtonDisabled = React.useMemo(() => {
      const formValues = Object.values(values).filter(val => val);
      if (!formValues.length || isLastStep) return true;

      if (
        currentChild.props.validationSchema._nodes.some(step =>
          Object.keys(errors).includes(step)
        )
      ) {
        return true;
      }

      return false;
    }, [errors, values]);

    return (
      <IconButton
        title="Next Step"
        IconComponent={ArrowRight}
        isDisabled={isButtonDisabled}
        isIconTeal={true}
        type="submit"
      />
    );
  }

  function SubmitButton() {
    const {errors, values} = useFormikContext();

    const isButtonDisabled = React.useMemo(() => {
      const currentStepKeys = currentChild.props.validationSchema._nodes;
      const currentStepValues = Object.keys(values)
        .filter(key => currentStepKeys.includes(key))
        .reduce((obj, key) => {
          obj[key] = values[key];
          return obj;
        }, {});
      const formValues = Object.values(currentStepValues).filter(val => val);
      if (
        !formValues.length ||
        currentStepKeys.some(step => Object.keys(errors).includes(step))
      ) {
        return true;
      }

      if (allStepsCompleted() && isLastStep) {
        return false;
      }
      return true;
    }, [errors, values]);
    return (
      <RoundedButton
        type="submit"
        isDisabled={isButtonDisabled}
        title={cancelButtonText}
      >
        Submit
      </RoundedButton>
    );
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={handleSubmit}
    >
      {({isSubmitting, isValid}) => (
        <Dialog
          TransitionComponent={Transition}
          disableBackdropClick={disableBackdropClick}
          maxWidth={maxWidth}
          open={isOpen}
          onClose={onClose}
          fullWidth={fullWidth}
        >
          <Form>
            <DialogTitle disableTypography={true}>
              <Typography variant="h4">{title}</Typography>
            </DialogTitle>
            <DialogContent
              dividers={true}
              style={{...contentStyle, paddingTop: '.75rem'}}
            >
              <div class="SQDialogStepper__stepContainer">
                <IconButton
                  title="Previous Step"
                  IconComponent={ArrowLeft}
                  isDisabled={activeStep === 0}
                  isIconTeal={true}
                  onClick={handleBack}
                />
                <div class="SQDialogStepper__stepper">
                  <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((child, index) => (
                      <Step key={child.props.label}>
                        <StepButton
                          onClick={handleStep(index)}
                          completed={completed[index]}
                        >
                          {child?.props.label}
                        </StepButton>
                      </Step>
                    ))}
                  </Stepper>
                </div>
                <NextButton />
              </div>
              <Divider className="SQDialogStepper__divider" />
              <Grid
                {...muiGridProps}
                container
                spacing={muiGridProps.spacing || 3}
                justify="center"
              >
                {currentChild}
              </Grid>
            </DialogContent>
            <DialogActions className="SQDialogStepper__actions">
              <RoundedButton
                title={cancelButtonText}
                onClick={onClose}
                color="secondary"
                variant="outlined"
              >
                {cancelButtonText}
              </RoundedButton>
              <SubmitButton />
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
  /** Callback function that is called when a step is completed to pass back the current state values to the consumer */
  setValues: PropTypes.func,
  /** Any prop from https://material-ui.com/api/grid */
  muiGridProps: PropTypes.object,
  /** Optional styling on the dialog */
  contentStyle: PropTypes.string,
};
