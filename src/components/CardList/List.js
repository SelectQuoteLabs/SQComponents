import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

import Tooltip from '@material-ui/core/Tooltip';
import SelectChip from '../SelectChip/SelectChip';

const COLORS = {
  GREEN: 'GREEN',
  ORANGE: 'ORANGE',
  PINK: 'PINK',
  PURPLE: 'PURPLE',
  RED: 'RED',
  YELLOW: 'YELLOW',
};

const getColorEmoji = color => {
  switch (color) {
    case COLORS.GREEN:
      return '🍐';
    case COLORS.ORANGE:
      return '🍊';
    case COLORS.PINK:
      return '🍉';
    case COLORS.PURPLE:
      return '🍇';
    case COLORS.RED:
      return '🍒';
    case COLORS.YELLOW:
      return '🍌';
    default:
      return color;
  }
};

const getColorIcons = (color, classes) => {
  const upperCaseColor = color.toUpperCase();
  const emoji = getColorEmoji(upperCaseColor);
  return (
    <ListItemIcon className={classes.icon}>
      <Tooltip arrow title={color} placement="top">
        <span role="img" aria-label={color}>
          {emoji}
        </span>
      </Tooltip>
    </ListItemIcon>
  );
};

const renderNoDataMessage = (message, noDataClass) => {
  return (
    <div className={noDataClass}>
      <Typography variant="body2">{message}</Typography>
    </div>
  );
};

function List({
  classes,
  listItems,
  noDataMessage,
  zeroItemsMessage,
  isSelectable,
}) {
  const [selectedID, setSelectedID] = React.useState(null);

  if (!listItems) {
    return renderNoDataMessage(
      noDataMessage || 'Data Currently Unavailable',
      classes.noData
    );
  }
  if (!listItems.length) {
    return renderNoDataMessage(
      zeroItemsMessage || 'List is currently empty',
      classes.noData
    );
  }

  const handleListItemClick = listItem => {
    if (typeof listItem.onClick === 'function') {
      listItem.onClick();
    }
    if (isSelectable && listItem.id) {
      setSelectedID(listItem.id);
    }
  };

  return listItems.map(listItem => (
    <SelectChip
      onClick={() => handleListItemClick(listItem)}
      className={classes.selectChip}
      key={listItem.id}
      optionIsSelected={isSelectable && listItem.id === selectedID}
    >
      <ListItem className={classes.items}>
        {listItem.color && getColorIcons(listItem.color, classes)}
        {listItem.header && <ListItemText primary={listItem.header} />}
        {listItem.secondaryRows &&
          listItem.secondaryRows.map((row, secondaryListItemIndex) => (
            <ListItemText
              key={`${listItem.id}_${secondaryListItemIndex}`}
              secondary={row}
            />
          ))}
      </ListItem>
      {!listItem.header && !listItem.secondaryRows && listItem}
    </SelectChip>
  ));
}

List.propTypes = {
  /** MUI Custom Styles object */
  classes: PropTypes.object.isRequired,
  /** The items in the list (selectedTab.listItems) */
  listItems: PropTypes.array,
  /** Message to display when data has not or could not be retrieved */
  noDataMessage: PropTypes.string,
  /** Message to display when the data returned is an empty array */
  zeroItemsMessage: PropTypes.string,
  /** Should the item stay selected with a border */
  isSelectable: PropTypes.bool,
};

export default List;
