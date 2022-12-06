import "./Users.css";
import * as React from 'react';
import { useContext } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { usersContext } from "../../../contexts/users-context";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
 
 
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  
];

const rows = [
  { id: 1, name: 'Snow', email: 'Jon', age: 35 },
  { id: 2, name: 'Lannister', email: 'Cersei', age: 42 },
  { id: 3, name: 'Lannister', email: 'Jaime', age: 45 },
  { id: 4, name: 'Stark', email: 'Arya', age: 16 },
  { id: 5, name: 'Targaryen', email: 'Daenerys', age: 19 },
  { id: 6, name: 'Melisandre', email: null, age: 150 },
  { id: 7, name: 'Clifford', email: 'Ferrara', age: 44 },
  { id: 8, name: 'Frances', email: 'Rossini', age: 36 },
  { id: 9, name: 'Roxie', email: 'Harvey', age: 65 },
];

export default function Users() {
  const {users} = useContext(usersContext)
 
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
