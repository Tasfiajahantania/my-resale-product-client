import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5030/all/products')
            .then(res => res.json())
            .then(res => setProducts(res));

    }, []);
    return (
        <div className='mx-12'>
            <div class="text-center p-10">
                <h1 class="text-xl">All Product</h1>
            </div>
            <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14">
                {
                    products.map(product => <ProductCard product={product} />)
                }
            </section>
        </div>
    );
};

export default Products;