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

export const scriptedTextMultipleSizes = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <ScriptedText
          text="This is an example of the 'h1' variant."
          variant="h1"
        />
      </Grid>
      <Grid item>
        <ScriptedText
          text="This is an example of the 'h2' variant."
          variant="h2"
        />
      </Grid>
      <Grid item>
        <ScriptedText
          text="This is an example of the 'h3' variant."
          variant="h3"
        />
      </Grid>
      <Grid item>
        <ScriptedText
          text="This is an example of the 'h4' variant."
          variant="h4"
        />
      </Grid>
      <Grid item>
        <ScriptedText
          text="This is an example of the 'h5' variant."
          variant="h5"
        />
      </Grid>
      <Grid item>
        <ScriptedText
          text="This is an example of the 'h6' variant."
          variant="h6"
        />
      </Grid>
      <Grid item>
        <ScriptedText
          text="This is an example of the 'subtitle1' variant."
          variant="subtitle1"
        />
      </Grid>
      <Grid item>
        <ScriptedText
          text="This is an example of the 'subtitle2' variant."
          variant="subtitle2"
        />
      </Grid>
      <Grid item>
        <ScriptedText
          text="This is an example of the 'body1' variant."
          variant="body1"
        />
      </Grid>
      <Grid item>
        <ScriptedText text="This is an example of the 'body2' variant (also default)." />
      </Grid>
      <Grid item>
        <ScriptedText
          text="This is an example of the 'caption' variant."
          variant="caption"
        />
      </Grid>
      <Grid item>
        <ScriptedText
          text="This is an example of the 'button' variant."
          variant="button"
        />
      </Grid>
      <Grid item>
        <ScriptedText
          text="This is an example of the 'overline' variant."
          variant="overline"
        />
      </Grid>
      <Grid item>
        <ScriptedText
          text="This is an example of the 'inherit' variant."
          variant="inherit"
        />
      </Grid>
    </Grid>
  );
};
