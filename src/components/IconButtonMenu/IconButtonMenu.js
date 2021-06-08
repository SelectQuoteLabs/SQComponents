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
}) {
  const popoverClasses = usePopoverStyles();
  const tooltipStyles = useTooltipStyles();
  const menuItemStyles = useMenuItemStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [options, setOptions] = React.useState(menuItems);

  React.useEffect(() => {
    if (!excludeSelectedItem) {
      setOptions(menuItems);
      return;
    }

    if (!selectedItem) {
      return;
    }

    const filteredOptions = menuItems.filter(({id}) => id !== selectedItem.id);
    setOptions(filteredOptions);
  }, [selectedItem, menuItems, excludeSelectedItem]);

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
        classes={popoverClasses}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={PLACEMENTS[placement].ANCHOR}
        transformOrigin={PLACEMENTS[placement].TRANSFORM}
        onClose={handleClose}
      >
        {options && options.length
          ? options.map(option => {
              const onClick = () => {
                option.onClick();
                handleClose();
              };
              return (
                <MenuItem
                  key={option.id}
                  disabled={option.isDisabled}
                  onClick={onClick}
                  divider={false}
                  dense={false}
                  className={
                    option.isDisabled
                      ? menuItemStyles.disabled
                      : menuItemStyles.menuItem
                  }
                >
                  <Typography>{option.label}</Typography>
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
