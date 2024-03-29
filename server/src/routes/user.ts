import express, { Router } from "express";
import { userController } from "../controllers/user";

export const route: Router = express.Router();

route.get("/v1", userController.login);
route.get("/v3", userController.keepLogin);
route.post("/v2", userController.register);
