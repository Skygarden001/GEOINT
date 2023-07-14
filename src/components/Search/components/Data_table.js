import {Context, Context_Sat} from '../../../store/Context';
import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable() {
  
  const [selectedRows, setSelectedRows] = useState([]);
  // Handler for retrieving selected rows
  const handleSelectionChange = (selection) => {
    setSelectedRows(selection);
  };
  useEffect(() => {
    const selectedRowsData = rows.filter((row) => selectedRows.includes(row.id));
   // console.log('Selected Rows:', selectedRowsData);
  }, [selectedRows]);
  const [state, dispatch] = useContext(Context)
  const rows = state.features.map((feature) => feature.properties);
  const columns = [
    { field: 'id', headerName: 'Id', width: 50 },
    { field: 'satellite_name', headerName: 'Satellite_name', width: 100 },
    { field: 'mode', headerName: 'Mode', width: 50 },
    { field: 'start_datetime', headerName: 'Start_datetime', width: 150 },
    { field: 'end_datetime', headerName: 'End_datetime', width: 150 },
    { field: 'imaging_time', headerName: 'Imaging_time', width: 100 },
    { field: 'resolution', headerName: 'Resolution', width: 100 },
  ];
  return(
    <div style={{ height: 400, width: '100%', borderColor: 'black', color:'white' }}>
      <DataGrid style={{color:'white'}}
        rows={rows}
        columns={columns}
        sx={{ fontSize: 12, '& .MuiDataGrid-row': {
            height: '20px',
              // Set the desired height of the row
          } }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
        disableSelectionOnClick
        onRowSelectionModelChange={handleSelectionChange}
        selectionModel={selectedRows}
      />
    </div>
  );
}
