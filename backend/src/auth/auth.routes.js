import express from "express";
import { signupHandler, signinHandler } from "./auth.handlers.js";
import { validateData } from "../common/common.middlewares.js";
import { signupSchema, signinSchema } from "./auth.schemas.js";

const authRouter = express.Router();

authRouter.post("/sign-up", validateData(signupSchema), signupHandler);
authRouter.post("/sign-in", validateData(signinSchema), signinHandler);

export default authRouter;