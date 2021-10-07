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

import List, {LIST_ITEM} from './List';
import CardPopoverMenu from '../CardPopoverMenu';
import LoadingIcon from '../LoadingIcon';

const useStyles = makeStyles(() => ({
  content: {
    margin: 0,
  },
  loadingIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
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
  contentHeight = '360px',
  contentWidth = '300px',
  contentStyle,
  isExpandable = true,
  isInitiallyExpanded = true,
  shouldRenderHeader = true,
  tabs,
  listItemClass,
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
            minWidth: contentWidth,
            ...contentStyle,
          }}
        >
          {selectedTab.isLoading ? (
            <div className={classes.loadingIconContainer}>
              <LoadingIcon />
            </div>
          ) : (
            <List
              listItems={selectedTab.listItems}
              noDataMessage={selectedTab.noDataMessage}
              zeroItemsMessage={
                selectedTab.zeroItemsMessage || 'No Items To Display'
              }
              isSelectable={selectedTab.isSelectable}
              enableMultiselect={selectedTab.enableMultiselect}
              listItemClass={listItemClass}
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

const TAB = PropTypes.shape({
  /** OPTIONAL - The label of the tab */
  label: PropTypes.string,
  /** The value of the tab. Note: This should be unique. */
  value: PropTypes.string.isRequired,
  /** OPTIONAL - Array of list items. Note: can either be React nodes or objects */
  listItems: PropTypes.arrayOf(LIST_ITEM),
  /** OPTIONAL - Message to show when listItems is undefined */
  noDataMessage: PropTypes.string,
  /** OPTIONAL - Message to show when listItems is empty */
  zeroItemsMessage: PropTypes.string,
  /** OPTIONAL - boolean to allow listItems to be selectable. Default = false */
  isSelectable: PropTypes.bool,
  /** OPTIONAL - boolean to allow multiselection for listItems. Note: isSelectable must also be true. Default = false */
  enableMultiselect: PropTypes.bool,
  /** OPTIONAL - function to handle fetching new data for listItems */
  handleRefresh: PropTypes.func,
});

CardList.propTypes = {
  /** OPTIONAL - boolean to override default behavior of intially expanded. Default = true */
  isInitiallyExpanded: PropTypes.bool,
  /** OPTIONAL - class to be applied to the Card content */
  cardContentClass: PropTypes.string,
  /** OPTIONAL - styles to be applied to the outer Card element */
  cardStyle: PropTypes.object,
  /** OPTIONAL - class to be applied to the Card */
  cardClass: PropTypes.string,
  /** OPTIONAL - width of the card. Default is 300px. */
  contentWidth: PropTypes.string,
  /** OPTIONAL - height of the card. Default is 360px. */
  contentHeight: PropTypes.string,
  /** OPTIONAL - additional styles to be applied to the content Ex. contentStyle: {{backgroundColor: 'blue'}} */
  contentStyle: PropTypes.object,
  /** OPTIONAL - Should the card list have the capability to minimize and maximize. Default = true */
  isExpandable: PropTypes.bool,
  /** Object containing the options to be used in the card. See notes for more info. */
  tabs: PropTypes.arrayOf(TAB).isRequired,
  /** OPTIONAL - Whether or not to render the Header component. Default = true */
  shouldRenderHeader: PropTypes.bool,
  /** OPTIONAL - class to be applied to each list item */
  listItemClass: PropTypes.string,
};

export default CardList;
