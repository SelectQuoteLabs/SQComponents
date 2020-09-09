import React from 'react';
import PropTypes from 'prop-types';
import MUITooltip from '@material-ui/core/Tooltip';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  tooltip: {
    fontSize: '1rem',
    backgroundColor: 'var(--color-jetBlack)',
  },
  arrow: {
    color: 'var(--color-jetBlack)',
  },
}));

function Tooltip({
  arrow = true,
  children,
  interactive = false,
  placement = 'bottom',
  title,
  ...props
}) {
  const classes = useStyles();
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);

  const Children = React.forwardRef((props, ref) => {
    return (
      <div {...props} ref={ref}>
        {children}
      </div>
    );
  });

  return (
    <MUITooltip
      arrow={arrow}
      classes={classes}
      interactive={interactive}
      placement={placement}
      title={title}
      open={isTooltipOpen}
    >
      <Children
        {...props}
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
        onClick={() => setIsTooltipOpen(false)}
      />
    </MUITooltip>
  );
}

Tooltip.propTypes = {
  /** MUI default is false but we're overriding this to true */
  arrow: PropTypes.bool,

  /** Must be an element able to hold a ref */
  children: PropTypes.node.isRequired,

  /** Controls whether you can hover over the tooltip itself
   * to interact with its content, e.g. a button.
   */
  interactive: PropTypes.bool,

  /** Defaults to 'bottom' */
  placement: PropTypes.string,

  /** Empty string blocks tooltip from rendering. Otherwise must be string or DOM element  */
  title: PropTypes.node,
};

export default Tooltip;
