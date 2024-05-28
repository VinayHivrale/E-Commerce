import React, { useEffect } from 'react';
import Cart from '../components/Cart/Cart';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux" ;
import { getCart } from '../redux/actions/cartActions';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((store) => store);

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  }
  
  useEffect(()=>{
    console.log("calling the get cart ..... ");
    dispatch(getCart());
  },[cart.deleteCartItem,cart.updateCartItem]) 

  return (
    <div className=" px-2 md:px-10 font-sans">
      <div className="lg:flex mt-10">
        <div className="w-full h-[85vh] overflow-y-scroll scroll-auto mr-5">
          {cart.cart?.cartItems.map((item, index) => (
            <Cart key={index} item={item} />
          ))}
        </div>
        <div className="float-end lg:float-none w-full h-fit md:w-[50%]">
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-4">Price Details</h2>
            <div className="flex justify-between mb-2">
              <p>Price (Items {cart.cart?.totalItem})</p>
              <p>₹{cart.cart?.totalPrice}</p> 
            </div>
            <div className="flex justify-between mb-2">
              <p>Discount</p>
              <p>-₹{cart.cart?.discount}</p> 
            </div>
            <div className="flex justify-between mb-2">
              <p>Delivery Charges</p>
              <p>Free</p> 
            </div>
            <hr className="border-t border-gray-300 mb-4" />
            <div className="flex justify-between font-semibold">
              <p>Total Amount:</p>
              <p>₹{cart.cart?.totalDiscountedPrice}</p> 
            </div>
            <div className="mt-6">
              <button onClick={handleCheckout} className="w-full bg-gray-600 text-white text-lg font-semibold py-2 rounded">
                checkout
              </button>
            </div>
            <div className="mt-6 flex justify-center text-sm text-gray-500">
              <p>or</p>
              <Link to="/">
                <button className="ml-1 font-semibold text-gray-500 hover:text-gray-800">
                  Continue Shopping <span aria-hidden="true">&rarr;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
