import React from 'react';
import * as Yup from 'yup';
import {
  SQForm,
  SQFormButton,
  SQFormResetButtonWithConfirmation,
  useGlobalLoadingDispatch,
} from '../../src';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import MoviesAutocomplete from './MoviesAutocomplete';

export default function MovieSearchCard() {
  const {setGlobalLoadingMessage} = useGlobalLoadingDispatch();
  const validationSchema = {
    movie: Yup.string().required('Required'),
  };

  const handleSubmit = async (values, actions) => {
    // this will only appear in the GlobalLoadingSpinner story, not Snackbar story
    setGlobalLoadingMessage('Saving movie selection');

    // NOTE -- to send a message with multiple lines of text, use `\n`
    // setGlobalLoadingMessage('This\nLoading Message\nis Multiple\nLines');

    await new Promise(resolve => setTimeout(resolve, 2000));

    setGlobalLoadingMessage('');
    window.alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Card raised style={{padding: 16}}>
      <SQForm
        initialValues={{movie: ''}}
        onSubmit={handleSubmit}
        muiGridProps={{spacing: 4}}
        validationSchema={validationSchema}
      >
        <MoviesAutocomplete name="movie" />
        <Grid item sm={12}>
          <Grid container justify="space-between">
            <SQFormResetButtonWithConfirmation
              variant="outlined"
              confirmationContent="You are about to reset this form. Any unsaved info for this customer will be removed"
            >
              RESET
            </SQFormResetButtonWithConfirmation>
            <SQFormButton>Submit</SQFormButton>
          </Grid>
        </Grid>
      </SQForm>
    </Card>
  );
}
