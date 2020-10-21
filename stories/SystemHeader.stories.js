import React from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import AppsIcon from '@material-ui/icons/Apps';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import markdown from '../notes/SystemHeader.md';

import {SystemHeader} from '../src';
import './SystemHeader.stories.css';

export default {
  title: 'SystemHeader',
  decorators: [withKnobs({escapeHTML: false}), withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const systemHeader = () => {
  return (
    <SystemHeader
      backgroundColor={text('Background Color', 'var(--color-seniorOrange)')}
      productTitle={text('Product Title', 'senior > agent')}
      solutionTitle={text('Solution Title', 'SC +')}
    />
  );
};

export const systemHeaderWithOneButton = () => {
  return (
    <SystemHeader
      backgroundColor={text('Background Color', 'var(--color-seniorOrange)')}
      productTitle={text('Product Title', 'senior > agent')}
      solutionTitle={text('Solution Title', 'SC +')}
      headerComponents={
        <IconButton className="systemHeader__chatIcon">
          <ForumIcon />
        </IconButton>
      }
    />
  );
};

export const systemHeaderWithTwoButtons = () => {
  return (
    <SystemHeader
      backgroundColor={text('Background Color', 'var(--color-seniorOrange)')}
      productTitle={text('Product Title', 'senior > agent')}
      solutionTitle={text('Solution Title', 'SC +')}
      headerComponents={
        <>
          <IconButton className="systemHeader__chatIcon">
            <ForumIcon />
          </IconButton>
          <div className="systemHeader__accountIconButton">
            <IconButton className="systemHeader__accountIcon">
              <AccountCircleIcon />
            </IconButton>
          </div>
        </>
      }
    />
  );
};

export const systemHeaderWithThreeButtons = () => {
  return (
    <SystemHeader
      backgroundColor={text('Background Color', 'var(--color-seniorOrange)')}
      productTitle={text('Product Title', 'senior > agent')}
      solutionTitle={text('Solution Title', 'SC +')}
      headerComponents={
        <>
          <IconButton className="systemHeader__notificationsIcon">
            <NotificationsIcon />
          </IconButton>
          <IconButton className="systemHeader__chatIcon">
            <ForumIcon />
          </IconButton>
          <div className="systemHeader__accountIconButton">
            <IconButton className="systemHeader__accountIcon">
              <AccountCircleIcon />
            </IconButton>
          </div>
        </>
      }
    />
  );
};

export const systemHeaderWithFourButtons = () => {
  return (
    <SystemHeader
      backgroundColor={text('Background Color', 'var(--color-seniorOrange)')}
      productTitle={text('Product Title', 'senior > agent')}
      solutionTitle={text('Solution Title', 'SC +')}
      headerComponents={
        <>
          <IconButton className="systemHeader__notificationsIcon">
            <NotificationsIcon />
          </IconButton>
          <IconButton className="systemHeader__chatIcon">
            <ForumIcon />
          </IconButton>
          <IconButton className="systemHeader__appsIcon">
            <AppsIcon />
          </IconButton>
          <IconButton className="systemHeader__accountIcon">
            <AccountCircleIcon />
          </IconButton>
        </>
      }
    />
  );
};
