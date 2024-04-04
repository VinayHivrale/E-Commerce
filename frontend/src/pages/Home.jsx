import React from 'react';
import HomeCarousel from '../components/Carousel/HomeCarousel';
import LandingCards from '../components/LandingCards/LandingCards';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { FashionType } from '../components/FashionCardExplore/FashionType';
import CategoryContainer from '../components/CategoryCard/CategoryContainer';
import Footer from '../components/Footer/Footer.jsx';


const Home = () => {
  return (
    <div className=''>
      <div className='mx-auto w-[95%] h-[550px] shadow-lg'>
        <HomeCarousel />
      </div>
      <FashionType/>
      <div className='px-1 md:px-5 lg:px-20'>
        <div className='flex items-baseline justify-between px-2 pt-10'>
          <p className='text-xl lg:text-5xl font-medium'>Best Selling</p>
          <div className='cursor-pointer'>
            <a className='text-base lg:text-2xl' href="">See All </a>
            <NorthEastIcon className='mb-2' />
          </div>
        </div>
        <hr className='border mt-3 border-black mx-2' />
        <div className='relative grid justify-center items-center'>
          <div id='slider' className='space-x-10 lg:space-x-20 w-full h-auto overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            <LandingCards />
            <LandingCards />
            <LandingCards />
            <LandingCards />
          </div>
        </div>
      </div>
      <CategoryContainer/>
      <div>
       <Footer />
      </div>
    </div>
  )
}

export default Home;