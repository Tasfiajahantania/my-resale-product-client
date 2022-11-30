import React, { useState } from 'react';
import './MyProductCard.css';
import { AiFillCheckCircle } from "react-icons/ai";
import moment from 'moment';

const MyProductCard = ({ product, setDeletingProduct }) => {

    const { _id, title, img, seller, created_at } = product;
    return (
        <div>
            <div className="rounded-md card-fit text-black">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src={img} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
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
                    <div>
                        <div className="space-y-3">
                            <p className="text-sm">
                                <span className="text-base font-bold">$500</span></p>
                        </div>
                        <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;