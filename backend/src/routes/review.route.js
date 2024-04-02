import express from "express";
import { authenticate } from "../middlewares/authenticate.js";
import reviewController from "../controller/review.controller.js";


const router = express.Router();

router.post("/create",authenticate,reviewController.createReview);
router.get("/product/:productId",authenticate,reviewController.getAllReview);

export default router;