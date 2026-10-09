import React from 'react';
import { Link } from 'react-router-dom';
import { dishes } from '../data/dishesData';

const DishesList = () => {
  return (
    <div className="dishes-container">
      <div className="breadcrumb-nav">
        <span className="breadcrumb-item">Home</span>
      </div>

      <div className="dishes-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <Link to={`/dishes/${dish.id}`} className="dish-card-image-link">
              <img
                src={`/${dish.image}`}
                alt={dish.name}
                className="dish-thumbnail"
              />
            </Link>
            <div className="dish-card-body">
              <Link to={`/dishes/${dish.id}`} className="dish-name-link">
                {dish.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishesList;
