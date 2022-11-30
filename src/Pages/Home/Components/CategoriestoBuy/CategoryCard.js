import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
    const { _id, name, icon } = category;
    return (
        <Link to={`/categroy/${_id}`} className="card bg-base-100 category-card">
            <figure className="px-10 pt-5">
                <img src={icon} alt={name} />
            </figure>
            <div className="card-body items-center text-center">
                <h5 className="text-sm font-semibold">{name}</h5>
            </div>
        </Link>
    );
};

export default CategoryCard;