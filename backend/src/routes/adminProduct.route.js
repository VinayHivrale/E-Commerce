import express from "express";
import { authenticate } from "../middlewares/authenticate.js";
import productController from "../controller/product.controller.js";

const router =  express.Router();

router.post("/",authenticate,productController.createProduct);
router.post("/creates",authenticate,productController.createMultipleProduct);
router.delete("/:id",authenticate,productController.deleteProduct);
router.put("/:id",authenticate,productController.updateProduct);

export default router;
