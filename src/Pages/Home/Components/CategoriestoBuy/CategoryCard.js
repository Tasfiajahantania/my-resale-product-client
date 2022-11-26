import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
    const { name, icon } = category;
    return (
        <div className="card bg-base-200 category-card duration-500 hover:scale-105 hover:shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt={name} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default CategoryCard;