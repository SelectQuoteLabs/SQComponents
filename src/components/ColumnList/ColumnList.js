import React from 'react';
import PropTypes from 'prop-types';
import {AgGridReact} from 'ag-grid-react';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import {makeStyles} from '@material-ui/core/styles';
import CardPopoverMenu from '../CardPopoverMenu/CardPopoverMenu';
import Typography from '@material-ui/core/Typography';

const useColumnListStyles = makeStyles(() => {
  return {
    columnList: {
      fontWeight: 'var(--font-weight-normal)',
      fontFamily: 'Open Sans',
      fontSize: '12px',
    },
    content: {
      padding: '0',
      height: '100%',
      width: '100%',
      paddingBottom: '0 !important' /* Material UI override */,
    },
    header: {
      display: 'flex',
      justifyContent: 'flex-end',
      fontSize: '21px',
      padding: '0rem 0.5rem 0rem 1rem',
      height: '4rem',
      backgroundColor: 'var(--color-white)',
    },
    cardPopOverMenu: {
      borderRight: '0.08333rem solid var(--color-slate)',
      paddingTop: '0.5rem',
    },
    headerButtons: {
      display: 'flex',
      justifyContent: 'flex-end',
      fontSize: '1rem',
      padding: '0.15rem 0rem 0rem 0rem',
    },
  };
});

const useStyles = makeStyles(theme => ({
  open: {
    transform: 'rotate(0deg)',
    padding: '0.5rem 0 0 0',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  closed: {
    transform: 'rotate(180deg)',
    padding: '0.5rem 0 0 0',
  },
}));

function ColumnList({
  height = '25rem',
  tabs,
  sortable = true,
  filter = true,
  resizable = true,
  title,
  isInitiallyExpanded = true,
  zeroItemsMessage,
  ...rest
}) {
  const classes = useColumnListStyles();
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);

  const selectedTabInProps = React.useMemo(() => {
    return tabs.find(tab => tab.value === selectedTab.value);
  }, [selectedTab.value, tabs]);

  React.useEffect(() => {
    if (!tabs) return;
    setSelectedTab(selectedTabInProps);
  }, [selectedTabInProps, tabs]);

  const [isExpanded, setExpanded] = React.useState(isInitiallyExpanded);

  const handleTabChange = selectedValue => {
    setSelectedTab(tabs.find(tab => tab.value === selectedValue));
  };

  const expandClasses = useStyles();
  const expandedStyle = isExpanded ? expandClasses.open : expandClasses.closed;

  const expandClick = () => {
    setExpanded(!isExpanded);
  };

  const defaultColumnProps = {
    sortable: sortable,
    field: 'Valid',
    filter: filter,
    resizable: resizable,
  };

  const emptyMessage = () => {
    const noRowsMessage = zeroItemsMessage
      ? zeroItemsMessage
      : 'No Items To Display';
    return (
      <Typography variant="subtitle1" color="textSecondary">
        {noRowsMessage}
      </Typography>
    );
  };

  const onGridReady = params => {
    const gridApi = params.api;
    gridApi.sizeColumnsToFit();

    if (selectedTab.initialFilter) {
      gridApi.setFilterModel(selectedTab.initialFilter);
      gridApi.onFilterChanged();
    }
  };

  return (
    <Card className={classes.columnList}>
      {tabs.length > 1 && (
        <CardHeader
          disableTypography={true}
          className={classes.header}
          title={title}
          action={
            <div className={classes.headerButtons}>
              <div className={classes.cardPopOverMenu}>
                <CardPopoverMenu
                  tabs={tabs}
                  selectedTab={selectedTab}
                  selectTab={handleTabChange}
                  disabled={false}
                />
              </div>
              <IconButton
                onClick={expandClick}
                className={expandedStyle}
                aria-expanded={true}
                aria-label="open"
              >
                <ExpandMoreIcon />
              </IconButton>
            </div>
          }
        />
      )}
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent
          className={`ag-theme-balham ${classes.content}`}
          style={{height: height}}
        >
          <AgGridReact
            animateRows={true}
            columnDefs={selectedTab.columns}
            rowData={selectedTab.rowData}
            onGridReady={onGridReady}
            defaultColDef={defaultColumnProps}
            rowClass="columnList__rows"
            pagination={
              (selectedTab.rowData && selectedTab.rowData.length) > 100
                ? true
                : false
            }
            paginationPageSize={100}
            rowSelection={'single'}
            frameworkComponents={{
              ...rest.components,
              emptyMessage,
            }}
            noRowsOverlayComponent="emptyMessage"
            {...rest}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
}

ColumnList.propTypes = {
  /** OPTIONAL - height of the card.  Default is 25rem. Ex. height='85rem' */
  height: PropTypes.string,
  /** Selected tab in view with selectedTab.columns and selectedTab.rowData */
  tabs: PropTypes.array,
  /** OPTIONAL - Ability to sort by each column by clicking the header. Can be set per column. default = true */
  sortable: PropTypes.bool,
  /** OPTIONAL - Ability to filter each column by clicking the header. Can be set per column. default = true */
  filter: PropTypes.bool,
  /** OPTIONAL - Ability to resize each column by clicking between the headers. default = true */
  resizable: PropTypes.bool,
  /** OPTIONAL - Should the card list have the capability to minimize and maximize. default = true */
  isInitiallyExpanded: PropTypes.bool,
};

export default ColumnList;
