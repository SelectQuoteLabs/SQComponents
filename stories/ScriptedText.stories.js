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

export const scriptedTextTimesTwo = () => {
  return (
    <Grid container direction="column" spacing={5}>
      <Grid item>
        <ScriptedText text="Important things to say to the customer." />
      </Grid>
      <Grid item>
        <ScriptedText text="Super, super important things." />
      </Grid>
    </Grid>
  );
};

export const scriptedTextIsLong = () => {
  return (
    <ScriptedText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu imperdiet libero. Maecenas vel lorem dapibus, laoreet ex vitae, sollicitudin libero. Etiam id lectus non ex sollicitudin aliquam. Ut scelerisque semper ligula, nec commodo felis tempus ac. Duis pellentesque est iaculis suscipit egestas. Morbi sed risus dapibus, dictum metus eu, faucibus tortor. In hac habitasse platea dictumst. Sed pulvinar venenatis nunc." />
  );
};
