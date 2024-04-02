import express from "express";
import { authenticate } from "../middlewares/authenticate.js";
import orderController from "../controller/order.controller.js";


const router = express.Router();

router.post("/",authenticate,orderController.createOrder);
router.get("/user",authenticate,orderController.orderHistory);
router.get("/:id",authenticate,orderController.findOrderById);

export default router;
