import {Rating} from "../models/rating.model.js";
import productService from "../services/product.service.js";

async function createRating(req,user){
const product = productService.findProductById(req.productId);

const rating = new Rating({
  product:product._id,
  user:user._id,
  rating:req.rating,
  createdAt:new Date()
})

return await rating.save();
}

async function getProductRating(productId){
  return await Rating.find({product:productId});
}

const ratingService = {
    createRating,
    getProductRating
};

export default ratingService;