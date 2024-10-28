import React, { useState } from "react";
import { AppBar, Grid, Grid2, Tabs, Tab, Toolbar, Typography, Button, Box, useTheme, useMediaQuery} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DrawerComp from "./DrawerComp";


const Navbar = ({links}) => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch)  
  return (
   <AppBar sx={{backgroundImage:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"}}>
        <Toolbar>
            {isMatch ? <>
                <Typography><AddShoppingCartIcon /></Typography>
                <DrawerComp links={links}/></> :
            <Grid sx={{ placeItems:"center" }} container >
                <Grid item xs={2}>
                    <Typography><AddShoppingCartIcon /></Typography>
                </Grid>
                <Grid item xs={5}>
                    <Tabs indicatorColor="secondary"textColor="inherit"value={value} onChange={(e, val) => setValue(val)}>
                        {links.map((link, index) => (
                            <Tab key={index} label={link}/>
                        ))}
                    </Tabs>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <Box display={"flex"}>
                        <Button sx={{ marginLeft: "auto", backgroundColor:"rgba(34,193,195,1)"}}variant="contained">Login</Button>
                        <Button sx={{ marginLeft: 1, backgroundColor:"rgba(34,193,195,1)"}}variant="contained">Sign Up</Button>
                    </Box>
                </Grid>
            </Grid>
            }
        </Toolbar>
   </AppBar>
  );
};

export default Navbar;
