import express, { Router } from "express";
import { stockController } from "../controllers/stock";

export const route: Router = express.Router();

route.get("/", stockController.getStocks);
// route.post("/", stockController.addStocks);
route.patch("/:id", stockController.editStocks);
