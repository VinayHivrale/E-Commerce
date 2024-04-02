import cartService from "../services/cart.service.js";

const findUserCart = async(req,res) => {
    const user = req.user;
    console.log("getting user in the cartController ",user );
    try {
        const cart = await cartService.findUserCart(user._id);
        console.log("cart in the cartController ",cart);
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const addItemToCart = async(req,res) => {
    const user = req.user;
    try {
        const cartItem = await cartService.addCartItem(user._id,req.body);
        return res.status(200).send(cartItem);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const cartController = {
    findUserCart,
    addItemToCart
}

export default cartController;