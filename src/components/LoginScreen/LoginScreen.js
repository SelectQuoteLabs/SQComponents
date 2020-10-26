import React from 'react';
import PropTypes from 'prop-types';
import {Paper, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import SQRings from '../SQRings';

function LoginScreen({title = 'Sign in', children, ringSize = 175, ...rest}) {
  const classes = useStyles(rest);
  return (
    <Grid className={classes.login} justify="space-around" alignItems="center">
      <Paper className={classes.paper}>
        <SQRings height={ringSize} />
        <Typography variant="h5" className={classes.loginText}>
          {title}
        </Typography>
        {children}
      </Paper>
    </Grid>
  );
}

const useStyles = makeStyles({
  login: {
    backgroundColor: props => props.backgroundColor,
    width: '100vw',
    height: '100vh',
    display: 'flex',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '400px',
    width: '300px',
    color: 'white',
    backgroundColor: props => props.paperColor || 'var(--color-light-gray)',
    textAlign: 'center',
    zIndex: 1,
    opacity: 0.85,
    boxShadow: '0px 1.5rem 2rem rgba(0,0,0,0.4)',
  },
  loginText: {
    color: 'var(--color-white)',
  },
});

LoginScreen.propTypes = {
  /** The title of the paper */
  title: PropTypes.string,
  /** Children to be rendered (ex, sign in button, email/pw fields) */
  children: PropTypes.node,
  /** Size of the SQ rings logo */
  ringSize: PropTypes.number,
  /** Background color of the entire page */
  backgroundColor: PropTypes.string,
  /** Background color of the paper */
  paperColor: PropTypes.string,
};

export default LoginScreen;
