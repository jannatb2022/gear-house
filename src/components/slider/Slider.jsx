import React from 'react';
import './Slider.css'

import {Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'



const Slider = () => {

    
  return (
    <>

        <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=' relative w-full overflow-hidden '>
          <div className='relative carousel-item'>
            <img src={slide1} />
            <div className='absolute text-center '>
            <h5 className="text-xl md:text-6xl font-bold text-white">Welcome to <span className="text-primary">Gear House</span></h5>
                            <p className="text-sm md:text-xl text-white">We have a great collection og Bikes that are takes as dealership and delivered with proper maintenance</p>
                            <button href="/" className="btn py-2 px-6 bg-indigo-600 text-white font-semibold rounded-full my-2 hover:bg-blue-600 duration-200">Inventories</button>
            </div>

          </div>

          
        </SwiperSlide>
        <SwiperSlide>
          <div className='carousel-item relative float-left w-full' >
            <img src={slide2}/>

            <div className="carousel-caption absolute text-center ">
                            <h5 className="text-xl md:text-6xl font-bold text-white">TSK 950CC Two Disk</h5>
                            <p className="text-sm md:text-xl text-white">Strong engine options, including a plug-in hybrid
                                greenStandard adaptive air suspension delivers a comfortable</p>
                            <button href="/" className="btn py-2 px-6 bg-indigo-600 text-white font-semibold rounded-full my-2 hover:bg-blue-600 duration-200">Inventories</button>
                        </div>
          </div>
          
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Slider