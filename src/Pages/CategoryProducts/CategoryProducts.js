import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductCard from '../Home/Components/Products/ProductCard';

const CategoryProducts = () => {
    const products = useLoaderData();
    const category_id = useParams();
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5030/category/${category_id.id}`)
            .then(response => response.json())
            .then(data => setCategory(data))
    }, [])

    const timeNow = Date().toLocaleString();
    console.log(timeNow);
    return (
        <div class="mb-12 md:mb-14 xl:mb-16  pt-5 md:pt-6 lg:pt-7 pb-5 lg:pb-7 px-4 md:px-5 lg:px-7">
            <div class="flex justify-center items-center flex-wrap mb-5 md:mb-6">
                <div class="flex items-center justify-center -mt-2 mb-0">
                    <h3 class="text-center  font-bold text-heading">{products.length} Products in {category.name} Category</h3>
                </div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:gap-y-6 2xl:gap-y-8">
                {
                    products.map(product => <ProductCard product={product} />)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;