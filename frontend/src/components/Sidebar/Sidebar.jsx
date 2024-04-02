import React from 'react'
import CloseRounded from '@mui/icons-material/CloseRounded'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const Sidebar = ( {handleSidebar}) => {
  
    const quickLinks = [
        "Men","Women","kid","Beauty"
    ]

  return (
    <div className='z-20 fixed top-0 bottom-0 left-0 py-2 px-1 bg-slate-800 w-[270px] overflow-y-auto shadow-2xl shadow-right shadow-gray-500 duration-300 transform ease-in-out '>
       <div className='text-gray-500 text-xl'>
            <div className='p-2.5 mt-1 flex items-center justify-between'>
                <h1 className='font-bold text-gray-300 text-[15px] ml-3'>ShopHUB</h1>
                <button onClick={handleSidebar} className=''>
                <CloseRounded />
                </button>
            </div>  
            <hr className='border-t-2 border-slate-700 my-2'/>

              <div> 
                  <div className='p-4 text-gray-300 mt-1 flex items-center bg-gray-700'>
                      <ShoppingCartIcon />
                      <h1 className='font-bold text-[15px] ml-3'>Cart</h1>
                  </div>

                  <div className='p-4 mt-1 text-gray-300 flex items-center bg-gray-700'>
                      <FavoriteBorderIcon />
                      <h1 className='font-bold text-[15px] ml-3'>WhishList</h1>
                  </div>
              </div>

            <hr className='border-t-2 border-slate-700 my-2'/>
              {
                  quickLinks.map((link) => (
                      <div className='p-2.5 mt-3 flex items-center justify-between rounded-md px-4 duration-300 cursor-pointer bg-[#4a55682a]'>
                          <h1 className='font-bold text-gray-300 text-[15px] ml-3'>{link}</h1>
                          <ExpandMoreOutlinedIcon/>
                      </div>
                ))
            }

       </div>
    </div>
  )
}

export default Sidebar