import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../themes";


const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box sx={{mb: "30px"}}>
            <Typography variant="h2" style={{color: `${colors.grey[100]}`, fontWeight: "bold", marginBottom: "5px"}}>{title}</Typography>
            <Typography variant="h5" style={{color: `${colors.greenAccent[500]}`}}>{subtitle}</Typography>
        </Box>
    )
}

export default Header;