import React from 'react';

const AirbnbPlusCard = ({country,header,description,picture}) =>{
    return (
        <div className="airbnb-plus-card">
            <img src={picture} alt={country} className="airbnb-plus-card__picture margin-bottom-medium"/>
            <div className="airbnb-plus-card__header header-small">{header}</div>
            <div className="airbnb-plus-card__description text-sub">{description}</div>
        </div>
    )
};

export default AirbnbPlusCard;