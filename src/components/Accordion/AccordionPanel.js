import React from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Collapse, Grid, IconButton, Paper, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {AccordionContext} from './Accordion';

const useAccordionStyles = makeStyles(theme => ({
  accordion: {
    display: 'flex',
    flexGrow: ({isExpanded}) => (isExpanded ? 1 : 0),
    flexDirection: 'column',
    overflow: 'hidden',
    transition: theme.transitions.create('flex-grow', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  panelHeader: {
    padding: '0 0 0 12px',
    borderBottom: '1px solid var(--color-lightGray)',
    transition: theme.transitions.create('border-bottom-width', {
      duration: theme.transitions.duration.shortest,
    }),
    /* Expand border to full width at the start of the transition */
    transitionTimingFunction: 'step-start',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: ({isDisabled}) => {
      return isDisabled
        ? theme.palette.text.disabled
        : theme.palette.text.primary;
    },
    '&:hover': {
      cursor: ({isDisabled}) => (isDisabled ? 'default' : 'pointer'),
    },
  },
  panelHeaderTitle: {
    marginRight: '14px',
  },
  body: {
    position: 'relative',
    overflowY: 'auto',
    flexGrow: 1,
  },
}));

const useExpandButtonStyles = makeStyles(theme => ({
  container: {
    width: 'unset',
    borderLeft: '1px solid var(--color-lightGray)',
    height: '100%',
  },
  base: {
    color: ({isDisabled}) => {
      return isDisabled
        ? theme.palette.text.disabled
        : theme.palette.text.primary;
    },
    padding: '0 6px',
    transform: ({isExpanded}) => `rotate(${isExpanded ? '180' : '0'}deg)`,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
      cursor: ({isDisabled}) => (isDisabled ? 'default' : 'pointer'),
    },
  },
}));

function AccordionPanel({
  name,
  title,
  subtitles = [],
  body,
  isDisabled = false,
  isPanelExpanded = null,
  expandPanel = null,
  onClick,
}) {
  const {getIsPanelExpanded, setIsPanelExpanded} = React.useContext(
    AccordionContext
  );

  const isConsumerExpandingPanel = isPanelExpanded !== null && expandPanel;

  const isExpanded = isConsumerExpandingPanel
    ? isPanelExpanded
    : getIsPanelExpanded(name);

  const accordionClasses = useAccordionStyles({isDisabled, isExpanded});
  const expandedButtonClasses = useExpandButtonStyles({isDisabled, isExpanded});

  const toggleExpansion = event => {
    if (isDisabled) {
      event.preventDefault();
    } else {
      onClick && onClick();
      isConsumerExpandingPanel && expandPanel(!isExpanded);
      setIsPanelExpanded(name, !isExpanded);
    }
  };

  return (
    <Paper className={accordionClasses.accordion}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        wrap="nowrap"
        className={accordionClasses.panelHeader}
        onClick={toggleExpansion}
      >
        <Grid container alignItems="baseline" spacing={1} wrap="nowrap">
          <Grid item className={accordionClasses.panelHeaderTitle}>
            <Typography variant="overline">{title}</Typography>
          </Grid>
          {subtitles?.length
            ? subtitles.map((subtitle, index) => {
                return (
                  <>
                    <Grid item>
                      <Typography variant="body2" display="inline">
                        {subtitle}
                      </Typography>
                    </Grid>
                    {index + 1 === subtitles.length ? null : (
                      <Grid item>
                        <Typography variant="body2" display="inline">
                          |
                        </Typography>
                      </Grid>
                    )}
                  </>
                );
              })
            : null}
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          className={expandedButtonClasses.container}
        >
          <IconButton
            className={expandedButtonClasses.base}
            aria-expanded={isExpanded}
            aria-label="toggle-expansion"
            disableRipple={true}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Collapse in={isExpanded}>
        <div className={accordionClasses.body}>{body}</div>
      </Collapse>
    </Paper>
  );
}

AccordionPanel.propTypes = {
  /** Body content */
  body: PropTypes.node.isRequired,
  /** Unique name used as a key for managing expansion state within ExpandingCardList */
  name: PropTypes.string.isRequired,
  /** Title text */
  title: PropTypes.string,
  /** Subtitles header text - Each Subtitle is separated by a pipe "|" */
  subtitles: PropTypes.arrayOf(PropTypes.string),
  /** Panel is disabled, the user cannot toggle the panel while disabled */
  isDisabled: PropTypes.bool,
  /** Is initially expanded
   * isInitiallyExpanded is not used within this component but exists here to provde a good API.
   * See ExpandingCardList for how this property is used. */
  isInitiallyExpanded: PropTypes.bool,
  /** expandPanel callback synchronizes consumer state with ExpandingCardList state.
   * Requires isPanelExpanded prop. */
  expandPanel: PropTypes.func,
  /** Optional prop for the consumer to define the cards open/close state.
   * Requires expandPanel prop. */
  isPanelExpanded: PropTypes.bool,
  /** Optional click handler if you want to perform a side effect on click */
  onClick: PropTypes.func,
};

export default AccordionPanel;
