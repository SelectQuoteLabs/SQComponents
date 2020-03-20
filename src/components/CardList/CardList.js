import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardPopoverMenu from '../CardPopoverMenu/CardPopoverMenu';
import SelectChip from '../SelectChip/SelectChip';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import './CardList.css';

const useStyles = makeStyles(theme => ({
  expand: {
    transform: 'rotate(0deg)',
    paddingTop: '0.5rem',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    paddingTop: '0.5rem',
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
      Greeen: (
        <span role="img" aria-label="Green">
          🍐
        </span>
      ),
      Orange: (
        <span role="img" aria-label="Orange">
          🍊
        </span>
      ),
      Pink: (
        <span role="img" aria-label="Pink">
          🍉
        </span>
      ),
      Purple: (
        <span role="img" aria-label="Purple">
          🍇
        </span>
      ),
      Red: (
        <span role="img" aria-label="Red">
          🍒
        </span>
      ),
      Yellow: (
        <span role="img" aria-label="Yellow">
          🍌
        </span>
      ),
    };
    return colorIcon[color] || color;
  };

  const [isExpanded, setExpanded] = React.useState(
    !isExpandable ? true : isInitiallyExpanded
  );
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);
  const expandClasses = useStyles();

  const expandClick = () => {
    setExpanded(!isExpanded);
  };

  const handleTabChange = selectedValue => {
    setSelectedTab(tabs.find(tab => tab.value === selectedValue));
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
                className={
                  (expandClasses.expand,
                  {[expandClasses.expandOpen]: isExpanded})
                } //eslint-disable-line
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
          {selectedTab.listItems.map(listItem => (
            <SelectChip
              onClick={handleListItemClick}
              className="cardListItem__selectChip"
            >
              <ListItem
                className="cardList__items"
                key={tabs.indexOf(selectedTab)}
              >
                {listItem.header && (
                  <ListItemText
                    disableTypography={true}
                    primary={listItem.header}
                  />
                )}
                {listItem.body && (
                  <ListItemText
                    className="cardList__secondaryItem"
                    disableTypography={true}
                    secondary={listItem.body}
                  />
                )}
                {listItem.footer && (
                  <ListItemText
                    className="cardList__secondaryItem"
                    disableTypography={true}
                    secondary={listItem.footer}
                  />
                )}
                {listItem.color && getColorIcons(listItem.color)}
                {!listItem.header &&
                  !listItem.body &&
                  !listItem.footer &&
                  listItem}
              </ListItem>
            </SelectChip>
          ))}
        </CardContent>
      </Collapse>
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
  tabs: PropTypes.object,
};

export default CardList;
