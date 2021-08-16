import React from 'react';
import {withInfo} from '@storybook/addon-info';
import {Paper, Grid} from '@material-ui/core';
import markdown from '../notes/GridSection.md';
import {GridSection} from '../src';

export default {
  title: 'GridSection',
  decorators: [withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const Default = () => (
  <Paper style={{padding: '12px'}}>
    <GridSection header="Grid Section">
      <Grid item>Hello</Grid>
      <Grid item>world!</Grid>
    </GridSection>
  </Paper>
);

export const WithCustomSpacing = () => (
  <Paper style={{padding: '12px'}}>
    <GridSection header="Grid Section" spacing={4}>
      <Grid item>Hello</Grid>
      <Grid item>world!</Grid>
      <Grid item>Hi</Grid>
      <Grid item>mom!</Grid>
    </GridSection>
  </Paper>
);

export const InAGrid = () => (
  <Paper style={{padding: '16px'}}>
    <Grid container spacing={2}>
      <GridSection item header="Section 1">
        <Grid item>Hello</Grid>
        <Grid item>world!</Grid>
      </GridSection>
      <GridSection item header="Section 2">
        <Grid item>Hi</Grid>
        <Grid item>mom!</Grid>
      </GridSection>
    </Grid>
  </Paper>
);
