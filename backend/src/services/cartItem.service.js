import userService from "../services/user.service.js";
import {CartItem} from "../models/cartItem.model.js"
import {Cart} from "../models/cart.model.js"

async function updateCartItem(userId, cartItemId, cartItemData){
    try {
        const item = await findCartItemById(cartItemId);

        if(!item){
           throw new Error("cart item not found :", cartItemId); 
        }

        const user = await userService.findUserById(item.userId);

        if(!user){
            throw new Error("user not found :",userId);
        }

        if( user._id.toString() === userId.toString() ){
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;
            const updatedCartItem = await item.save();
            return updatedCartItem;
        } else {
            throw new Error("you can't update this cart item");
        }

    } catch (error) {
        throw new Error(error.message);
    }
}

const removeCartItem = async (userId, cartItemId) => {
    try {
        console.log("user id in remove cart : ",userId);
        const item = await findCartItemById(cartItemId);
        
        if (!item) {
            throw new Error("Cart Item not found", cartItemId);
        }
        const user = await userService.findUserById(item.userId);
        console.log("error ............");
        if (!user) {
            throw new Error("user not found", userId);
        }
        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            throw new Error("cart not found for ", userId);
        }
        if (user._id.toString() === userId.toString()) {
            await CartItem.findByIdAndDelete(item._id);
            
            cart.cartItems=cart.cartItems.filter(cartItemId => cartItemId.toString() !== item._id.toString())
            await cart.save();
            return item;
        }

    } catch (error) {
        throw new Error(error.message);
    }

}


async function findCartItemById(cartItemId){
    const cartItem = await CartItem.findById(cartItemId).populate("product");

    if(cartItem){
        return cartItem;
    }else{
        throw new Error("cartitem not found with id ", cartItemId);
    }
}

const cartItemSrvice = {
  updateCartItem,
  removeCartItem,
  findCartItemById,
};

export default cartItemSrvice;