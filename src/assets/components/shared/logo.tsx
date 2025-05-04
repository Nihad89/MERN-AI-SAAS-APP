import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const Logo = () => {
  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        marginRight: "auto",
        gap: "10px",
        
       
    }}>
      <Link to="/" >
        <img 
        src="/openai.png" 
        alt="openai" 
        width = {"30px"} 
         
        height = {"30px"} 
        className="image-inverted" 
        />
        <Typography sx={{display : {md:"block",sm : "none ", xs : "none"},mr : "auto",fontWeight : "800", textShadow : "2px 2px 20px #000"}}>
            
        </Typography>
        <span style={{color: "lightgrey", textDecoration: "none"}}>MERN-GPT</span>
      </Link>

    </div>
  );
}