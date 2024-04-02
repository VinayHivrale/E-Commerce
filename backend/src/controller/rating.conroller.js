import ratingService from "../services/rating.service.js";

const createRating = async (req,res) => {
    const user = req.user;
    try {
        const review = await ratingService.createRating(req.body,user);
        return res.status(201).send(review);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const getAllRatings = async (req,res) => {
    const productId = req.params.productId;
    const user = req.user;
    try {
        const reviews = await ratingService.getProductRating(productId);
        return res.status(201).send(reviews);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const ratingController = {
    createRating,
    getAllRatings
}

export default ratingController;