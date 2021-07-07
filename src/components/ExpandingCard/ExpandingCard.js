import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import {useAutoHeight} from '../../hooks/useAutoHeight';

const useStyles = makeStyles(theme => ({
  card: {
    flexGrow: ({isExpanded, isAutoHeight}) =>
      isExpanded && !isAutoHeight ? '1' : '0',
  },
  expandButtonContainer: {
    height: '100%',
    display: 'flex',
    borderLeft: '1px solid var(--color-lightGray)',
  },
  expandButton: {
    padding: '12px 6px',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    transform: ({isExpanded}) => (!isExpanded ? 'rotate(180deg)' : ''),
  },
}));

function ExpandingCard({
  cardClassName,
  children,
  contentClassName,
  actions,
  title,
  subheader,
  isInitiallyExpanded = false,
  raised = false,
  isAutoHeight = false,
}) {
  const [isExpanded, setIsExpanded] = React.useState(isInitiallyExpanded);

  const classes = useStyles({isExpanded, isAutoHeight});

  const {containerRef, autoHeight} = useAutoHeight();
  const height = isAutoHeight && autoHeight;

  return (
    <Card
      ref={containerRef}
      raised={raised}
      className={classnames(classes.card, {
        [cardClassName]: Boolean(cardClassName),
      })}
      style={{height}}
    >
      <CardHeader
        className={subheader && 'custom-subheader'}
        title={title}
        subheader={
          subheader && <Typography variant="subtitle2">{subheader}</Typography>
        }
        action={
          <>
            {actions}
            <div className={classes.expandButtonContainer}>
              <IconButton
                onClick={() => setIsExpanded(!isExpanded)}
                className={classes.expandButton}
                aria-expanded={isExpanded}
                aria-label="open"
              >
                <ExpandMoreIcon />
              </IconButton>
            </div>
          </>
        }
      />
      {isExpanded && (
        <CardContent className={contentClassName}>{children}</CardContent>
      )}
    </Card>
  );
}

ExpandingCard.propTypes = {
  /** CSS class from MUI makeStyles for the <CardConent /> */
  contentClassName: PropTypes.string,
  /** Body content */
  children: PropTypes.node.isRequired,
  /** CSS class from MUI makeStyles for the <Card /> */
  cardClassName: PropTypes.string,
  /** Actions */
  actions: PropTypes.array,
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
};

export default ExpandingCard;
