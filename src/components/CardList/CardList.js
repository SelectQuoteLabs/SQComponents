import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RefreshIcon from '@material-ui/icons/Refresh';
import {makeStyles} from '@material-ui/core/styles';

import List from './List';
import CardPopoverMenu from '../CardPopoverMenu';
import LoadingIcon from '../LoadingIcon';

const useCardListStyles = makeStyles(() => {
  return {
    header: {
      height: 'var(--card-header-height)',
      borderBottom: '1px solid var(--color-lightGray)',
    },
    headerItems: {
      display: 'flex',
      alignItems: 'center',
      height: '2.5rem',
    },
    cardList: {
      display: 'inline-block',
      padding: '0rem 0rem 0rem 0rem',
      minWidth: '25rem',
      width: 'auto',
    },
    content: {
      padding: '0.1rem 1.5rem 0rem 0rem',
      overflowY: 'scroll',
      overflowX: 'hidden',
      height: '30rem',
      width: '25rem',
    },
    icon: {
      float: 'right',
      display: 'block',
      textAlign: 'right',
      fontSize: '2.5rem',
      paddingLeft: '2rem',
      position: 'relative',
      top: '0',
    },
    items: {
      display: 'block',
      padding: '0rem 0rem 0rem 0rem',
      overflow: 'auto',
      width: 'auto',
    },
    selectChip: {
      height: '1.25rem',
      padding: '.5rem 1.25rem 0rem',
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '0.4rem',
      borderTop: '1px solid var(--color-lightGray)',
    },
    loadingContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      paddingLeft: '2.5rem',
    },
    noData: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: 'inherit',
    },
    noDataCardContent: {
      padding: '0 !important',
    },
  };
});

const useStyles = makeStyles(theme => ({
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
  const classes = useCardListStyles();
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

  const buttonClasses = useStyles();
  const expandClasses = isExpanded
    ? buttonClasses.expandOpen
    : buttonClasses.expand;

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
    <Card
      className={classes.cardList}
      style={{width: contentWidth, ...cardStyle}}
    >
      {shouldRenderHeader && (
        <CardHeader
          className={classes.header}
          action={
            <div className={classes.headerItems}>
              <CardPopoverMenu
                tabs={tabs}
                selectedTab={selectedTab}
                selectTab={handleTabChange}
                disabled={false}
              />
              {isExpandable && (
                <IconButton
                  className={`${buttonClasses.base} ${expandClasses}`}
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
      )}
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent
          className={classnames(
            classes.content,
            {[classes.noDataCardContent]: !selectedTab.listItems?.length},
            cardContentClass
          )}
          style={{
            height: contentHeight,
            width: contentWidth,
            ...contentStyle,
          }}
        >
          {selectedTab.isLoading ? (
            <div className={classes.loadingContainer}>
              <LoadingIcon style={{marginLeft: '10rem'}} />
            </div>
          ) : (
            <List
              classes={classes}
              listItems={selectedTab.listItems}
              noDataMessage={selectedTab.noDataMessage}
              zeroItemsMessage={
                selectedTab.zeroItemsMessage || 'No Items To Display'
              }
              isSelectable={selectedTab.isSelectable}
            />
          )}
        </CardContent>
      </Collapse>
      {isExpanded && selectedTab.handleRefresh && (
        <footer className={classes.footer}>
          <IconButton
            title="Refresh List"
            color="primary"
            onClick={selectedTab.handleRefresh}
            className={buttonClasses.base}
          >
            <RefreshIcon fontSize="large" />
          </IconButton>
        </footer>
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
