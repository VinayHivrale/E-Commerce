import { Address } from "../models/address.model.js";
import cartService from "../services/cart.service.js";
import { orderItems } from "../models/orderItems.js";
import { Order } from "../models/order.model.js";


async function createOrder(user, shippAddress) {
  let address;
  console.log("hello");
  if (shippAddress._id) {
    let existAddress = await Address.findById(shippAddress._id);
    address = existAddress;
  } else {
    address = new Address(shippAddress);
    address.user = user._id;
    await address.save();

    user.address.push(address);
    await user.save();
  }

  const cart = await cartService.findUserCart(user._id);
  const orderItemse = [];

  for (const item of cart.cartItems) {
    const orderItem = new orderItems({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });

    const createOrderItem = await orderItem.save();
    orderItemse.push(createOrderItem);
  }

  const createdOrder = new Order({
    user,
    orderItems:orderItemse,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discount: cart.discount,
    totalItem: cart.totalItem,
    shippingAddress: address,
  });

  const savedOrder = await createdOrder.save();
  console.log("saveOrder");
  return savedOrder;
}

async function placeOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";

  return await order.save();
}

async function confirmedOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CONFIRMED";

  return await order.save();
}

async function shipOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "SHIPPED";

  return await order.save();
}

async function deliverOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "DELIVERED";

  return await order.save();
}

async function cancelledOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CANCALLED";

  return await order.save();
}

async function findOrderById(orderId) {
  console.log("reaching up to find orderBy id")
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");
    
  return order;
}

async function usersOrderHistory(userId) {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();

    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllOrders() {
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
}

async function deleteOrder(orderId){
     const order = await findOrderById(orderId);
     await Order.findByIdAndDelete(order._id);
}

const orderService = {
  createOrder,
  placeOrder,
  findOrderById,
  confirmedOrder,
  shipOrder,
  deliverOrder,
  deleteOrder,
  getAllOrders,
  cancelledOrder,
  usersOrderHistory,
}

export default orderService

