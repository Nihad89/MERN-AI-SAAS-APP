import { Router } from "express";
import { getAllUsers, userSignup, userLogin } from "../controllers/user-controller.js";
import validate, { loginValidator } from "../utils/validator.js";
import {signupValidator} from "../utils/validator.js";


const userRoutes = Router();
userRoutes.get("/",getAllUsers)
userRoutes.post("/signup",validate(signupValidator),userSignup)
userRoutes.post("/login",validate(loginValidator),userLogin)
userRoutes.get("/auth-status",userLogin)


export default userRoutes;