import orderService from "../services/order.service.js";
const createPaymentLink = async(orderId)=>{
    try {
        const order = await orderService.findOrderById(orderId);
    } catch (error) {
        
    }
}