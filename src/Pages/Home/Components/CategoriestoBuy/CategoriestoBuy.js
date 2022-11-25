import React, { useEffect, useState } from 'react';
import './CategoriestoBuy.css';
import CategoryCard from './CategoryCard';

const CategoriestoBuy = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5030/all/categories')
            .then(res => res.json())
            .then(res => setCategories(res));
    }, [])

    return (
        <section className="mt-20 w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14">
            {
                categories.map(category => <CategoryCard category={category} />)
            }
        </section>
    );
};

export default CategoriestoBuy;