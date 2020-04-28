import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import SpeakerNotes from '@material-ui/icons/SpeakerNotes';
import {Typography, Grid} from '@material-ui/core';
import './ScriptedText.css';

function ScriptedText({placement = 'top-start', text}) {
  const Text = React.forwardRef((props, ref) => {
    return (
      <Typography ref={ref} {...props} component="span">
        {props.text}
      </Typography>
    );
  });

  const SpeakerNotesIcon = React.forwardRef((props, ref) => {
    return <SpeakerNotes {...props} ref={ref} />;
  });

  return (
    <Grid container alignItems="center">
      <Tooltip
        placement={placement}
        title={'Please read this scripted text to customer.'}
      >
        <SpeakerNotesIcon className="scriptedText__icon" />
      </Tooltip>
      {text && <Text text={text} className="scriptedText__text" />}
    </Grid>
  );
}

ScriptedText.propTypes = {
  placement: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ScriptedText;
