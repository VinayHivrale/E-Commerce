import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const product = {
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRwNQ6jiZ45uCXbPNiAe8jKqh_yeHDYp_3Igil7-l4aq8zfxQ2tqsaHWPgqMXVJkFCPvBnfCj3Y8K3T1quL7CIfz6Bte_t5PXL3YCI4xGs&usqp=CAE',
    rating: 4.3,
    reviews: 38,
    brand: 'Levis',
    description: 'Pure Cotten Printed T-shirt',
    price: 500,
    oldPrice: 999,
    discount: '50%',
};

const ProductCard = ({product}) => {

    return (
        <div className='cursor-pointer mx-auto flex flex-col items-center shadow-md hover:shadow-lg hover:scale-105 duration-500 bg-white rounded-xs overflow-hidden w-[14rem] relative mb-5'>
            <div className='h-[17rem] w-[14rem]'>
                <img className='object-cover object-top w-full h-full ' src={product.imageUrl} alt='' />
            </div>
            <p className='text-xs absolute bg-white rounded-md bg-opacity-85 px-1 top-[15.4rem] left-[0.7rem]'>
                <span className="opacity-100">4.3</span> <StarIcon style={{ fontSize: '16px' }} className='text-[#00A88E] mb-1'></StarIcon> | 38
            </p>
            <div className='p-2 w-full'>
                <p className='text-base font-semibold text-gray-900 '>Levis</p>
                <p className='mt-2 text-sm text-gray-500'>Pure Cotten Printed T-shirt</p>
                <p className='mt-2 text-sm font-[500] text-gray-900'>Rs.719 <span className='line-through text-gray-300'>Rs.1199</span> <span className='text-[#50d71e]'>(40% OFF)</span></p>
            </div>
        </div>
    )
}

export default ProductCard;