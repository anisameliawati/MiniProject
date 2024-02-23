import express, { Router } from "express";
import { eventController } from "../controllers/event";

export const route: Router = express.Router();

route.get("/", eventController.getProducts);
route.post("/", eventController.addProduct);
route.patch("/:id", eventController.update);
route.delete("/:id", eventController.delete);
