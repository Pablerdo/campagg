import React from 'react';
import './Card.css'

function Card({ src, title, description, price, duration }) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h3>{title}</h3>
                <h4>{description}</h4>
                <div className='flexbox-container'>
                    {price && <h2>${price}</h2>}
                    <h3 className='card__duration'>{duration}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card