import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import markdown from '../notes/IconButtonMenu.md';

import {IconButtonMenu, Avatar} from '../src';

export default {
  title: 'IconButtonMenu',
  decorators: [withKnobs, withInfo],
  parameters: {
    notes: {markdown},
  },
};

const openUrlInNewTab = url => {
  window.open(url, '_blank', 'noreferrer');
};

const isDisabled = false; // this would normally be from parent props or local state

const LetterAvatar = () => (
  <Avatar isInverted isDisabled={isDisabled}>
    L
  </Avatar>
);

const SettingsAvatar = () => (
  <Avatar isDisabled={isDisabled}>
    <SettingsIcon />
  </Avatar>
);

const menuItems = [
  {
    id: 1,
    label: 'SC-Life 2.0',
    isDisabled: false,
    onClick: () => console.log('clicked SC-Life 2.0'),
  },
  {
    id: 2,
    label: 'Final Expense',
    isDisabled: true,
    onClick: () => console.log('clicked Final Expense'),
  },
  {
    id: 3,
    label: 'Quote Tool',
    isDisabled: true,
    onClick: () => console.log('clicked Quote Tool'),
  },
  {
    id: 4,
    label: 'Search',
    isDisabled: false,
    onClick: () => openUrlInNewTab('http://localhost:6006'),
  },
];

export const withLetterAvatar = () => (
  <IconButtonMenu
    IconComponent={LetterAvatar}
    tooltipTitle="Life Quote Tools"
    menuItems={menuItems}
    placement="top"
    isDisabled={isDisabled}
  />
);

export const withIconAvatar = () => (
  <IconButtonMenu
    IconComponent={SettingsAvatar}
    tooltipTitle="Settings"
    menuItems={menuItems}
    placement="right"
    isDisabled={isDisabled}
  />
);

export const withIcon = () => (
  <IconButtonMenu
    IconComponent={AppsIcon}
    isIconTeal={true}
    tooltipTitle="SQ Senior Apps"
    menuItems={menuItems}
    placement="bottomLeft"
    isDisabled={isDisabled}
  />
);
