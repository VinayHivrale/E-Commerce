import React from 'react'
import "./LandingCard.css";

const LandingCards = () => {
  return (
    <div className='card inline-block relative my-5 w-[16.5rem] h-[420px] rounded-xl sm:h-[400px] bg-slate-400 400:w-[17rem] shadow-inner 400:h-[440px] sm:w-[16rem] hover:'>
      <div className='w-full h-full'>
        <img className=' hover:sepia object-cover object-left-top w-full h-full rounded-xl' src="https://i.pinimg.com/236x/41/68/01/416801f5305ac0a4b9e08bc39df32fdf.jpg" alt="" />
      </div>
      <div className='absolute left-4 bottom-4 text-left'>
        <p className='text-2xl text-white font-bold'>Mens Suits</p>
        <button
          className=" text-gray-100 border-2 font-[500] border-white py-2 px-4 rounded-full hover:shadow-md  focus:outline-none mt-2"
          onClick={()=>{}}
        >
          Shop Now
        </button>
      </div>  
    </div>
  )
}

export default LandingCards