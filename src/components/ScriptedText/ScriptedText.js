import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import SpeakerNotes from '@material-ui/icons/SpeakerNotes';
import {Typography, Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    icon: {
      color: 'var(--color-brightYellow)',
      position: 'relative',
      height: '1.7rem',
      width: '1.7rem',
    },
    text: {
      marginLeft: '1rem',
    },
  };
});

function ScriptedText({placement = 'top-start', text, variant = 'body2'}) {
  const classes = useStyles();
  const Text = React.forwardRef((props, ref) => {
    return (
      <Typography ref={ref} {...props} component="span" variant={variant}>
        {props.text}
      </Typography>
    );
  });

  const SpeakerNotesIcon = React.forwardRef((props, ref) => {
    return <SpeakerNotes {...props} ref={ref} />;
  });

  return (
    <Grid container wrap="nowrap" alignItems="flex-start">
      <Tooltip
        placement={placement}
        arrow
        title={'Please read this scripted text to customer.'}
      >
        <SpeakerNotesIcon className={classes.icon} />
      </Tooltip>
      <Text text={text} className={classes.text} />
    </Grid>
  );
}

ScriptedText.propTypes = {
  placement: PropTypes.string,
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit',
  ]),
};

export default ScriptedText;
