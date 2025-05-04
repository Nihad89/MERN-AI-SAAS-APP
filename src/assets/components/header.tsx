import React, { use } from "react";
import { AppBar } from "@mui/material";

import { Toolbar } from "@mui/material";
import {Logo} from "./shared/logo"; 
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { NavigationLink } from "./shared/Navigation";


export const Header = () => {
  const auth = useAuth() ;
  return (
    
    <AppBar sx={{ position: "static" , bgcolor:"transparent", boxShadow: "none"}}>  
        <Toolbar sx ={{display: "flex", justifyContent: "space-between"}}>
        <Logo/>
        <div>
          {
          auth?.isLoggedIn ? (
            <>
            <NavigationLink 
              to="/chat" 
              bg= "#00fffc" 
              text="Go to Chat " 
              textColor="black" 
            />
            <NavigationLink 
              to="/" 
              bg= "#51538f" 
              text="logout " 
              textColor="white" 
              onClick={auth?.logout}
            />
            </>
            
           
          ) : (
            
            <>
            <NavigationLink 
              to="/login" 
              bg= "#00fffc" 
              text="Login " 
              textColor="black" 
            />
            <NavigationLink 
              to="/signup" 
              bg= "#51538f" 
              text="Signup " 
              textColor="white" 
            />
            </>
          )
          
        }
            
        </div>
        </Toolbar>
    </AppBar>
  );
}