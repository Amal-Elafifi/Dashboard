import { useTheme } from "@emotion/react";
import {
  Header,
  AdminPanelSettingsOutlinedIcon,
  SecurityOutlinedIcon,
  LockOpenOutlinedIcon
} from "./index";
import { tokens } from "../global";
import { Box, Typography } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';
import { mockDataTeam } from "../../data/mockData";




const Team= () => {
  const theme= useTheme();
  const colors = tokens(theme.palette.mode)
  const columns= [
    {field: "id", headerName: "ID"},
    {field: "name", fieldName: "Name", flex:1, cellClassName: "name-column--cell"},
    {field: "age", fieldName: "Age", type: "number", headeraAlign: "left", align: "left"},
    {field: "email", fieldName: "Email", flex: 1},
    {field: "phone", fieldName: "phoneNumber", flex: 1},
    {filed: "access", fieldName: "AccessLevel", flex: 1, 
      renderCell: ({ row: {access}}) => {
        return(
          <Box
            sx={{width: "60%",
              m: "0 auto",
              p: "5px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "4px"
            }}
            backgroundColor = {
              access === "admin"? colors.greenAccent[600]:
              access === "manager"? colors.greenAccent[700]:
              colors.greenAccent[700]
            }
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon/>}
            {access === "user" && <LockOpenOutlinedIcon/>}

            <Typography sx={{m: "auto 5px", color: colors.grey[100]}}>
              {access}
            </Typography>
          </Box>
        )
      }
    }
  
  ]
  return (
    <Box sx={{m: "20px"}}>
      <Header title="Team" subtitle="Managing The Team Members"/>
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
          rows={mockDataTeam}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  )
}

export default Team;