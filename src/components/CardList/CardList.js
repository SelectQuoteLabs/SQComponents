import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RefreshIcon from '@material-ui/icons/Refresh';
import {makeStyles} from '@material-ui/core/styles';

import List from './List';
import CardPopoverMenu from '../CardPopoverMenu';
import LoadingIcon from '../LoadingIcon';

const useStyles = makeStyles(() => ({
  content: {
    margin: 0,
  },
  footer: {
    justifyContent: 'flex-end',
  },
}));

const useButtonStyles = makeStyles(theme => ({
  base: {
    padding: 0,
  },
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
  cardStyle,
  cardContentClass,
  contentHeight,
  contentWidth,
  contentStyle,
  isExpandable = true,
  isInitiallyExpanded = true,
  shouldRenderHeader = true,
  tabs,
}) {
  const classes = useStyles();
  const buttonClasses = useButtonStyles();

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

  const expandClick = () => {
    setExpanded(!isExpanded);
  };

  const handleTabChange = selectedValue => {
    setSelectedTab({
      type: 'CHANGE_TAB',
      tab: tabs.find(tab => tab.value === selectedValue),
    });
  };

  return (
    <Card style={cardStyle}>
      {shouldRenderHeader && (
        <CardHeader
          action={
            <>
              <CardPopoverMenu
                tabs={tabs}
                selectedTab={selectedTab}
                selectTab={handleTabChange}
                disabled={false}
              />
              {isExpandable && (
                <IconButton
                  className={classnames(buttonClasses.base, {
                    [buttonClasses.expandOpen]: isExpanded,
                    [buttonClasses.expand]: !isExpanded,
                  })}
                  onClick={expandClick}
                  aria-expanded={isExpanded}
                  aria-label="open"
                >
                  <ExpandMoreIcon />
                </IconButton>
              )}
            </>
          }
        />
      )}
      {isExpanded && (
        <CardContent
          className={classnames(classes.content, {
            [cardContentClass]: Boolean(cardContentClass),
          })}
          style={{
            minHeight: contentHeight,
            maxHeight: contentHeight,
            width: contentWidth,
            ...contentStyle,
          }}
        >
          {selectedTab.isLoading ? (
            <LoadingIcon />
          ) : (
            <List
              listItems={selectedTab.listItems}
              noDataMessage={selectedTab.noDataMessage}
              zeroItemsMessage={
                selectedTab.zeroItemsMessage || 'No Items To Display'
              }
              isSelectable={selectedTab.isSelectable}
            />
          )}
        </CardContent>
      )}
      {isExpanded && selectedTab.handleRefresh && (
        <CardActions className={classes.footer}>
          <IconButton
            title="Refresh List"
            color="primary"
            onClick={selectedTab.handleRefresh}
            className={buttonClasses.base}
          >
            <RefreshIcon fontSize="large" />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
}

CardList.propTypes = {
  /** OPTIONAL - boolean to override default behavior of intially expanded = true */
  isInitiallyExpanded: PropTypes.bool,
  /** OPTIONAL - class to be applied to the Card content */
  cardContentClass: PropTypes.object,
  /** OPTIONAL - styles to be applied to the outer Card element */
  cardStyle: PropTypes.object,
  /** OPTIONAL - height of the card.  Default is 30rem. Ex. contentHeight: '55rem' */
  contentWidth: PropTypes.string,
  /** OPTIONAL - height of the card.  Default is 30rem. Ex. contentHeight: '55rem' */
  contentHeight: PropTypes.string,
  /** OPTIONAL - additional styles to be applied to the content Ex. contentStyle: {{backgroundColor: 'blue'}}*/
  contentStyle: PropTypes.object,
  /** Function to be triggered when an item is clicked on in the Card List */
  onListItemClick: PropTypes.func,
  /** OPTIONAL - Should the card list have the capability to minimize and maximize. default = true */
  isExpandable: PropTypes.bool,
  /** object containing the options to be used in the card. See notes for more info. */
  tabs: PropTypes.array,
  /** Whether or not to render the Header component */
  shouldRenderHeader: PropTypes.bool,
};

export default CardList;
