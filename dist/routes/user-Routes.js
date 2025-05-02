import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controller.js";
import validate from "../utils/validator.js";
import { signupValidator } from "../utils/validator.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
export default userRoutes;
//# sourceMappingURL=user-Routes.js.map