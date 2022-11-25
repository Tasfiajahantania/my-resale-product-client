import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
    const { name, icon } = category;
    return (
        <div className="card bg-base-100 category-card">
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