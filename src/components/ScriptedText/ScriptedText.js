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

function ScriptedText({placement = 'top-start', text}) {
  const classes = useStyles();
  const Text = React.forwardRef((props, ref) => {
    return (
      <Typography ref={ref} {...props} component="span" variant="body2">
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
};

export default ScriptedText;
