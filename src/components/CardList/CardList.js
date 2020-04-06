import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RefreshIcon from '@material-ui/icons/Refresh';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CardPopoverMenu from '../CardPopoverMenu';
import Tooltip from '../Tooltip';
import SelectChip from '../SelectChip/SelectChip';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LoadingIcon from '../LoadingIcon';
import {makeStyles} from '@material-ui/core/styles';
import './CardList.css';

const useStyles = makeStyles(theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function CardList({
  onListItemClick,
  width,
  height,
  isExpandable = true,
  isInitiallyExpanded = true,
  tabs,
}) {
  const getColorIcons = color => {
    const colorIcon = {
      Green: (
        <span role="img" aria-label={color}>
          🍐
        </span>
      ),
      Orange: (
        <span role="img" aria-label={color}>
          🍊
        </span>
      ),
      Pink: (
        <span role="img" aria-label={color}>
          🍉
        </span>
      ),
      Purple: (
        <span role="img" aria-label={color}>
          🍇
        </span>
      ),
      Red: (
        <span role="img" aria-label={color}>
          🍒
        </span>
      ),
      Yellow: (
        <span role="img" aria-label={color}>
          🍌
        </span>
      ),
    };
    return (
      <ListItemIcon className="cardList__icon">
        <Tooltip title={color} placement="top">
          {colorIcon[color] || color}
        </Tooltip>
      </ListItemIcon>
    );
  };

  const [isExpanded, setExpanded] = React.useState(
    !isExpandable ? true : isInitiallyExpanded
  );

  const initialSelectedTabState = {...tabs[0], index: tabs.indexOf(tabs[0])};
  const selectedTabReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_TAB':
      case 'SYNC_TAB':
        return {
          ...action.tab,
          index: tabs.findIndex(tab => tab.value === action.tab.value),
        };
      default:
        return state;
    }
  };

  const [selectedTab, setSelectedTab] = React.useReducer(
    selectedTabReducer,
    initialSelectedTabState
  );

  // Synchronize selectedTab with tabs
  React.useEffect(() => {
    setSelectedTab({type: 'SYNC_TAB', tab: tabs[selectedTab.index]});
  }, [selectedTab.index, tabs]);

  const expandClasses = useStyles();

  const expandClick = () => {
    setExpanded(!isExpanded);
  };

  const handleTabChange = selectedValue => {
    setSelectedTab({
      type: 'CHANGE_TAB',
      tab: tabs.find(tab => tab.value === selectedValue),
    });
  };

  const handleListItemClick = event => {
    onListItemClick(event.currentTarget);
  };

  return (
    <Card className="cardList" style={width}>
      <CardHeader
        className="cardList__header"
        action={
          <div className="cardList__headerItems">
            <CardPopoverMenu
              tabs={tabs}
              selectedTab={selectedTab}
              selectTab={handleTabChange}
              disabled={false}
            />
            {isExpandable && (
              <IconButton
                className={isExpanded ? expandClasses.expandOpen : expandClasses.expand}
                onClick={expandClick}
                aria-expanded={isExpanded}
                aria-label="open"
              >
                <ExpandMoreIcon />
              </IconButton>
            )}
          </div>
        }
      />
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent className="cardList__content" style={(height, width)}>
          {selectedTab.isLoading && <div className="cardList__loadingContainer"><LoadingIcon style={{marginLeft: '10rem'}} /></div>}
          {!selectedTab.isLoading && selectedTab.listItems.map((listItem, listItemIndex) => (
            <SelectChip
              onClick={handleListItemClick}
              className="cardListItem__selectChip"
              key={listItemIndex}
            >
              <ListItem
                className="cardList__items"
                key={tabs.indexOf(selectedTab)}
              >
                {listItem.color && getColorIcons(listItem.color)}
                {listItem.header && <ListItemText primary={listItem.header} />}
                {listItem.secondaryRows &&
                  listItem.secondaryRows.map((row, secondaryListItemIndex) => (
                    <ListItemText key={`${listItemIndex}_${secondaryListItemIndex}`} secondary={row} />
                  ))}
              </ListItem>
              {!listItem.header && !listItem.secondaryRows && listItem}
            </SelectChip>
          ))}
        </CardContent>
      </Collapse>
      {isExpanded && selectedTab.handleRefresh && <footer className="cardListItem__footer">
          <IconButton title="Refresh List"
                      color="primary"
                      onClick={selectedTab.handleRefresh}>
              <RefreshIcon fontSize="large" /></IconButton>
      </footer>}
    </Card>
  );
}

CardList.propTypes = {
  /** OPTIONAL - boolean to override default behavior of intially expanded = true */
  isInitiallyExpanded: PropTypes.bool.isRequired,
  /** OPTIONAL - width of the card.  Default is 25rem. Ex. height={{height: '55rem'}}*/
  width: PropTypes.object,
  /** OPTIONAL - height of the card.  Default is 30rem. Ex. width={{width: '55rem'}} */
  height: PropTypes.object,
  /** Function to be triggered when an item is clicked on in the Card List */
  onListItemClick: PropTypes.func,
  /** OPTIONAL - Should the card list have the capability to minimize and maximize. default = true */
  isExpandable: PropTypes.bool,
  /** object containing the options to be used in the card. See notes for more info. */
  tabs: PropTypes.array,
};

export default CardList;
