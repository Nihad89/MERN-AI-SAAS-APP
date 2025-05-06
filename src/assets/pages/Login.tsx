import React from "react";
import { Box,Typography,Button } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { RiLoginCircleFill } from "react-icons/ri";
import { useAuth } from "../../context/AuthContext";
import toast, { Toast } from "react-hot-toast";


export const Login = () => {
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Logging in...", {id: "login"});
      await auth?.login(email, password);
      toast.success("Signed In Succesfully", {id: "login"});
    } catch (error) {
      console.error(error);
      toast.error("Invalid Credentials", {id: "login"});
    }


  }
  return (
  <Box width={'100%'} height={'100%'} display="flex" flex={1}>
    <Box
      padding={8}
      mt={8}
      display={{md : 'flex', xs : "none", sm : "none"}} 
    >
      <img src="/airobot.png" alt="login" style={{width : "200px"}} />
    </Box>
    <Box display={"flex"} flex={{ xs:1 , md : 0.5}} justifyContent={"center"} alignItems={"center"} padding={2} ml={"auto"} mt={"16"}>
        <form 
          onSubmit={(handleSubmit)}
          style={{
          margin : "auto",
          padding : "20px",
          boxShadow : "10px 10px 20px #000",
          borderRadius : "10px",
          border : "none",
        }}
        >
          <Box sx={{display : "flex", flexDirection : "column", justifyContent : "center"}}>
            <Typography variant="h4" fontWeight={800} color={"white"} textAlign={"center"} mb={2}>
              Login
            </Typography>
            <CustomizedInput type="email" name="email" label="Email" />
            <CustomizedInput type="password" name="password" label="Password" />
            <Button type="submit" sx={{px : 2 ,py:1,mt : 2, width : "400 px", borderRadius : 2,bgcolor:"white",":hover" : {bgcolor : "white",color : "black"}}} 
            endIcon={<RiLoginCircleFill />}>
            Login
              </Button>
            
          </Box>
        </form>
    </Box>
    
  </Box>
  );
}