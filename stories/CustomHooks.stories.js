import React from 'react';
import useDialog from '../notes/useDialog.md';
import usePrevious from '../notes/usePrevious.md';

export default {
  title: 'Custom Hooks',
  parameters: {
    notes: {useDialog, usePrevious},
  },
};

export const docs = () => (
  <h1>Go to the Notes to view the docs for each hook</h1>
);

docs.story = {
  name: 'Custom Hooks Docs',
};
