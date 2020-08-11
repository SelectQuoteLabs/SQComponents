import React from 'react';
import {useSQFormContext} from '../../src';

export default function FormValidationMessage() {
  const {errors} = useSQFormContext();
  const invalidFieldsRemaining = Object.keys(errors).length ?? 0;
  console.log('errors', errors);
  return <div>{`${invalidFieldsRemaining} invalid fields left!`}</div>;
}
