import React from 'react';
import markdown from '../notes/ScriptedText.md';
import {withInfo} from '@storybook/addon-info';

import {ScriptedText} from '../src';
import {Grid} from '@material-ui/core';

export default {
  title: 'Scripted Text',
  decorators: [withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const scriptedText = () => {
  return (
    <ScriptedText text="`text` is the prop you use to customize the copy the agent needs to say out loud to the customer." />
  );
};

export const scriptedTextWithLayoutWrapper = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <ScriptedText text="`text` is the prop you use to customize the copy the agent needs to say out loud to the customer." />
      </Grid>
      <Grid item>
        <ScriptedText text="`text` is the prop you use to customize the copy the agent needs to say out loud to the customer." />
      </Grid>
    </Grid>
  );
};
