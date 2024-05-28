import {Cart} from "../models/cart.model.js";
import {CartItem} from "../models/cartItem.model.js"
import {Product} from "../models/product.model.js"

async function createCart(user) {
  try {
    const cart = new Cart({ user });
    const createCart = await cart.save();
    return createCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findUserCart(userId){
    try {
      
     // console.log("user id in the findusercart ",userId);

      let cart = await Cart.findOne({user:userId});

     // console.log("after find one ", cart.cartItems.length);     

      let cartItems = await CartItem.find({cart:cart._id}).populate("product");

     // console.log("error after find", cartItems);

      cart.cartItems = cartItems;

      let totalPrice = 0;
      let totalDiscountedPrice = 0;
      let totalItem = 0;

      for (const cartItem of cart.cartItems) {
          totalPrice += cartItem.price;
          totalDiscountedPrice += cartItem.discountedPrice;
          totalItem += cartItem.quantity;
      }

      cart.totalPrice = totalPrice;
      cart.totalDiscountedPrice = totalDiscountedPrice;
      cart.discount = totalPrice - totalDiscountedPrice;
      cart.totalItem = totalItem;


   //   console.log("cart in the finduser cart before return ",cart.cartItems);

      return cart;

    } catch ( error) {
      
      throw new Error(error.message);

    } 
}

async function addCartItem(userId,req) {
  try {

     // console.log("addCartItem.... in backen",req.productId);
      const cart = await Cart.findOne({user:userId});
      const product = await Product.findById(req.productId);

      const isPresent = await CartItem.findOne({cart:cart._id, product:product._id, userId, size:req.size });

      

      if(!isPresent){
         const cartItem = new CartItem({
          product:product._id,
          cart:cart._id,
          quantity:1,
          userId,
          price:product.price,
          size:req.size,
          discountedPrice:product.discountedPrice,
         })

         const createdCartItem = await cartItem.save();
         cart.cartItems.push(createdCartItem);

         await cart.save();
         return "item added to cart";
      }

  } catch (error) {

    throw new Error(error.message);

  }
}

const cartService = {
  createCart,
  findUserCart,
  addCartItem,
};

export default cartService;
