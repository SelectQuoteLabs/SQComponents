import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import {makeStyles} from '@material-ui/core/styles';
import SelectChip from '../SelectChip/SelectChip';

const COLOR_EMOJI_MAP = {
  GREEN: '🍐',
  ORANGE: '🍊',
  PINK: '🍉',
  PURPLE: '🍇',
  RED: '🍒',
  YELLOW: '🍌',
};

const useColorIconStyles = makeStyles(() => ({
  icon: {
    float: 'right',
    display: 'block',
    textAlign: 'right',
    fontSize: '2.5rem',
    paddingLeft: '2rem',
    position: 'relative',
    top: '0',
  },
}));

const ColorIcon = ({color}) => {
  const classes = useColorIconStyles();
  const emoji = COLOR_EMOJI_MAP[color.toUpperCase()] || color;

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

const useNoDataMessageStyles = makeStyles(() => ({
  noData: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 'inherit',
  },
}));

const NoDataMessage = ({message}) => {
  const classes = useNoDataMessageStyles();
  return (
    <div className={classes.noData}>
      <Typography variant="body2">{message}</Typography>
    </div>
  );
};

const useListStyles = makeStyles(() => ({
  items: {
    display: 'block',
    padding: '0rem 0rem 0rem 0rem',
    overflow: 'auto',
    width: 'auto',
  },
}));

function List({
  listItems,
  noDataMessage,
  zeroItemsMessage,
  isSelectable,
  listItemClass,
}) {
  const classes = useListStyles();
  const [selectedID, setSelectedID] = React.useState(null);

  if (!listItems) {
    return (
      <NoDataMessage message={noDataMessage || 'Data Currently Unavailable'} />
    );
  }

  if (!listItems.length) {
    return (
      <NoDataMessage message={zeroItemsMessage || 'List is currently empty'} />
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

  return listItems.map((listItem, index) => (
    <SelectChip
      header={listItem.props?.header}
      onClick={() => handleListItemClick(listItem)}
      className={classnames({
        [listItemClass]: Boolean(listItemClass),
      })}
      key={listItem.id}
      optionIsSelected={isSelectable && listItem.id === selectedID}
      tabIndex={index}
      staticWidth="auto"
    >
      {listItem.header || listItem.secondaryRows || listItem.color ? (
        <ListItem className={classes.items} key={index}>
          {listItem.color && <ColorIcon color={listItem.color} />}
          {listItem.header && <ListItemText primary={listItem.header} />}
          {listItem.secondaryRows &&
            listItem.secondaryRows.map((row, secondaryListItemIndex) => (
              <ListItemText
                key={`${listItem.id}_${secondaryListItemIndex}`}
                secondary={row}
              />
            ))}
        </ListItem>
      ) : (
        <div key={index}>{listItem}</div>
      )}
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
  /** class to be applied to each list item */
  listItemClass: PropTypes.string,
};

export default List;
