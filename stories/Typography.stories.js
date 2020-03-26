import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withInfo} from '@storybook/addon-info';

export default {
  title: 'Typography',
  decorators: [withInfo],
};

export const header1 = () => {
  return <Typography variant="h1">Header 1</Typography>;
};

export const header2 = () => {
  return <Typography variant="h2">Header 2</Typography>;
};

export const header3 = () => {
  return <Typography variant="h3">Header 3</Typography>;
};

export const header4 = () => {
  return <Typography variant="h4">Header 4</Typography>;
};

export const header5 = () => {
  return <Typography variant="h5">Header 5</Typography>;
};

export const header6 = () => {
  return <Typography variant="h6">Header 6</Typography>;
};

export const subtitle1 = () => {
  return <Typography variant="subtitle1">Subtitle 1</Typography>;
};

export const subtitle2 = () => {
  return <Typography variant="subtitle2">Subtitle 2</Typography>;
};

export const body1 = () => {
  return <Typography variant="body1">Body 1</Typography>;
};

export const body2 = () => {
  return <Typography variant="body2">Body 2</Typography>;
};

export const button = () => {
  return <Typography variant="button">Button</Typography>;
};

export const caption = () => {
  return <Typography variant="caption">Caption</Typography>;
};

export const overline = () => {
  return <Typography variant="overline">Overline</Typography>;
};
