import React from 'react';
import PropTypes from 'prop-types';
import {
  MenuItem,
  Popover,
  Typography,
  Tooltip,
  makeStyles,
} from '@material-ui/core';
import IconButton from '../IconButton';

const useTooltipStyles = makeStyles(() => ({
  tooltipArrow: {
    fontSize: '1rem',
    backgroundColor: 'var(--color-jetBlack)',
  },
  arrow: {
    color: 'var(--color-jetBlack)',
  },
}));

const useTooltipRefDivStyles = makeStyles(() => ({
  tooltipRefDiv: {
    textAlign: 'center',
  },
}));

const useMenuItemStyles = makeStyles(() => ({
  menuItem: {
    color: 'var(--color-teal)',
  },
  disabled: {
    color: 'var(--color-slate)',
  },
}));

const usePopoverStyles = makeStyles(() => {
  return {
    paper: {
      paddingTop: '6px !important' /* material-ui override */,
      paddingBottom: '6px !important' /* material-ui override */,
    },
  };
});

export default function IconButtonMenu({
  menuItems,
  isDisabled = false,
  isIconTeal = false,
  tooltipTitle,
  IconComponent,
  placement = 'bottom',
  selectedItem,
  excludeSelectedItem = false,
  applyPopoverSpacing = true,
  height,
  width,
}) {
  const popoverClasses = usePopoverStyles();
  const tooltipStyles = useTooltipStyles();
  const menuItemStyles = useMenuItemStyles();
  const tooltipRefStyles = useTooltipRefDivStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const transformOptions = () => {
    if (!excludeSelectedItem) {
      return menuItems;
    }

    if (!selectedItem) {
      return;
    }

    return menuItems.filter(({id}) => id !== selectedItem.id);
  };

  const options = transformOptions();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip
        title={tooltipTitle}
        arrow
        placement={PLACEMENTS[placement].TOOLTIP}
        classes={tooltipStyles}
      >
        <div className={tooltipRefStyles.tooltipRefDiv}>
          <IconButton
            onClick={handleClick}
            isDisabled={isDisabled}
            isIconTeal={isIconTeal}
            IconComponent={IconComponent}
            applyPopoverSpacing={applyPopoverSpacing}
            height={height}
            width={width}
          />
        </div>
      </Tooltip>
      <Popover
        classes={popoverClasses}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={PLACEMENTS[placement].ANCHOR}
        transformOrigin={PLACEMENTS[placement].TRANSFORM}
        onClose={handleClose}
      >
        {options?.length
          ? options.map(({id, isDisabled, onClick, label}) => {
              const handleClick = () => {
                onClick && onClick();
                handleClose();
              };

              return (
                <MenuItem
                  key={id}
                  disabled={isDisabled}
                  onClick={handleClick}
                  divider={false}
                  dense={false}
                  className={
                    isDisabled
                      ? menuItemStyles.disabled
                      : menuItemStyles.menuItem
                  }
                >
                  <Typography>{label}</Typography>
                </MenuItem>
              );
            })
          : null}{' '}
      </Popover>
    </>
  );
}

const menuItem = PropTypes.exact({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
});

IconButtonMenu.propTypes = {
  menuItems: PropTypes.arrayOf(menuItem).isRequired,
  placement: PropTypes.oneOf([
    'top',
    'topRight',
    'topLeft',
    'right',
    'left',
    'bottom',
    'bottomLeft',
    'bottomRight',
  ]).isRequired,
  isIconTeal: PropTypes.bool,
  isDisabled: PropTypes.bool,
  tooltipTitle: PropTypes.string.isRequired,
  IconComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  selectedItem: menuItem,
  excludeSelectedItem: PropTypes.bool,
  /** Whether to apply the popover spacing or not */
  applyPopoverSpacing: PropTypes.bool,
  /** Custom icon height size */
  height: PropTypes.string,
  /** Custom icon width size */
  width: PropTypes.string,
};

const PLACEMENTS = {
  top: {
    ANCHOR: {
      vertical: 'top',
      horizontal: 'center',
    },
    TRANSFORM: {
      vertical: 'bottom',
      horizontal: 'center',
    },
    TOOLTIP: 'top',
  },
  topRight: {
    ANCHOR: {
      vertical: 'top',
      horizontal: 'right',
    },
    TRANSFORM: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    TOOLTIP: 'top-end',
  },
  topLeft: {
    ANCHOR: {
      vertical: 'top',
      horizontal: 'left',
    },
    TRANSFORM: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    TOOLTIP: 'top-start',
  },
  right: {
    ANCHOR: {
      vertical: 'center',
      horizontal: 'right',
    },
    TRANSFORM: {
      vertical: 'center',
      horizontal: 'left',
    },
    TOOLTIP: 'right',
  },
  left: {
    ANCHOR: {
      vertical: 'center',
      horizontal: 'left',
    },
    TRANSFORM: {
      vertical: 'center',
      horizontal: 'right',
    },
    TOOLTIP: 'left',
  },
  bottom: {
    ANCHOR: {
      vertical: 'bottom',
      horizontal: 'center',
    },
    TRANSFORM: {
      vertical: 'top',
      horizontal: 'center',
    },
    TOOLTIP: 'bottom',
  },
  bottomRight: {
    ANCHOR: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    TRANSFORM: {
      vertical: 'top',
      horizontal: 'left',
    },
    TOOLTIP: 'bottom-end',
  },
  bottomLeft: {
    ANCHOR: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    TRANSFORM: {
      vertical: 'top',
      horizontal: 'right',
    },
    TOOLTIP: 'bottom-start',
  },
};
