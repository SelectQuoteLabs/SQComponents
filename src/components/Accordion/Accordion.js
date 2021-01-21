import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import AccordionPanel from './AccordionPanel';

export const AccordionContext = React.createContext();

const useStyles = makeStyles({
  accordion: {
    gap: '8px',
    height: '100%',
  },
});

function Accordion({accordionPanels}) {
  const classes = useStyles();

  const [
    panelExpansionStatesByName,
    setPanelExpansionStatesByName,
  ] = React.useState(
    accordionPanels.reduce((acc, accordionPanel) => {
      acc[accordionPanel.name] = accordionPanel.isInitiallyExpanded ?? false;
      return acc;
    }, {})
  );

  const setIsPanelExpanded = React.useCallback(
    (name, isExpanded) => {
      setPanelExpansionStatesByName({
        ...panelExpansionStatesByName,
        [name]: isExpanded,
      });
    },
    [panelExpansionStatesByName, setPanelExpansionStatesByName]
  );

  const getIsPanelExpanded = React.useCallback(
    name => {
      return panelExpansionStatesByName[name];
    },
    [panelExpansionStatesByName]
  );

  const api = {
    getIsPanelExpanded,
    setIsPanelExpanded,
  };

  return (
    <AccordionContext.Provider value={api}>
      <Grid container direction="column" className={classes.accordion}>
        {accordionPanels.map(accordionPanel => (
          <AccordionPanel key={accordionPanel.name} {...accordionPanel} />
        ))}
      </Grid>
    </AccordionContext.Provider>
  );
}

Accordion.propTypes = {
  /** AccordionPanel configuration Object(s) */
  accordionPanels: PropTypes.arrayOf(
    PropTypes.shape({
      /** Body content */
      body: PropTypes.node.isRequired,
      /** Unique name used as a key for managing expansion state within Accordion */
      name: PropTypes.string.isRequired,
      /** Title text */
      title: PropTypes.string.isRequired,
      /** Subtitle text - Each Subtitle is separated by a pipe "|" */
      subtitles: PropTypes.arrayOf(PropTypes.string),
      /** Panel is disabled, the user cannot toggle the panel while disabled */
      isDisabled: PropTypes.bool,
      /** Is initially expanded */
      isInitiallyExpanded: PropTypes.bool,
      /** expandPanel callback synchronizes consumer state with Accordion state.
       * Requires isPanelExpanded prop. */
      expandPanel: PropTypes.func,
      /** Optional prop for the consumer to define the cards open/close state.
       * Requires expandPanel prop. */
      isPanelExpanded: PropTypes.bool,
      /** Optional click handler if you want to perform a side effect on click */
      onClick: PropTypes.func,
    })
  ).isRequired,
};

export default Accordion;
