import React from 'react';
import PropTypes from 'prop-types';
import {AgGridReact} from 'ag-grid-react';
import './ColumnList.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

function ColumnList({
  width = '85rem',
  height = '25rem',
  selectedTab,
  sortable = true,
  filter = true,
  resizable = true,
  rowSelection = 'single',
  onListItemClick,
}) {
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
    <div className="ag-theme-balham" style={{height: height, width: width}}>
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
  /** OPTIONAL - Ability to sort by each column by clicking the header. default = true */
  sortable: PropTypes.bool,
  /** OPTIONAL - Ability to filter each column by clicking the header. default = true */
  filter: PropTypes.bool,
  /** OPTIONAL - Ability to resize each column by clicking between the headers. default = true */
  resizable: PropTypes.bool,
  /** OPTIONAL - Ability to select one or multiple rows default = single */
  rowSelection: PropTypes.oneOf(['single', 'multiple']),
};

export default ColumnList;
