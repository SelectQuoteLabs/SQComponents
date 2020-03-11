import React from 'react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/DialogAlert.md';

import {DialogAlert} from '../src';

export default {
  title: 'DialogAlert',
  decorators: [withInfo, withKnobs],
  parameters: {
    notes: {markdown},
  },
};

export const dialogWithPrimaryAndSecondaryButtonsWithDisabled = () => (
  <>
    <h1>Click the Knobs tab below to toggle the open state of the Dialog</h1>
    <DialogAlert
      isOpen={boolean('isOpen', false, 'Open/Close Dialog')}
      isDisabled={boolean(
        'isDisabled',
        false,
        'Toggle disabled state of Primary Button'
      )}
      primaryButtonText="Submit"
      onPrimaryButtonClick={action('Primary button clicked')}
      onSecondaryButtonClick={action('Secondary button clicked')}
      secondaryButtonText="Cancel"
      title="Alert"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </DialogAlert>
  </>
);

export const dialogWithPrimaryAndSecondaryButtons = () => (
  <>
    <h1>Click the Knobs tab below to toggle the open state of the Dialog</h1>
    <DialogAlert
      isOpen={boolean('isOpen', false, 'Open/Close Dialog')}
      primaryButtonText="Take Ownership"
      onPrimaryButtonClick={action('Primary button clicked')}
      onSecondaryButtonClick={action('Secondary button clicked')}
      secondaryButtonText="Continue"
      title="Take Ownership of this Account"
    >
      This account is assigned to <b>[Agent Name]</b>, would you like to take
      ownership of this account?
    </DialogAlert>
  </>
);

export const dialogWithSecondaryButton = () => (
  <>
    <h1>Click the Knobs tab below to toggle the open state of the Dialog</h1>
    <DialogAlert
      isOpen={boolean('isOpen', false, 'Open/Close Dialog')}
      onSecondaryButtonClick={action('Secondary button clicked')}
      secondaryButtonText="Close"
      title="Alert"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </DialogAlert>
  </>
);

export const dialogWithPrimaryButton = () => (
  <>
    <h1>Click the Knobs tab below to toggle the open state of the Dialog</h1>
    <DialogAlert
      isOpen={boolean('isOpen', false, 'Open/Close Dialog')}
      onPrimaryButtonClick={action('Primary button clicked')}
      primaryButtonText="Ok"
      title="Alert"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </DialogAlert>
  </>
);
