import express, { Router } from "express";
import { categoryController } from "../controllers/category";

export const route: Router = express.Router();

route.get("/", categoryController.getCategories);
