import React from 'react';
import PropTypes from 'prop-types';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import {SQFormThemeProvider} from './SQFormContext';
import './SQForm.css';

function _isDomElement(element) {
  return element && typeof element.type === 'string';
}

function _isMuiSvgIcon(element) {
  return element && element.type.muiName === 'SvgIcon';
}

function isReactComponent(element) {
  if (_isDomElement(element) || _isMuiSvgIcon(element)) return false;
  return true;
}

function SQForm({
  children,
  initialValues,
  onSubmit,
  formItemCSSClass = null,
  validationSchema,
}) {
  const validationYupSchema = React.useMemo(() => {
    if (!validationSchema) return;

    return Yup.object().shape(validationSchema);
  }, [validationSchema]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationYupSchema}
      validateOnMount={true}
    >
      {props => {
        return (
          <SQFormThemeProvider formItemCSSClass={formItemCSSClass}>
            <Form className="sqForm">
              {React.Children.map(children, child => {
                if (!child) return null;
                if (!isReactComponent(child)) return child;
                return React.cloneElement(child, props);
              })}
            </Form>
          </SQFormThemeProvider>
        );
      }}
    </Formik>
  );
}

SQForm.propTypes = {
  /** Form Input(s) */
  children: PropTypes.node.isRequired,
  /** Optional CSS class */
  formItemCSSClass: PropTypes.string,
  /** Form Entity Object */
  initialValues: PropTypes.object.isRequired,
  /**Form Submission Handler | @typedef onSubmit: (values: Values, formikBag: FormikBag) => void | Promise<any> */
  onSubmit: PropTypes.func.isRequired,
  /** Yup validation schema shape */
  validationSchema: PropTypes.object,
};

export default SQForm;

/**
 * NOTES:
 * form submission handler. It is passed your forms values and the "FormikBag", which includes an object containing a subset of the injected props and methods (i.e. all the methods with names that start with set<Thing> + resetForm) and any props that were passed to the wrapped component.
 */
