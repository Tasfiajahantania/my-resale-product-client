import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import banner1 from '../../../../assets/images/banner/banner1.png';
import banner2 from '../../../../assets/images/banner/banner2.png';
const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }} autoplay={{ delay: 1500 }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={banner1} alt="banner" className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} alt="banner" className="w-full" />
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Banner;