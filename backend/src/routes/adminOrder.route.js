import express from "express";
import adminOrderController from "../controller/adminOrder.controller.js";
import { authenticate } from "../middlewares/authenticate.js";

 
const router = express.Router();

router.get("/",authenticate,adminOrderController.getAllOrders);
router.put("/:orderId/confirmed",authenticate,adminOrderController.confirmedOrders);
router.put("/:orderId/ship",authenticate,adminOrderController.shippOrders);
router.put("/:orderId/deliver",authenticate,adminOrderController.deliverOrders);
router.put("/:orderId/cancel",authenticate,adminOrderController.cancelledOrders);
router.put("/:orderId/delete",authenticate,adminOrderController.deleteOrders);

export default router;