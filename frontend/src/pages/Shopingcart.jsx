import React from 'react';
import Cart from '../components/Cart/Cart';
import { Link } from 'react-router-dom';


const ShoppingCart = () => {
  

  return (
    <div className='mb-[400px] px-2 md:px-10 font-[sans-serif]'>
       <div className='mb-7'>
        <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} className='text-3xl md:text-5xl font-bold'>cart</h1>
      </div>
    <div className='lg:flex h-auto'>
      <div className='w-full mr-5'>
        <Cart />
        <Cart />
      </div>
      <div className='float-end  lg:float-none w-full h-fit md:w-[50%]'>
        <div className='bg-[#fcf6f5ff] p-4 shadow-md'>
          <h2 className='text-lg font-bold mb-2 xs:mb-4'>Price Details</h2>


          <div className='flex text-sm md:text-base justify-between mb-2'>
            <p>Price (item 3)</p>
            <p>₹4697</p> 
          </div>
          <div className='flex text-sm md:text-base  justify-between mb-2'>
            <p>Discount)</p>
            <p>-₹2697</p> 
          </div>
          <div className='flex text-sm md:text-base  justify-between mb-2'>
            <p>Delivery Charges</p>
            <p>Free</p> 
          </div>
          <hr className='border-t border-blue-950 mb-4' />
  
          <div className='flex text-sm md:text-base font-semibold justify-between '>
            <p>Total Amount:</p>
            <p>₹5998</p> 
          </div>
          <div className='mt-6'>
            <button className='w-full text-sm md:text-lg bg-[#2F3C7E] font-semibold text-white px-3 py-1 rounded'>
              CheckOut
            </button>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <Link to="/">
                  <button
                    type="button"
                    className="ml-1 font-medium text-[#2F3C7E] hover:text-indigo-500"
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
    
  );
};

export default ShoppingCart;
