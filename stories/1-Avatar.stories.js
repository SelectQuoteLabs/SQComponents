import React from 'react';
import FolderIcon from '@material-ui/icons/Folder';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/1-Avatar.md';

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
    isDisabled={boolean('isDisabled', false)}
    isFocused={boolean('isFocused', false)}
    isInverted={boolean('isInverted', false)}
    isContentCenter={boolean('isContentCenter', false)}
  >
    {'T'}
  </Avatar>
);

export const iconBadge = () => (
  <Avatar
    isDisabled={boolean('isDisabled', false)}
    isFocused={boolean('isFocused', false)}
    isInverted={boolean('isInverted', false)}
    isContentCenter={boolean('isContentCenter', false)}
  >
    <FolderIcon />
  </Avatar>
);
