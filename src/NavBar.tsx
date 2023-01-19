import { AppBar, Typography, Button, Toolbar } from "@mui/material"
import React from "react"

export const NavBar = () => {
    return <AppBar component='nav' position="static">
        <Toolbar>
            
<Typography variant="h6" onClick={()=>{alert("HOME!")}}>
            Home
          </Typography>

          <Typography variant="h6" >
            Wedding
          </Typography>

          <Typography variant="h6" >
            Yosemite
          </Typography>
          </Toolbar>

    </AppBar>
}