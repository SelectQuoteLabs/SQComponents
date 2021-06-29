import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {ExpandingCardListContext} from '../ExpandingCardList';

const useCardStyles = makeStyles(() => {
  return {
    expandingCard: {
      display: 'flex',
      flexGrow: ({isExpanded}) => (isExpanded ? '1' : '0'),
      flexDirection: 'column',
      overflow: 'hidden',
      transition: 'flex-grow var(--transition-duration-shortest)',
    },
    headerWrapper: {
      borderBottom: ({isExpanded}) =>
        `${isExpanded ? '1px' : '0'} solid var(--color-lightGray)`,
      transition: 'border-bottom-width var(--transition-duration-shortest)',
      /* Expand border to full width at the start of the transition */
      transitionTimingFunction: ({isExpanded}) =>
        isExpanded ? 'step-start' : 'step-end',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '3.3rem',
      padding: '0rem 0rem 0rem 1rem',
    },
    headerTitle: {
      alignSelf: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    headerActions: {
      display: 'flex',
      justifyContent: 'flex-end',
      fontSize: '1rem',
    },
    subheader: {
      padding: '0.15rem 1rem',
      borderTop: '1px solid var(--color-lightGray)',
    },
    bodyWrapper: {
      position: 'relative' /* New stacking context for .expandingCard__body */,
      flexGrow: '1',
      height: ({isExpanded}) => (isExpanded ? 'auto' : '0'),
      transition: 'height var(--transition-duration-shortest)',
    },
    body: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      overflowY: 'auto',
      transition: 'height var(--transition-duration-shortest)',
    },
    expandButton: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderLeft: '1px solid var(--color-lightGray)',
    },
  };
});

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

function ExpandingCard({
  bodyClassName,
  className,
  name,
  title,
  actions,
  subheader,
  children,
  isCardExpanded = null,
  expandCard = null,
}) {
  const {
    isCollapseAllowed,
    getIsCardExpanded,
    setIsCardExpanded,
  } = React.useContext(ExpandingCardListContext);

  const isConsumerExpandingCard = isCardExpanded !== null && expandCard;

  const isExpanded = isConsumerExpandingCard
    ? isCardExpanded
    : getIsCardExpanded(name);

  const cardClasses = useCardStyles({isExpanded});

  const toggleExpansion = React.useCallback(() => {
    isConsumerExpandingCard && expandCard(!isExpanded);
    if (isExpanded && !isCollapseAllowed) {
      return;
    }

    setIsCardExpanded(name, !isExpanded);
  }, [
    isExpanded,
    name,
    setIsCardExpanded,
    isCollapseAllowed,
    expandCard,
    isConsumerExpandingCard,
  ]);

  const classes = useStyles();
  const expandButtonStateClass = isExpanded
    ? classes.expandButtonOpen
    : classes.expandButtonClosed;

  return (
    <Paper className={classnames(cardClasses.expandingCard, className)}>
      <div className={cardClasses.headerWrapper}>
        <div className={cardClasses.header}>
          <div className={cardClasses.headerTitle}>
            <Typography variant="h5">{title}</Typography>
          </div>
          <div className={cardClasses.headerActions}>
            {actions}
            <div className={cardClasses.expandButton}>
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
          <div className={cardClasses.subheader}>
            <Typography variant="subtitle2">{subheader}</Typography>
          </div>
        )}
      </div>
      <div className={cardClasses.bodyWrapper}>
        <div className={classnames(cardClasses.body, bodyClassName)}>
          {children}
        </div>
      </div>
    </Paper>
  );
}

ExpandingCard.propTypes = {
  /** CSS class from MUI makeStyles for the Card Body */
  bodyClassName: PropTypes.string,

  /** Body content */
  children: PropTypes.node.isRequired,

  /** CSS class from MUI makeStyles */
  className: PropTypes.string,

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

  /** expandCard callback synchronizes consumer state with ExpandingCardList state.
   * Requires isCardExpanded prop. */
  expandCard: PropTypes.func,

  /** Optional prop for the consumer to define the cards open/close state.
   * Requires expandCard prop. */
  isCardExpanded: PropTypes.bool,
};

export default ExpandingCard;
