# SQDialogStepper

SQ Dialog Stepper is a dialog form component that handles all validations and state for you. Under the covers it is using Formik for most of the heavy lifting and Yup to validate fields.

## Design Notes

--

## Technical Notes

The SQ Form system leverages Formik to control the state of a form. `SQDialogStep` must be used as a child component with `SQDialogStepper` in the folowing format. This example will create 2 steps with multiple components in each step.

```
<SQDialogStepper>
  <SQDialogStep>
    <TextField>
    <TextField>
    <TextField>
    <CheckBox>
  <SQDialogStep />
  <SQDialogStep>
    <RadioButton>
    <TextField>
  <SQDialogStep />
<SQDialogStepper />
```

Each SQDialogStep provides it's own validationSchema to be used in that step. This prevents users from proceeding to the next steps without first completing the current required fields.

The `setValues` callback allows you to get values from the current state to show/hide fields in the following steps.

## Props

```
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
  /** Optional static height on the content */
  contentHeight: PropTypes.string,
};
```

## Library Documentation

- [Formik](https://jaredpalmer.com/formik/docs/overview)
- [Formik Validation Schema](https://jaredpalmer.com/formik/docs/guides/validation#validationschema)
- [Yup](https://github.com/jquense/yup)
- [Form Layout /w MUI Grid](https://material-ui.com/components/grid/)
