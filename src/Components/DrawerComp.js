import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, sx } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false)
  
    return (
    <>
        <Drawer PaperProps={{sx:{backgroundColor:"rgba(34,193,195,1)"}}} open={open} onClose={(e, val) =>{setOpen(false)}}>
          <List>
            {links.map((link, index)=> (
              <ListItemButton onClick={()=>setOpen(false)} key={index} divider>
              <ListItemIcon>
                <ListItemText sx={{color:"white"}}>
                  {link}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            ))}
          </List>
        </Drawer>
        
        <IconButton sx={{marginLeft: "auto", color: "white"}} onClick={() => setOpen(!open)}> <MenuIcon/> </IconButton>
    </>
  )
}

export default DrawerComp