import React, { useEffect } from "react";
import AddressCard from "./AddressCard";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../redux/actions/orderActions";
import Cart from "../Cart/Cart";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  const handlecheckout = async () => {
    const items = [
      { name: 'Product 1', price: 5000, quantity: 1 },
      { name: 'Product 2', price: 3000, quantity: 2 },
    ];

    const customer = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      address: '123 Main St, Mumbai, India',
    };

    const response = await axios.post('http://localhost:5454/checkout', { items, customer });
    window.location.href = response.data.url;
  };


  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  return (
    <div className="px-20">
      <div className="p-5 shadow-md">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div className="grid grid-cols-5 gap-2 mt-5">
        <div className="col-span-3">
          {order.order?.orderItems.map((item, index) => (
            <Cart item={item} key={index} />
          ))}
        </div>
        <div className="col-span-2">
          <div className="">
            <div className="bg-[#fff] p-4 shadow-md">
              <h2 className="text-lg font-bold mb-2 xs:mb-4">Price Details</h2>

              <div className="flex text-sm md:text-base justify-between mb-2">
                <p>Price (item {order.order?.totalItem})</p>
                <p>₹{order.order?.totalPrice}</p>
              </div>
              <div className="flex text-sm md:text-base  justify-between mb-2">
                <p>Discount</p>
                <p>-₹{order.order?.discount}</p>
              </div>
              <div className="flex text-sm md:text-base  justify-between mb-2">
                <p>Delivery Charges</p>
                <p>Free</p>
              </div>
              <hr className="border-t border-blue-950 mb-4" />

              <div className="flex text-sm md:text-base font-semibold justify-between ">
                <p>Total Amount:</p>
                <p>₹{order.order?.totalDiscountedPrice}</p>
              </div>
              <div className="mt-6">
                <button className="w-full bg-gray-600 text-white text-lg font-semibold py-2 rounded" onClick={handlecheckout}>
                  checkout
                </button>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <Link to="/">
                    <button
                      type="button"
                      className="ml-1 font-medium text-gray-400 hover:text-gray-600"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
