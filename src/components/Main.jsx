import React from 'react'
import banner1 from '../assets/images/banner/bannerImgOne.webp'
import banner2 from '../assets/images/banner/bannerImgThree.webp'
import banner3 from '../assets/images/banner/bannerImgTwo.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Main = () => {

    const images = [banner1,banner2,banner3];

    return (
        <div className='max-w-full'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    images.map((image)=>(
                        <SwiperSlide>
                            <img src={image} className='w-full' alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Main