import React from 'react';
import {action} from '@storybook/addon-actions';
import FolderIcon from '@material-ui/icons/Folder';

import BaseAvatar from '../src/BaseAvatar';

export default {
  title: 'BaseAvatar',
};

export const letterBadgeIsEnabled = () => (
  <BaseAvatar onClick={action('clicked')}>{'T'}</BaseAvatar>
);

export const letterBadgeIsDisabled = () => (
  <BaseAvatar isDisabled={true} onClick={action('clicked')}>
    {'T'}
  </BaseAvatar>
);

export const letterBadgeIsFocused = () => (
  <BaseAvatar isFocused={true} onClick={action('clicked')}>
    {'T'}
  </BaseAvatar>
);

export const letterBadgeIsInverted = () => (
  <BaseAvatar isInverted={true} onClick={action('clicked')}>
    {'T'}
  </BaseAvatar>
);

export const letterBadgeIsContentCentered = () => (
  <BaseAvatar isContentCenter={true} onClick={action('clicked')}>
    {'T'}
  </BaseAvatar>
);

export const iconBadgeIsEnabled = () => (
  <BaseAvatar onClick={action('clicked')}>
    <FolderIcon />
  </BaseAvatar>
);
