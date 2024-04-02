import express from "express";
import { authenticate } from "../middlewares/authenticate.js";
import ratingController from "../controller/rating.conroller.js";


const router = express.Router();

router.post("/create",authenticate,ratingController.createRating);
router.get("/product/:productId",authenticate,ratingController.getAllRatings);

export default router;