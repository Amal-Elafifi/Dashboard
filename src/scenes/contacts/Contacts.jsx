import { useTheme } from "@emotion/react";
import Header from "../../components/Header";
import { tokens } from "../global";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import { mockDataContacts } from "../../data/mockData";




const Contacts= () => {
  const theme= useTheme();
  const colors = tokens(theme.palette.mode)
  const columns= [
    {field: "id", headerName: "ID"},
    {field: "registrarId", headerName: "RegistrarID", type: "number", headerAlign: "left", align: "left"},
    {field: "name", headerName: "Name", flex:1, cellClassName: "name-column--cell"},
    {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
    {field: "email", headerName: "Email", flex: 1},
    {field: "address", headerName: "Address", flex: 1},
    {field: "phone", headerName: "phoneNumber", flex: 1},
    {field: "city", headerName: "City", flex: 1},
    {field: "zipCode", headerName: "ZipCode", flex: 1}  
  ]
  return (
    <Box sx={{m: "20px"}}>
      <Header title="CONTACTS" subtitle="List Of Contacts For Future Reference"/>
      <Box sx={{
        m: "40px 0 0 0 ",
        height: "75vh",
       "& .MuiDataGrid-root": {
          border: "none"
       },
       "& .MuiDataGrid-cell": {
        borderBottom: "none"
       },
       "& .name-column--cell": {
        color: colors.greenAccent[300]
       },
       "& .MuiDataGrid-columnHeader": {
        backgroundColor: colors.blueAccent[700],
        borderBottom: "none"
       },
       "& .MuiDataGrid-virtualScroller": {
        backgroundColor: colors.primary[400]
       },
       "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        backgroundColor: colors.blueAccent[700]
       },
       "& .MuiDataGrid-toolbar-Container .Mui-Text": {
        color: `${colors.grey[100]} !important`
       }
       


      }}>
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar:  GridToolbar}}
        />
      </Box>
    </Box>
  )
}

export default Contacts;