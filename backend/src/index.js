import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Stripe from "stripe";
import authRouters from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import reviewRouter from "./routes/review.route.js";
import ratingRouter from "./routes/rating.route.js";
import productRouter from "./routes/product.router.js";
import adminOrderRouter from "./routes/adminOrder.route.js";
import adminProductRouter from "./routes/adminProduct.route.js";
import cartRouter from "./routes/cart.route.js";
import cartItemRouter from "./routes/cartItem.route.js";
import orderRouter from "./routes/order.route.js";

import dotenv from 'dotenv';
dotenv.config();



const app = express();

app.use(express.json());
app.use(cors());

const stripe = new Stripe(process.env.SECRET_STRIPE_KEY);

app.get("/", (req,res) => {
    return res.status(200).send({message:"welcome to ecommerce api",status:true});
});

app.use("/auth",authRouters);
app.use("/api/users",userRouter);  
app.use("/api/products",productRouter);
app.use("/api/admin/products",adminProductRouter);
app.use("/api/cart",cartRouter);
app.use("/api/cart_items",cartItemRouter);
app.use("/api/orders",orderRouter);
app.use("/api/reviews",reviewRouter);
app.use("/api/ratings",ratingRouter);
app.use("/api/admin/orders",adminOrderRouter);

app.post('/checkout', async (req, res) => {
    const { items, customer } = req.body;
  
    const YOUR_DOMAIN = 'http://localhost:5173';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });
  
    res.json({ url: session.url });
  });
  


export {app};