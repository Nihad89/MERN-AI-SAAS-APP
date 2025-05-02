import { NextFunction , Request , Response} from "express"
import User from "../models/User.js"
import {hash,compare} from "bcrypt"
import {createToken}  from "../utils/token-manager.js"
import { COOKIE_NAME, DOMAIN } from "../utils/constants.js"




export const getAllUsers=async (req : Request, res : Response, next : NextFunction) =>{
  try {
    const users = await User.find()
    return res.status(200).json({message : "ok", users})
    
  } catch (error) {
    console.log(error)
    return res.status(200).json({message : "error", error})
    
  }  
}



export const userSignup=async (req : Request, res : Response, next : NextFunction) =>{
    try {
      const { name, email, password } = req.body;
      const existingUser = await User.findOne({email})
      if(existingUser) 
        return res.status(409).json({message : "User Already Exists"})

      const hashedPassword = await hash(password,10)
      const user = new User({name , email, password : hashedPassword})
      await user.save();


      //create token and set cookie
      
      
      res.clearCookie(COOKIE_NAME,
        {path: "/",domain: DOMAIN,
          secure : false,
          httpOnly : true,
          signed:true,  //change in production
          expires: new Date(0)
        })
      
      
      const token = createToken(user._id.toString(),user.email,"7d");
      
      res.cookie(COOKIE_NAME,token,
        {path: "/",domain: DOMAIN,
          secure : false,
          httpOnly : true,
          signed:true,
          expires : new Date(Date.now() + 7*24*60*60*1000)})


      return res.status(201).json({message : "ok", id : user._id.toString})


      
      
    } catch (error) {
      console.log(error)
      return res.status(200).json({message : "error", error})
      
    }  
  }

export const userLogin=async (req : Request, res : Response, next : NextFunction) =>{
  try {
      const { email, password } = req.body;
      const user = await User.findOne({email})
      
      if(!user)
        {
          return res.status(401).json("User Not Registered")  
        } 
        

      const isMatch = await compare(password,user.password)
      if(!isMatch){
        return res.status(401).json("Invalid Password") 
      }
      
      //create token and set cookie



      res.clearCookie(COOKIE_NAME,
        {path: "/",domain: DOMAIN,
          secure : false,
          httpOnly : true,
          signed:true,  //change in production
          expires: new Date(0)
        })
      
      
      const token = createToken(user._id.toString(),user.email,"7d");
      
      res.cookie(COOKIE_NAME,token,
        {path: "/",domain: DOMAIN,
          secure : false,
          httpOnly : true,
          signed:true,
          expires : new Date(Date.now() + 7*24*60*60*1000)})
      
      
      //return success response
        return res.status(200).json({
        message: "User Found",
        user: {
          name: user.name
        }
      });
    } catch (error) {
      console.log(error)
      return res.status(200).json({message : "error", cause : error.message}) 
    
      
    } 
  }