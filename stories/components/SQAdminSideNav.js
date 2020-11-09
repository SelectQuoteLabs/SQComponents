import React from 'react';
import {
  SideNav,
  SideNavTop,
  SideNavBottom,
  SideNavMiddle,
  IconButton,
  Avatar,
} from '../../src';
import SettingsIcon from '@material-ui/icons/Settings';
import BuildIcon from '@material-ui/icons/Build';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function SQAdminSideNav() {
  return (
    <SideNav>
      <SideNavTop>
        <IconButton
          isIconTeal={true}
          height="42px"
          width="42px"
          IconComponent={AddCircleIcon}
          onClick={() => {}}
        />
      </SideNavTop>
      <SideNavMiddle>
        <IconButton IconComponent={() => <Avatar>1</Avatar>} />
        <IconButton IconComponent={() => <Avatar isInverted>2</Avatar>} />
        <IconButton IconComponent={() => <Avatar isInverted>3</Avatar>} />
        <IconButton IconComponent={() => <Avatar isInverted>4</Avatar>} />
        <IconButton IconComponent={() => <Avatar isInverted>5</Avatar>} />
        <IconButton IconComponent={() => <Avatar isInverted>6</Avatar>} />
        <IconButton IconComponent={() => <Avatar isInverted>7</Avatar>} />
        <IconButton IconComponent={() => <Avatar isInverted>8</Avatar>} />
      </SideNavMiddle>
      <SideNavBottom>
        <IconButton
          height="42px"
          width="42px"
          IconComponent={() => (
            <Avatar isInverted>
              <SettingsIcon />
            </Avatar>
          )}
        />
        <IconButton
          height="42px"
          width="42px"
          IconComponent={() => (
            <Avatar isInverted>
              <BuildIcon />
            </Avatar>
          )}
        />
      </SideNavBottom>
    </SideNav>
  );
}
