import React from 'react';
// import airbnb_plus from '../../img/landing-page/airbnb-plus2.jpg';
import { Link} from 'react-router-dom';

const AirbnbPlusExplore=()=>{
    return (
        <div className="airbnb-plus-explore section-margin">
            <h2 className="airbnb-plus-explore__header header-big margin-bottom-medium">Airbnb Plus places to stay</h2>
            <div className="airbnb-plus-explore__subheader margin-bottom-large"> A selection of places to stay verified for quality and design.</div>
            <div className="airbnb-plus-explore__picture">
                <h1 className = "airbnb-plus-explore__picture__header"> airbnb plus</h1>
                <Link className = "airbnb-plus-explore__picture__button" to={`/roomListing`}> Explore Stays</Link>
            </div>
        </div>
    )
};

export default AirbnbPlusExplore;