import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { dishes } from '../data/dishesData';

const DishDetail = () => {
  const { dishId } = useParams();
  const dish = dishes.find((d) => d.id === parseInt(dishId, 10));

  if (!dish) {
    return (
      <div className="card dish-detail-card">
        <h2>Dish Not Found</h2>
        <p>No dish found with ID: {dishId}</p>
        <Link to="/" className="back-link">
          &larr; Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="card dish-detail-card">
      <div className="detail-header">
        <Link to="/" className="back-link">
          &larr; Back to Menu
        </Link>
      </div>

      <div className="dish-detail-content">
        <div className="dish-detail-image-box">
          <img src={`/${dish.image}`} alt={dish.name} className="dish-detail-image" />
        </div>

        <div className="dish-detail-info">
          <div className="dish-title-row">
            <h1 className="dish-title">{dish.name}</h1>
            {dish.label && <span className="dish-label-badge">{dish.label}</span>}
          </div>

          <div className="dish-meta">
            <span className="dish-price">${dish.price}</span>
            <span className="dish-category">Category: <strong>{dish.category}</strong></span>
            <span className="dish-id-badge">ID: <strong>{dish.id}</strong></span>
          </div>

          <p className="dish-description">{dish.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
