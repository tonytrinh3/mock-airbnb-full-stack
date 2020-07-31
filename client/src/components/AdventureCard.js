import React from 'react';


//props.picture but you can do this due to destructuring
const AdventureCard=({picture,country,description,pricing,rating})=>{
    return (
        <div className="adventure-card">
            <img src={picture} alt={country} className="adventure-card__picture margin-bottom-picture"/>
            <h3 className="adventure-card__header header-small margin-bottom-medium">{country}</h3>
            <div className="adventure-card__description margin-bottom-medium">{description}</div>
            <div className="adventure-card__pricing margin-bottom-medium">{pricing}</div>
            <div className="adventure-card__rating rating-font">{rating} </div>
        </div>
    )
};

export default AdventureCard;


