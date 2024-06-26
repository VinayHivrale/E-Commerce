import orderService from "../services/order.service.js";

const createOrder = async (req, res) => {
    const user = req.user;
    try {
        let createdOrder = await orderService.createOrder(user, req.body);
        console.log("created order ", createdOrder);
        return res.status(201).send(createdOrder);
    } catch (error) {
        console.log("Error in creating order:", error); 
        return res.status(500).send({ error:error.message });
    }
}

const findOrderById = async (req,res) => {
    const user = req.user;
    console.log(" in findOrderById in controller", req.params.id);
    try {
        let createdOrder = await orderService.findOrderById(req.params.id);
        return res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const orderHistory = async (req,res) => {
    const user = req.user;
    try {
        let createdOrder = await orderService.usersOrderHistory(user._id);
        return res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const orderController = {
    createOrder,
    findOrderById,
    orderHistory
};

export default orderController;