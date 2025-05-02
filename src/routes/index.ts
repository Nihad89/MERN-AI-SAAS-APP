import { Router } from "express";
import userRoutes from "./user-Routes.js";
import chatRoutes from "./chat-Routes.js";

const appRouter = Router();
appRouter.use("/user",userRoutes);
appRouter.use("/chat",chatRoutes);


export default appRouter;

