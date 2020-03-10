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
import './CardList.css';

function CardList({
  onListItemClick,
  width,
  height,
  isExpandable = true,
  isInitiallyExpanded = true,
  tabOptions,
}) {
  const [expanded, setExpanded] = React.useState(isInitiallyExpanded);
  const [selectedTab, setselectedTab] = React.useState(tabOptions[0]);

  const expandClick = () => {
    setExpanded(!expanded);
  };

  const selectTab = selectedValue => {
    setselectedTab(tabOptions.find(tab => tab.value === selectedValue));
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
              tabs={tabOptions}
              selectedTab={selectedTab}
              selectTab={selectTab}
              disabled={false}
            />
            {isExpandable && (
              <IconButton
                onClick={expandClick}
                aria-expanded={expanded}
                aria-label="open"
              >
                <ExpandMoreIcon />
              </IconButton>
            )}
          </div>
        }
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="cardList__content" style={(height, width)}>
          {selectedTab.listItems.map(option => (
            <SelectChip
              onClick={handleListItemClick}
              className="cardListItem__selectChip"
            >
              <ListItem
                className="cardList__items"
                key={option.header ? option.header : option}
              >
                {option.header && (
                  <ListItemText
                    disableTypography={true}
                    primary={option.header}
                  />
                )}
                {option.body && (
                  <ListItemText
                    className="cardList__secondaryItem"
                    disableTypography={true}
                    secondary={option.body}
                  />
                )}
                {option.footer && (
                  <ListItemText
                    className="cardList__secondaryItem"
                    disableTypography={true}
                    secondary={option.footer}
                  />
                )}
                {!option.header && !option.body && !option.footer && option}
              </ListItem>
            </SelectChip>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}

CardList.propTypes = {
  /** boolean to override default behavior of intially expanded */
  isInitiallyExpanded: PropTypes.bool.isRequired,
  /** optional prop to expand the width of the card.  Default is auto to children elements */
  width: PropTypes.string,
  /** optional prop to expand the height of the card.  Default is auto to children elements */
  height: PropTypes.string,
  /** Function to be triggered when an item is clicked on in the Card List */
  onListItemClick: PropTypes.func,
  /** Should the card list have the capability to minimize and maximize */
  isExpandable: PropTypes.bool,
  /** object containing the options to be used in the card. See notes for more */
  tabOptions: PropTypes.object,
};

export default CardList;
