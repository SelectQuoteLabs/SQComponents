import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import {makeStyles, Card, CardHeader, CardContent} from '@material-ui/core';
import CardPopoverMenu from '../CardPopoverMenu';
import {useAutoHeight} from '../../hooks/useAutoHeight';

const useStyles = makeStyles(() => ({
  card: {
    flexGrow: ({isExpanded, isAutoHeight}) =>
      isExpanded && !isAutoHeight ? '1' : '0',
    flexBasis: ({isExpanded, hasSubHeader}) => {
      if (isExpanded) {
        return 0;
      }

      // See theme.js -> MuiCardHeader.root for these heights
      return hasSubHeader ? '74px' : '48px';
    },
    transitionDuration: 'var(--transition-duration-shortest)',
    transitionTimingFunction: 'ease',
    transitionProperty: ({isExpanded}) =>
      !isExpanded ? 'flex-grow' : 'flex-grow, flex-basis',
  },
  cardContent: {
    maxHeight: ({isExpanded}) => (isExpanded ? '1920px' : 0),
    transitionDuration: 'var(--transition-duration-shortest)',
    transitionTimingFunction: 'ease',
    transitionProperty: ({isExpanded}) => (isExpanded ? 'max-height' : ''),
  },
  expandButtonContainer: {
    height: '100%',
    display: 'flex',
    borderLeft: '1px solid var(--color-lightGray)',
  },
  expandButton: {
    padding: '12px 6px',
    transition: 'transform var(--transition-duration-shortest)',
    transform: ({isExpanded}) => (!isExpanded ? 'rotate(180deg)' : ''),
  },
}));

function ExpandingCard({
  cardClassName,
  children,
  headerClassName,
  contentClassName,
  title,
  subheader,
  isInitiallyExpanded = false,
  raised = false,
  isAutoHeight = false,
  expandCard,
  isCardExpanded,
  tabs,
  cardStyles,
  bodyClassName,
}) {
  const [selectedTab, setSelectedTab] = React.useState(tabs?.[0]);
  const [localControlIsExpanded, setLocalControlIsExpanded] = React.useState(
    isInitiallyExpanded
  );
  const isConsumerExpandingCard = Boolean(
    isCardExpanded !== undefined && expandCard
  );
  const isExpanded = isConsumerExpandingCard
    ? isCardExpanded
    : localControlIsExpanded;

  const toggleExpansion = React.useCallback(() => {
    isConsumerExpandingCard
      ? expandCard(!isExpanded)
      : setLocalControlIsExpanded(!isExpanded);
  }, [isConsumerExpandingCard, expandCard, isExpanded]);

  const handleTabSelect = tabValue => {
    setSelectedTab(tabs.find(({value}) => value === tabValue));
  };

  const classes = useStyles({
    isExpanded,
    isAutoHeight,
    hasSubHeader: Boolean(subheader),
  });

  const {containerRef, autoHeight} = useAutoHeight();
  const height = isAutoHeight && autoHeight;

  return (
    <Card
      ref={containerRef}
      raised={raised}
      className={classnames(classes.card, {
        [cardClassName]: Boolean(cardClassName),
      })}
      style={{height, ...cardStyles}}
    >
      <CardHeader
        className={classnames(headerClassName, {
          'custom-subheader': Boolean(subheader),
        })}
        title={title}
        subheader={
          subheader && <Typography variant="subtitle2">{subheader}</Typography>
        }
        action={
          <>
            {tabs?.length && (
              <CardPopoverMenu
                tabs={tabs}
                selectedTab={selectedTab}
                selectTab={handleTabSelect}
              />
            )}
            <div className={classes.expandButtonContainer}>
              <IconButton
                onClick={toggleExpansion}
                className={classes.expandButton}
                disableRipple={true}
                aria-expanded={isExpanded}
                aria-label="open"
              >
                <ExpandMoreIcon />
              </IconButton>
            </div>
          </>
        }
      />
      <CardContent
        className={`${classes.cardContent} ${contentClassName} ${bodyClassName}`}
      >
        {children ?? selectedTab.body}
      </CardContent>
    </Card>
  );
}

ExpandingCard.propTypes = {
  /** CSS class from MUI makeStyles for the <CardConent /> */
  contentClassName: PropTypes.string,
  /** Body content */
  children: PropTypes.node,
  /** CSS class from MUI makeStyles for the <CardHeader /> */
  headerClassName: PropTypes.string,
  /** CSS class from MUI makeStyles for the <Card /> */
  cardClassName: PropTypes.string,
  /** Title text */
  title: PropTypes.string,
  /** Sub header */
  subheader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Determines whether the card is initially expanded or not */
  isInitiallyExpanded: PropTypes.bool,
  /** Whether the card should appear raised or not */
  raised: PropTypes.bool,
  /** Whether the car should determine it's own height based on calcuatling it's surrounding.
   * Note: When false flexGrow: 1 will be used
   * Note: Should be false when used inside of an <ExpandingCardList />
   */
  isAutoHeight: PropTypes.bool,
  /** Callback to control expansion state
   * Note: Requires isCardExpanded prop
   */
  expandCard: PropTypes.func,
  /** If provided determines the expansion state
   * Note: Requires expandCard prop
   */
  isCardExpanded: PropTypes.bool,
  /** An array of tab objects */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      body: PropTypes.node.isRequired,
      disabled: PropTypes.bool,
    })
  ),
  /**
   * Included to support backwards compatibility for TabbableCard
   * TODO: Remove this in next major version release
   */
  cardStyles: PropTypes.object,
  /**
   * Included to support backwards compatibility for ExpandingCardWithTabs
   * TODO: Remove this in next major version release
   */
  bodyClassName: PropTypes.string,
};

export default ExpandingCard;
