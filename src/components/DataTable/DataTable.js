import React from 'react';
import PropTypes from 'prop-types';
import {AgGridReact} from 'ag-grid-react';
import Typography from '@material-ui/core/Typography';
import './AgGrid.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import './DataTable.css';

function DataTable({
  columns,
  rowData,
  initialFilter,
  sortable = true,
  filter = true,
  resizable = true,
  zeroItemsMessage,
  ...rest
}) {
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

    if (initialFilter) {
      gridApi.setFilterModel(initialFilter);
      gridApi.onFilterChanged();
    }
  };

  return (
    <div className="dataTable ag-theme-balham">
      <AgGridReact
        animateRows={true}
        columnDefs={columns}
        rowData={rowData}
        onGridReady={onGridReady}
        defaultColDef={defaultColumnProps}
        rowClass={'dataTable__rows'}
        pagination={(rowData && rowData.length) > 100 ? true : false}
        paginationPageSize={100}
        rowSelection={'single'}
        frameworkComponents={{
          ...rest.components,
          emptyMessage,
        }}
        noRowsOverlayComponent="emptyMessage"
        {...rest}
      />
    </div>
  );
}

DataTable.propTypes = {
  /** Column definitions for AgGrid */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      headerName: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
    })
  ).isRequired,

  /** Row data for AgGrid */
  rowData: PropTypes.array,

  /** Initial filter to apply */
  initialFilter: PropTypes.object,

  /** Ability to sort by each column by clicking the header. Can be set per column. default = true */
  sortable: PropTypes.bool,

  /** Ability to filter each column by clicking the header. Can be set per column. default = true */
  filter: PropTypes.bool,

  /** Ability to resize each column by clicking between the headers. default = true */
  resizable: PropTypes.bool,

  /** Message to display when rowData is empty */
  zeroItemsMessage: PropTypes.string,
};

export default DataTable;
