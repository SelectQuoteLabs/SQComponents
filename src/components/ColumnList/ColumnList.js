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
import './ColumnList.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

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
function ColumnList({
  width = '85rem',
  height = '25rem',
  tabs,
  sortable = true,
  filter = true,
  resizable = true,
  rowSelection = 'single',
  onListItemClick,
  title,
  isInitiallyExpanded = true,
}) {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);

  const [isExpanded, setExpanded] = React.useState(isInitiallyExpanded);

  const handleTabChange = selectedValue => {
    setSelectedTab(tabs.find(tab => tab.value === selectedValue));
  };

  const expandClasses = useStyles();

  const expandClick = () => {
    setExpanded(!isExpanded);
  };

  const defaultColumnProps = {
    sortable: sortable,
    field: 'Valid',
    filter: filter,
    resizable: resizable,
  };

  const onGridReady = params => {
    const gridApi = params.api;
    gridApi.sizeColumnsToFit();
  };

  const onSelectionChanged = params => {
    const gridApi = params.api;
    var selectedRows = gridApi.getSelectedRows();
    if (selectedRows.length) {
      if (selectedRows.length === 1) {
        onListItemClick(selectedRows[0]);
        rowSelection === 'single' && gridApi.deselectAll();
      } else onListItemClick(selectedRows);
    }
  };

  return (
    <Card style={{width: width}}>
      {tabs.length > 1 && (
        <CardHeader
          disableTypography={true}
          className="columnList__header"
          title={title}
          action={
            <div className="columnList__header1">
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
                className={
                  (expandClasses.expand,
                  {[expandClasses.expandOpen]: isExpanded})
                } //eslint-disable-line
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
        <CardContent style={{height: height, width: width, padding: '0px'}}>
          <div
            className="ag-theme-balham"
            style={{height: height, width: width}}
          >
            <AgGridReact
              animateRows={true}
              columnDefs={selectedTab.columns}
              rowData={selectedTab.rowData}
              onGridReady={onGridReady}
              defaultColDef={defaultColumnProps}
              rowClass={'columnList__rows'}
              rowSelection={rowSelection}
              onSelectionChanged={onSelectionChanged}
              pagination={selectedTab.rowData.length > 100 ? true : false}
              paginationPageSize={100}
            ></AgGridReact>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}

ColumnList.propTypes = {
  /** OPTIONAL - width of the card.  Default is 25rem. Ex. height={{height: '55rem'}}*/
  width: PropTypes.string,
  /** OPTIONAL - height of the card.  Default is 30rem. Ex. width={{width: '55rem'}} */
  height: PropTypes.string,
  /** Function to be triggered when an item is clicked on in the Card List */
  onListItemClick: PropTypes.func,
  /** Selected tab in view with selectedTab.columns and selectedTab.rowData */
  selectedTab: PropTypes.object,
  /** OPTIONAL - Ability to sort by each column by clicking the header. Can be set per column. default = true */
  sortable: PropTypes.bool,
  /** OPTIONAL - Ability to filter each column by clicking the header. Can be set per column. default = true */
  filter: PropTypes.bool,
  /** OPTIONAL - Ability to resize each column by clicking between the headers. default = true */
  resizable: PropTypes.bool,
  /** OPTIONAL - Ability to select one or multiple rows default = single */
  rowSelection: PropTypes.oneOf(['single', 'multiple']),
};

export default ColumnList;
