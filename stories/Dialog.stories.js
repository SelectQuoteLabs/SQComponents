import React from 'react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';

import {Dialog} from '../src';

export default {
  title: 'Dialog',
  decorators: [withInfo, withKnobs],
};

export const dialogWithPrimaryAndSecondaryButtons = () => (
  <>
    <h1>Click the Knobs tab below to toggle the open state of the Dialog</h1>
    <Dialog
      isOpen={boolean('isOpen', false, 'Open/Close Dialog')}
      primaryButtonText="Submit"
      onPrimaryButtonClick={action('Primary button clicked')}
      onSecondaryButtonClick={action('Secondary button clicked')}
      secondaryButtonText="Cancel"
      title="Vanilla Dialog"
    >
      You can put anything you want here, CardList, text, anything. Any prop the
      MUI Dialog component accepts is a valid prop as well.
    </Dialog>
  </>
);

export const dialogWithoutPrimaryButton = () => (
  <>
    <h1>Click the Knobs tab below to toggle the open state of the Dialog</h1>
    <Dialog
      isOpen={boolean('isOpen', false, 'Open/Close Dialog')}
      onSecondaryButtonClick={action('Secondary button clicked')}
      secondaryButtonText="Close"
      title="Informational Dialog"
      maxWidth="md"
    >
      <div style={{height: 500}}>
        Here, we use a custom div to control the height of the content. We also
        configured the Dialog to only render the secondary button.
      </div>
    </Dialog>
  </>
);
