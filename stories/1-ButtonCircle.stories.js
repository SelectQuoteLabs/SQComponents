import React from 'react';
import {action} from '@storybook/addon-actions';
import FolderIcon from '@material-ui/icons/Folder';

import Avatar from '../src/Avatar';

export default {
  title: 'Avatar',
};

export const letterBadgeIsEnabled = () => (
  <Avatar onClick={action('clicked')}>{'T'}</Avatar>
);

export const letterBadgeIsDisabled = () => (
  <Avatar isDisabled={true} onClick={action('clicked')}>
    {'T'}
  </Avatar>
);

export const letterBadgeIsFocused = () => (
  <Avatar isFocused={true} onClick={action('clicked')}>
    {'T'}
  </Avatar>
);

export const letterBadgeIsInverted = () => (
  <Avatar isInverted={true} onClick={action('clicked')}>
    {'T'}
  </Avatar>
);

export const letterBadgeIsContentCentered = () => (
  <Avatar isContentCenter={true} onClick={action('clicked')}>
    {'T'}
  </Avatar>
);

export const iconBadgeIsEnabled = () => (
  <Avatar onClick={action('clicked')}>
    <FolderIcon />
  </Avatar>
);
