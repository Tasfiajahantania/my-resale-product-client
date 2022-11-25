import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://assets.swap.com.bd/slider-images/fe9fc289c3ff0af142b6d3bead98a923/default/1iBnINB2lHYcORjfLVVHEWvln8DlCWF4BGNKkU2b.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://assets.swap.com.bd/slider-images/68d30a9594728bc39aa24be94b319d21/default/Y2Auhtg1KwX5K1yfn9uEV81Y1bSb3gr3CPGrUCmP.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;