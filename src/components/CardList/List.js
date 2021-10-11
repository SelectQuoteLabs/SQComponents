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
const COLOR_OPTIONS = Object.keys(COLOR_EMOJI_MAP).map(color =>
  color.toLowerCase()
);

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

ColorIcon.propTypes = {
  color: PropTypes.oneOf(COLOR_OPTIONS),
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
  isSelectable = false,
  enableMultiselect = false,
  listItemClass,
}) {
  const classes = useListStyles();
  const [selectedIDs, setSelectedIDs] = React.useState([]);

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

  const handleListItemClick = (listItem, listItemID) => {
    let newSelectedIDs = [];
    if (isSelectable && listItemID !== undefined) {
      if (!enableMultiselect) {
        newSelectedIDs = [listItemID];
      } else {
        const isAlreadySelected = selectedIDs.includes(listItemID);

        if (isAlreadySelected) {
          newSelectedIDs = selectedIDs.filter(id => id !== listItemID);
        } else {
          newSelectedIDs = [...selectedIDs, listItemID];
        }
      }
    }

    const listItemOnClick = listItem.onClick || listItem.props.onClick;
    if (
      typeof listItemOnClick === 'function' &&
      !listItem.props?.disableCardListItemOnClickHandling
    ) {
      listItemOnClick(newSelectedIDs);
    }

    setSelectedIDs(newSelectedIDs);
  };

  return listItems.map((listItem, index) => {
    const listItemID = listItem.id || listItem.props?.id || index;

    return (
      <SelectChip
        header={listItem.props?.header || listItem.superHeader}
        onClick={() => handleListItemClick(listItem, listItemID)}
        className={classnames({
          [listItemClass]: Boolean(listItemClass),
        })}
        key={listItemID}
        optionIsSelected={isSelectable && selectedIDs.includes(listItemID)}
        tabIndex={index}
        staticWidth="auto"
      >
        {listItem.header || listItem.secondaryRows || listItem.color ? (
          <ListItem className={classes.items}>
            {listItem.color && <ColorIcon color={listItem.color} />}
            {listItem.header && <ListItemText primary={listItem.header} />}
            {listItem.secondaryRows &&
              listItem.secondaryRows.map((row, secondaryListItemIndex) => (
                <ListItemText
                  key={`${listItemID}_${secondaryListItemIndex}`}
                  secondary={row}
                />
              ))}
          </ListItem>
        ) : (
          listItem
        )}
      </SelectChip>
    );
  });
}

const LIST_ITEM_OBJECT = PropTypes.exact({
  /** OPTIONAL - id for list item, can being string or number.
   * Note: Strongly recommended to include if possible and must be unique.
   * Note: REQUIRED for selection functionality.
   */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** OPTIONAL - Header string */
  header: PropTypes.string,
  /** OPTIONAL - Super Header string */
  superHeader: PropTypes.string,
  /** OPTIONAL - Color to determine which icon to show */
  color: PropTypes.oneOf(COLOR_OPTIONS),
  /** OPTIONAL - Array of strings/nodes to show inside list item. Note: each element is a new row. */
  secondaryRows: PropTypes.arrayOf(
    PropTypes.oneOfType(PropTypes.string, PropTypes.node)
  ),
  /** OPTIONAL - Function to execute on list item click. Provides currently selected item(s) as parameter. */
  onClick: PropTypes.func,
  /** OPTIONAL - If true then any onClick function will be ignored.
   * Note: This should be used when listItems are React Elements
   * with an onClick prop that should not be called by the CardList.
   */
  disableCardListItemOnClickHandling: PropTypes.bool,
});

export const LIST_ITEM = PropTypes.oneOfType([
  /** Note: If the list item is a React element it's props will be
   * checked for the following three props: header, id, and onClick.
   */
  PropTypes.element,
  LIST_ITEM_OBJECT,
]);

List.propTypes = {
  /** OPTIONAL - The items in the list (selectedTab.listItems) */
  listItems: PropTypes.arrayOf(LIST_ITEM),
  /** OPTIONAL - Message to display when data has not or could not be retrieved */
  noDataMessage: PropTypes.string,
  /** OPTIONAL - Message to display when the data returned is an empty array */
  zeroItemsMessage: PropTypes.string,
  /** OPTIONAL - Should the item stay selected with a border. Default = false */
  isSelectable: PropTypes.bool,
  /** OPTIONAL - boolean to allow multiselection for listItems. Default = false */
  enableMultiselect: PropTypes.bool,
  /** OPTIONAL - class to be applied to each list item */
  listItemClass: PropTypes.string,
};

export default List;
