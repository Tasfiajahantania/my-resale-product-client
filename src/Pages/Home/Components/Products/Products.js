import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {

        axios.get('https://server-side-ashen.vercel.app/all/products').then((response) => {
            setProducts(response.data)
            setLoader(false);
        });

    }, []);
    return (
        <div>
            {
                loader && <div className="flex justify-center items-center data-loader">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                </div>
            }

            {
                !loader && <div div class="mb-12 md:mb-14 xl:mb-16 rounded-md pt-5 md:pt-6 lg:pt-7 pb-5 lg:pb-7 px-4" >
                    <div class="flex justify-center items-center flex-wrap mb-5 md:mb-6">
                        <div class="flex items-center justify-center -mt-2 mb-0">
                            <h3 class="text-center  font-bold text-heading text-3xl">All Product</h3>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:gap-y-6 2xl:gap-y-8">
                        {
                            products.map(product => <ProductCard key={product._id} product={product} />)
                        }
                    </div>
                </div >
            }
        </div>
    );
};

export default Products;