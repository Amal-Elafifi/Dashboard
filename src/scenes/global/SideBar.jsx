import { useState } from "react";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {tokens, admin} from "./index";
import SidebarMenu from "../sidebarMenu/SidebarMenu";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import 'css-pro-layout/dist/css/css-pro-layout.css';




const SideBar = () => {
  const theme = useTheme();
  const colors =tokens(theme.palette.mode);
  const [collapsed, setCollapsed] = useState(false);


  return (
    <Box 
    sx={{
      "& .ps-sidebar-root": {
        borderColor: `${colors.primary[400]} !important`
      },
      "& .ps-sidebar-container": {
        backgroundColor: `${colors.primary[400]} !important`,
      },
      "& .ps-icon-wrapper" : {
        backgroundColor: "transparent !important"
      },
      "& .ps-inner-item": {
        padding: "5px 35px 5px 20px !important"
      },
      "& .ps-menu-button:hover, & .sidebarTags:hover": {
        color: "#868dfb !important",
        backgroundColor: "transparent !important"
      },
      "& .ps-active, & .ps-active .sidebarTags": {
        color: "#6870fa !important"
      }

    }}>

   <Sidebar collapsed={collapsed}>
    <Menu iconShape="square">
      <MenuItem
        onClick={() => setCollapsed(!collapsed)}
        icon={collapsed? <MenuOutlinedIcon/> : undefined}
        style={{
          margin: "10px 0 20px 0",
          color: `${colors.grey[100]}`
        }}
      >
        {!collapsed ? (
          <Box
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            ml: "15px"      
        }}>
          <Typography 
            variant="h5" 
            sx={{
              color: `${colors.grey[100]}`
            }} 
            >
            ADMINS
          </Typography>
          <IconButton onClick={() => setCollapsed(!collapsed)}
           style={{
            borderRadius: "50% !important"
           }}>
            <MenuOutlinedIcon />
          </IconButton>

        </Box>
    ): ""}
      </MenuItem>
      {/* user */}
        {!collapsed && (
          <Box sx={{
            mb:"25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"  ,
            flexDirection: "column"
          }}>
            <Box>
              <img src={admin}
                alt="ptofile-user" 
                width="100px"
                height="100px"
                style={{
                  borderRadius: "50%",
                  cursor: "pointer"
                }}/>
            </Box>
            <Box sx={{textAlign: "center"}}>
              <Typography variant="h3" 
                color={colors.grey[100]} 
                sx={{
                  m: "10px 0 0 0",
                  fontWeight: "bold"
                 }}>
                Eddie
              </Typography>
              <Typography variant="h6" color={colors.greenAccent[600]}>
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}
        {/* menu items */}
          <SidebarMenu/>
      </Menu>

    
    </Sidebar> 
    </Box>

  )
}

export default SideBar;