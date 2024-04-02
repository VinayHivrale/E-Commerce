import React from 'react'
import OrderCard from '../components/Order/OrderCard';

const orderStatus = ["On the Way", "Dilivered", "Cancelled", "Returned"];

const OrderPage = () => {
    return (
        <div class='grid grid-cols-6 justify-between gap-x-2 gap-y-2 p-5'>
            <div class='col-span-6 lg:col-span-1 bg-gray-700 h-fit p-5 rounded-lg'>
                <p class='text-white font-bold'>Filter</p>
                <p class='text-white text-lg font-semibold my-3'>Order status</p>
                <div className='space-y-2'>
                    {
                        orderStatus.map((status, index) => (
                            <div key={index} class='flex items-center'>
                                <input type="checkbox" name={`${status}`} id={`${status}`} class="size-4 text-black focus:border-0 focus:ring-0 focus:outline-none" />
                                <label class="ml-2 text-sm text-white" htmlFor={`${status}`}>{status}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='col-span-6 space-y-2 lg:col-span-5 h-[400px]'>
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
        </div>

    )
}

export default OrderPage