import express from "express";
import { signupHandler, signinHandler } from "./auth.handlers.js";

const authRouter = express.Router();

authRouter.post("/sign-up", signupHandler);
authRouter.post("/sign-in", signinHandler);

export default authRouter;