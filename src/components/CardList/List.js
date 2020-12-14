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

const getColorIcons = color => {
  const upperCaseColor = color.toUpperCase();
  const emoji = getColorEmoji(upperCaseColor);
  return (
    <ListItemIcon className="cardList__icon">
      <Tooltip arrow title={color} placement="top">
        <span role="img" aria-label={color}>
          {emoji}
        </span>
      </Tooltip>
    </ListItemIcon>
  );
};

const renderNoDataMessage = message => {
  return (
    <div className="cardList__noData">
      <Typography variant="body2">{message}</Typography>
    </div>
  );
};

function List({listItems, noDataMessage, zeroItemsMessage, isSelectable}) {
  const [selectedID, setSelectedID] = React.useState(null);

  if (!listItems) {
    return renderNoDataMessage(noDataMessage || 'Data Currently Unavailable');
  }
  if (!listItems.length) {
    return renderNoDataMessage(zeroItemsMessage || 'List is currently empty');
  }

  const handleClick = listItem => {
    if (listItem.onClick) {
      listItem.onClick();
    }
    if (isSelectable && listItem.id) {
      return setSelectedID(listItem.id);
    }
    return;
  };

  return listItems.map(listItem => (
    <SelectChip
      onClick={() => handleClick(listItem)}
      className="cardListItem__selectChip"
      key={listItem.id}
      optionIsSelected={isSelectable && listItem.id === selectedID}
    >
      <ListItem className="cardList__items">
        {listItem.color && getColorIcons(listItem.color)}
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
