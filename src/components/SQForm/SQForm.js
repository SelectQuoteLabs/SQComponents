import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

function SQForm({
  children,
  enableReinitialize = false,
  initialValues,
  muiGridProps = {},
  onSubmit,
  validationSchema,
}) {
  const validationYupSchema = React.useMemo(() => {
    if (!validationSchema) return;

    return Yup.object().shape(validationSchema);
  }, [validationSchema]);

  // HACK: This is a workaround for: https://github.com/mui-org/material-ui-pickers/issues/2112
  // Remove this reset handler when the issue is fixed.
  const handleReset = () => {
    document && document.activeElement.blur();
  };

  return (
    <Formik
      enableReinitialize={enableReinitialize}
      initialValues={initialValues}
      onSubmit={onSubmit}
      onReset={handleReset}
      validationSchema={validationYupSchema}
      validateOnMount={true}
    >
      {_props => {
        return (
          <Form>
            <Grid
              {...muiGridProps}
              container
              spacing={muiGridProps.spacing || 2}
            >
              {children}
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}

SQForm.propTypes = {
  /** Form Input(s) */
  children: PropTypes.node.isRequired,
  /** Form Entity Object */
  initialValues: PropTypes.object.isRequired,
  /** Any prop from https://material-ui.com/api/grid */
  muiGridProps: PropTypes.object,
  /**
   * Form Submission Handler | @typedef onSubmit: (values: Values, formikBag: FormikBag) => void | Promise<any>
   * IMPORTANT: If onSubmit is async, then Formik will automatically set isSubmitting to false on your behalf once it has resolved.
   * This means you do NOT need to call formikBag.setSubmitting(false) manually.
   * However, if your onSubmit function is synchronous, then you need to call setSubmitting(false) on your own.
   *
   * https://jaredpalmer.com/formik/docs/api/withFormik#handlesubmit-values-values-formikbag-formikbag--void--promiseany
   * */
  onSubmit: PropTypes.func.isRequired,
  /**
   * Yup validation schema shape
   * https://jaredpalmer.com/formik/docs/guides/validation#validationschema
   * */
  validationSchema: PropTypes.object,
};

export default SQForm;
