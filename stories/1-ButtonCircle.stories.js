import React from 'react';
import {action} from '@storybook/addon-actions';
import FolderIcon from '@material-ui/icons/Folder';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/1-ButtonCircle.md';

import Avatar from '../src/Avatar';

export default {
  title: 'Avatar',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const letterBadge = () => (
  <Avatar
    disabled={boolean('isDisabled', false)}
    isFocused={boolean('isFocused', false)}
    isInverted={boolean('isInverted', false)}
    isContentCenter={boolean('isContentCenter', false)}
    onClick={action('clicked')}
  >
    {'T'}
  </Avatar>
);

export const iconBadge = () => (
  <Avatar
    onClick={action('clicked')}
    disabled={boolean('isDisabled', false)}
    isFocused={boolean('isFocused', false)}
    isInverted={boolean('isInverted', false)}
    isContentCenter={boolean('isContentCenter', false)}
  >
    <FolderIcon />
  </Avatar>
);
