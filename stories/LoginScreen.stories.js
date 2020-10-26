import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Tooltip} from '@material-ui/core';

import {LoginScreen} from '../src';
import markdown from '../notes/LoginScreen.md';

export default {
  title: 'LoginScreen',
  parameters: {
    notes: {markdown},
  },
};

export const baseLoginScreen = () => <LoginScreen />;

export const SRTSLoginScreenExample = () => {
  const classes = useSRTSStyles();
  return (
    <LoginScreen
      paperColor="var(--color-srtsGreen)"
      backgroundColor="rgba(90, 126, 68, 0.44)"
      title="SRTS 2.0"
    >
      <Tooltip title="Sign in to SRTS">
        <Button className={classes.loginButton}>Sign In</Button>
      </Tooltip>
    </LoginScreen>
  );
};

const useSRTSStyles = makeStyles({
  loginButton: {
    color: props => props.paperColor,
    backgroundColor: 'white',
    borderRadius: '2rem',
    paddingRight: '4rem',
    paddingLeft: '4rem',
    fontSize: '14px',
    fontWeight: 'var(--font-weight-semibold)',
    '&:hover': {
      backgroundColor: 'var(--color-lightGray)',
    },
  },
});

export const LoginWithOverriddenStyles = () => {
  const classes = useOverrideStyles();
  return <LoginScreen classes={classes}>children</LoginScreen>;
};

const useOverrideStyles = makeStyles({
  loginText: {color: 'red'},
  paper: {backgroundColor: 'orange'},
});
