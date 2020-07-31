import React from 'react';
// import adventures from '../../img/landing-page/adventures-image.jpg';
// import experiences from '../../img/landing-page/experiences-image.jpg';
// import stays from '../../img/landing-page/stays-image.jpg';
import { Link} from 'react-router-dom';

const ExploreAirbnb=()=>{
    return (
        <div className="explore-airbnb section-margin">
            <h2 className="explore-airbnb__header header-big">
                Explore Airbnb
            </h2>

            <div className="explore-airbnb__cards">
                <Link className="explore-airbnb__cards__card" to={`/roomListing`}>
                    <img src={require('../../img/landing-page/stays-image.jpg')} alt="" className = "explore-airbnb__cards__card__picture"/>
                    <h3 className = "explore-airbnb__cards__card__caption header-medium">Stays</h3>
                </Link>

                <Link className="explore-airbnb__cards__card" to={`/roomListing`}>
                    <img src={require('../../img/landing-page/experiences-image.jpg')} alt="" className = "explore-airbnb__cards__card__picture"/>
                    <h3 className = "explore-airbnb__cards__card__caption header-medium">Experiences</h3>
                </Link>

                <Link className="explore-airbnb__cards__card" to={`/roomListing`}>
                    <img src={require('../../img/landing-page/adventures-image.jpg')} alt="" className = "explore-airbnb__cards__card__picture"/>
                    <h3 className = "explore-airbnb__cards__card__caption header-medium">Adventures</h3>
                </Link>
            </div>

        </div>
    )
};

export default ExploreAirbnb;