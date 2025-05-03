import React from "react";
import { AppBar } from "@mui/material";

import { Toolbar } from "@mui/material";
import {Logo} from "./shared/logo"; 


export const Header = () => {
  return (
    
    <AppBar sx={{ position: "static" , bgcolor:"transparent", boxShadow: "none"}}>  
        <Toolbar sx ={{display: "flex", justifyContent: "space-between"}}>
        <Logo/>
        </Toolbar>
    </AppBar>
  );
}