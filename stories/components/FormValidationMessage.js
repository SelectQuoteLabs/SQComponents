import React from 'react';
import {useFormikContext} from 'formik';

export default function FormValidationMessage() {
  const {errors} = useFormikContext();
  const invalidFieldsRemaining = Object.keys(errors).length ?? 0;
  return <div>{`${invalidFieldsRemaining} invalid fields left!`}</div>;
}
