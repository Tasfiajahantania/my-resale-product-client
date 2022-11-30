import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { AiFillCheckCircle } from "react-icons/ai";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import moment from 'moment/moment';
import { FiShoppingCart } from "react-icons/fi";
import avatar from '../../../../assets/images/images/avatar.png';

const ProductCard = ({ product }) => {
    const { _id, title, img, seller, sell_price, created_at, original_price, location } = product;
    return (
        <div>
            <div className="rounded-md card-fit text-black">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src={avatar} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none flex justify-center items-center">{seller}  <AiFillCheckCircle className='ml-1 text-blue-500' /></h2>
                            <span className="inline-block text-xs leading-none dark:text-gray-400">{moment(created_at).fromNow()}</span>
                        </div>
                    </div>
                </div>
                <img src={img} alt="" className="object-contain object-center w-full h-60 product-image-soft" />
                <div className="p-3">
                    <div className="flex flex-wrap items-center pt-3 pb-1">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm">
                                {title}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm">
                            Location:  {location}
                        </span>
                    </div>
                    <div>
                        <div className="space-y-3 flex justify-between items-center">
                            <div>
                                <p className="text-sm">
                                    <span className="text-base font-semibold">Original-price: ${original_price}</span></p>
                                <p>
                                    <span className="text-base font-semibold">Sell-price: ${sell_price}</span>
                                </p>
                            </div>

                            <Link to={`/product/${_id}`} className="btn btn-sm btn-primary mb-2"><FiShoppingCart className='mr-1' /> BUY</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="card-fit group box-border overflow-hidden flex rounded-md cursor-pointer  bg-white pe-0 md:pb-1 flex-col items-start">
                <div class="flex mb-3 md:mb-3.5 pb-0">
                    <span className='img-box'>
                        <span className='thumb'>
                            <img alt="" aria-hidden="true" className='image-view' src={img} />
                        </span>
                    </span>
                    <div class="absolute top-3.5 md:top-5 3xl:top-7 start-3.5 md:start-5 3xl:start-7 flex flex-col gap-y-1 items-start">
                    </div>
                </div>
                <div class="w-full overflow-hidden p-2 ps-0">

                    <h2 class="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">{title}</h2>
                    <p class="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">Men Black top sleeveless gown</p>
                    <div class="relative font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
           text-heading">
                        <div className='flex items-center text-sm'>
                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src="https://pixer-shop.vercel.app/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F199%2Fconversions%2FGroup-14403-thumbnail.jpg&w=1920&q=100" alt='#' />
                                </div>
                            </div>  <span className='ml-1'>{seller}</span> <AiFillCheckCircle className='ml-1 text-blue-500' />
                        </div>
                        <div>
                            <span class="inline-block false">$45.00</span>
                            <del class="sm:text-base font-normal text-gray-800">$99.99</del>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ProductCard;