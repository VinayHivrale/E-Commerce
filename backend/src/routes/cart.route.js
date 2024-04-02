import express from "express";
import cartController from "../controller/cart.controller.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = express.Router();

router.get("/",authenticate,cartController.findUserCart);
router.put("/add",authenticate,cartController.addItemToCart);

export default router;
