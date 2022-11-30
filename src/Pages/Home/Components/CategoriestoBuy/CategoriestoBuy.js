import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import './CategoriestoBuy.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
const CategoriestoBuy = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://server-side-ashen.vercel.app/all/categories')
            .then(res => res.json())
            .then(res => setCategories(res));
    }, [])
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
            autoplay={{ delay: 1500 }}
            spaceBetween={50}
            slidesPerView={3}
            scrollbar={{ draggable: true }}
        >
            {
                categories.map(category => <SwiperSlide>
                    <CategoryCard key={category._id} category={category} />
                </SwiperSlide>)
            }
        </Swiper>
    );
};
export default CategoriestoBuy;
