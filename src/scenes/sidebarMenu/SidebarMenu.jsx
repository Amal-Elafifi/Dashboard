import { useState } from "react";
import { useTheme, Box, Typography } from "@mui/material";
import {Link} from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";
import {
    tokens,
    HomeOutlinedIcon,
    GroupOutlinedIcon, 
    ContactsOutlinedIcon,
    ReceiptOutlinedIcon,
    Person2OutlinedIcon,
    CalendarTodayOutlinedIcon,
    HelpOutlineOutlinedIcon,
    BarChartOutlinedIcon ,
    PieChartOutlinedIcon,
    TimelineOutlinedIcon,
    MapOutlinedIcon 
} from "./index";







// eslint-disable-next-line react/prop-types
const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors= tokens(theme.palette.mode);
    
    return(
    <MenuItem
      active={selected === title}
      style={{color: `${colors.grey[100]}`}}
      icon={icon}
      onClick={() => {setSelected(title)}}
    >
        <Link to={to} 
            style={{color: `${colors.grey[100]}`, textDecoration: "none"}}
     
        >
        <Typography className="sidebarTags"> {title} </Typography>
        </Link>
    </MenuItem>
    )
}


const SidebarMenu = () => {
    const [selected, setSelected] = useState("Dashboard");
    const [collapsed, setCollapsed] = useState(false);
    const theme = useTheme();
    const colors= tokens(theme.palette.mode);



    return (
        <Box sx={{paddingLeft: `${collapsed? undefined: "10%"}`}}>
        <Item
          title="Dashboard"
          to="/"
          selected= {selected}
          setSelected= {setSelected}
          icon={<HomeOutlinedIcon/>}
        />
        <Typography
            style={{
                color:`${colors.grey[300]}`,
                margin: "15px 0 5px 20px"
            }}
        >
            Data
        </Typography>
      
        <Item
          title="Manage Team"
          to="/team"
          icon={<GroupOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Contacts Information"
          to="/contacts"
          icon={<ContactsOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
        />
        <Item 
          title="Invoices Balances"
          to= "/invoices"
          icon={<ReceiptOutlinedIcon/>}
          selected= {selected}
          setSelected={setSelected}
        />
        <Typography
            style={{
                color:`${colors.grey[300]}`,
                margin: "15px 0 5px 20px"
            }}
        >
            Pages
        </Typography>
        <Item 
          title="Profile Form"
          to="/form"
          icon={< Person2OutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Calender"
          to="/calender"
          icon={<CalendarTodayOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="FAQ Page"
          to="/faq"
          icon={<HelpOutlineOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
        />
        <Typography
            style={{
                color:`${colors.grey[300]}`,
                margin: "15px 0 5px 20px"
            }}
        >
            Charts
        </Typography>
        <Item 
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
        />
        <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
        />
        <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
        />
        <Item
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
        />
      </Box>

    )
}

export default SidebarMenu;