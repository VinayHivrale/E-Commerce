import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./cart.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {useDispatch} from "react-redux"
import { getCart, removeCartItem, updateCartItem } from '../../redux/actions/cartActions';

const Cart = ({ item }) => {
  const dispatch = useDispatch();
  
  const handleUpdateCartItem = (num) => {
    const data = {
      data:{quantity:item.quantity+num},
      cartItemId:item?._id
    }
    console.log(item._id);
     dispatch(updateCartItem(data))
  }

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item._id))
    dispatch(getCart());
  }
  

  return (
    <div className="h-auto p-5 bg-white cart relative shadow-md w-full mb-5  rounded-lg border border-gray-200">
      <div onClick={handleRemoveCartItem} className="absolute top-1 right-3 cursor-pointer text-gray-500 hover:text-gray-800">
        <CloseRoundedIcon />
      </div>

      <div className="flex">
        <img
          className="w-[150px] h-[150px] object-cover object-top mr-4"
          src={`${item.product?.imageUrl}`}
          alt="Product"
        />
        <div className="flex flex-col justify-between w-full">
          <div>
            <p className="font-semibold text-lg text-gray-800">
              {item.product?.title}
            </p>
            <p className="text-sm text-gray-600">
              {item.product?.brand} | {item.product?.color} | {item.size}
            </p>
          </div>

          <div className="flex  items-center mt-2">
            <button type="button" disabled={item.quantity<=1} onClick={()=>handleUpdateCartItem(-1)}  className="focus:outline-none bg-gray-200 rounded-md p-2">
              <RemoveIcon className="w-4 h-4 text-gray-700" />
            </button>
            <div className="text-lg font-semibold text-gray-700 mx-3">{item.quantity}</div>
            <button type="button" onClick={()=>handleUpdateCartItem(1)} className="focus:outline-none bg-gray-200 rounded-md p-2">
              <AddIcon className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          <p className="mt-1 text-sm font-semibold text-gray-700">
            Rs.{item.product?.discountedPrice}{" "}
            <span className="line-through text-gray-400">
              Rs.{item.product?.price}
            </span>{" "}
            <span className="text-green-500">
              ({item.product?.discountPercent}% OFF)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
