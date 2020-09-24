import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import {ExpandingCardListContext} from '../ExpandingCardList';

import './ExpandingCard.css';

const useStyles = makeStyles(theme => ({
  expandButtonBase: {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandButtonOpen: {
    transform: 'rotate(0deg)',
  },
  expandButtonClosed: {
    transform: 'rotate(180deg)',
  },
}));

function ExpandingCard({name, title, actions, subheader, children}) {
  const {
    isCollapseAllowed,
    getIsCardExpanded,
    setIsCardExpanded,
  } = React.useContext(ExpandingCardListContext);

  const isExpanded = getIsCardExpanded(name);

  const toggleExpansion = React.useCallback(() => {
    if (isExpanded && !isCollapseAllowed) {
      return;
    }

    setIsCardExpanded(name, !isExpanded);
  }, [isExpanded, name, setIsCardExpanded, isCollapseAllowed]);

  const classes = useStyles();
  const expandButtonStateClass = isExpanded
    ? classes.expandButtonOpen
    : classes.expandButtonClosed;

  return (
    <Paper
      className={classnames('expandingCard', {
        'expandingCard--collapsed': !isExpanded,
      })}
    >
      <div className="expandingCard__headerWrapper">
        <div className="expandingCard__header">
          <div className="expandingCard__headerTitle">
            <Typography variant="h6">{title}</Typography>
          </div>
          <div className="expandingCard__headerActions">
            {actions}
            <div className="expandingCard__expandButton">
              <IconButton
                onClick={toggleExpansion}
                className={`${classes.expandButtonBase} ${expandButtonStateClass}`}
                disabled={!isCollapseAllowed && isExpanded}
                aria-expanded={true}
                aria-label="open"
              >
                <ExpandMoreIcon />
              </IconButton>
            </div>
          </div>
        </div>
        {subheader && (
          <div className="expandingCard__subheader">
            <Typography variant="subtitle2">{subheader}</Typography>
          </div>
        )}
      </div>
      <div className="expandingCard__bodyWrapper">
        <div className="expandingCard__body">{children}</div>
      </div>
    </Paper>
  );
}

ExpandingCard.propTypes = {
  /** Body content */
  children: PropTypes.node.isRequired,

  /** Unique name used as a key for managing expansion state within ExpandingCardList */
  name: PropTypes.string.isRequired,

  /** Title text */
  title: PropTypes.string,

  /** Sub header */
  subheader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Is initially expanded */
  // isInitiallyExpanded is not used within this component but exists here to provde a good API.
  // See ExpandingCardList for how this property is used.
  isInitiallyExpanded: PropTypes.bool,
};

export default ExpandingCard;
