import Header  from "../../components/Header";
import { tokens } from "../global";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';
import { mockDataInvoices } from "../../data/mockData";




const Invoices= () => {
  const theme= useTheme();
  const colors = tokens(theme.palette.mode)
  const columns= [
    {field: "id", headerName: "ID"},
    {field: "name", headerName: "Name", flex:1, cellClassName: "name-column--cell"},
    {field: "phone", headerName: "PhoneNumber", flex: 1},
    {field: "email", headerName: "Email", flex: 1},
    {field: "cost", headerName: "Cost", flex: 1, align: "left",
      renderCell: (params) => (
        <Typography sx={{color: colors.greenAccent[500], lineHeight: "3.5", fontSize: "0.85rem"}}>
          {params.row.cost}
        </Typography>
      ),
    },
    {field: "date", headerName: "Date", flex: 1}
  ]
  

  return (
    <Box sx={{m: "20px"}}>
      <Header title="Invoices" subtitle="List Of Invoice Balances"/>
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
       "& .MuiCheckbox-root": {
        color: `${colors.greenAccent[200]} !important`,
       }
       


      }}>
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  )
}

export default Invoices;