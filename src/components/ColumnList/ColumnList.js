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
import './AgGrid.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './ColumnList.css';

const useStyles = makeStyles(theme => ({
  open: {
    transform: 'rotate(0deg)',
    paddingTop: '0.5rem',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  closed: {
    transform: 'rotate(180deg)',
    paddingTop: '0.5rem',
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
    <Card className="columnList">
      {tabs.length > 1 && (
        <CardHeader
          disableTypography={true}
          className="columnList__header"
          title={title}
          action={
            <div className="columnList__headerButtons">
              <div className="columnList__cardPopOverMenu">
                <CardPopoverMenu
                  tabs={tabs}
                  selectedTab={selectedTab}
                  selectTab={handleTabChange}
                  disabled={false}
                />
              </div>
              <IconButton
                onClick={expandClick}
                className={expandedStyle} //eslint-disable-line
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
          className="ag-theme-balham columnList__content"
          style={{height: height}}
        >
          <AgGridReact
            animateRows={true}
            columnDefs={selectedTab.columns}
            rowData={selectedTab.rowData}
            onGridReady={onGridReady}
            defaultColDef={defaultColumnProps}
            rowClass={'columnList__rows'}
            pagination={selectedTab.rowData?.length > 100 ? true : false}
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
