import React from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import AppsIcon from '@material-ui/icons/Apps';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from 'material-ui/IconButton';
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle';
import NotificationsNoneIcon from 'material-ui/svg-icons/social/notifications-none';
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
      division={text('Division', 'senior')}
      productTitle={text('Product Title', 'senior > agent')}
      solutionTitle={text('Solution Title', 'SC +')}
    />
  );
};

export const systemHeaderWithOneButton = () => {
  return (
    <SystemHeader
      division={text('Division', 'senior')}
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
      division={text('Division', 'senior')}
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
      division={text('Division', 'senior')}
      productTitle={text('Product Title', 'senior > agent')}
      solutionTitle={text('Solution Title', 'SC +')}
      headerComponents={
        <>
          <IconButton className="systemHeader__notificationsIcon">
            <NotificationsNoneIcon />
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
      division={text('Division', 'senior')}
      productTitle={text('Product Title', 'senior > agent')}
      solutionTitle={text('Solution Title', 'SC +')}
      headerComponents={
        <>
          <IconButton className="systemHeader__notificationsIcon">
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton className="systemHeader__chatIcon">
            <ForumIcon />
          </IconButton>
          <IconButton className="systemHeader__appsIcon">
            <AppsIcon />
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
