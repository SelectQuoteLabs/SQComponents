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
import './IconButtonMenu.css';

const useTooltipStyles = makeStyles(() => ({
  tooltipArrow: {
    fontSize: '1rem',
    backgroundColor: 'var(--color-jetBlack)',
  },
  arrow: {
    color: 'var(--color-jetBlack)',
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

export default function IconButtonMenu({
  menuItems,
  isDisabled = false,
  isIconTeal = false,
  tooltipTitle,
  IconComponent,
  placement = 'bottom',
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const tooltipStyles = useTooltipStyles();
  const menuItemStyles = useMenuItemStyles();
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
        <div>
          <IconButton
            onClick={handleClick}
            isDisabled={isDisabled}
            isIconTeal={isIconTeal}
            IconComponent={IconComponent}
            applyPopoverSpacing={true}
          />
        </div>
      </Tooltip>
      <Popover
        classes={{paper: 'IconButtonMenu_popover'}}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={PLACEMENTS[placement].ANCHOR}
        transformOrigin={PLACEMENTS[placement].TRANSFORM}
        onClose={handleClose}
      >
        {menuItems && menuItems.length
          ? menuItems.map(item => {
              const onClick = () => {
                item.onClick();
                handleClose();
              };
              return (
                <MenuItem
                  key={item.id}
                  disabled={item.isDisabled}
                  onClick={onClick}
                  divider={false}
                  dense={false}
                  className={
                    item.isDisabled
                      ? menuItemStyles.disabled
                      : menuItemStyles.menuItem
                  }
                >
                  <Typography>{item.label}</Typography>
                </MenuItem>
              );
            })
          : null}{' '}
      </Popover>
    </>
  );
}

IconButtonMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      onClick: PropTypes.func,
      isDisabled: PropTypes.bool,
    })
  ).isRequired,
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
