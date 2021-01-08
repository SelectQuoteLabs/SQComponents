import React from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Collapse, Grid, IconButton, Paper, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {AccordionContext} from './Accordion';

const useAccordionStyles = makeStyles(theme => ({
  accordion: {
    display: 'flex',
    flexGrow: isExpanded => (isExpanded ? 1 : 0),
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
    '&:hover': {
      cursor: 'pointer',
    },
  },
  panelHeaderTitle: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
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
    padding: '0 6px',
    transform: isExpanded => `rotate(${isExpanded ? '180' : '0'}deg)`,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

function AccordionPanel({
  name,
  title,
  body,
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

  const accordionClasses = useAccordionStyles(isExpanded);
  const expandedButtonClasses = useExpandButtonStyles(isExpanded);

  const toggleExpansion = () => {
    onClick && onClick();
    isConsumerExpandingPanel && expandPanel(!isExpanded);
    setIsPanelExpanded(name, !isExpanded);
  };

  return (
    <Paper className={accordionClasses.accordion}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={accordionClasses.panelHeader}
        onClick={toggleExpansion}
      >
        <div className={accordionClasses.panelHeaderTitle}>
          <Typography variant="overline">{title}</Typography>
        </div>
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
