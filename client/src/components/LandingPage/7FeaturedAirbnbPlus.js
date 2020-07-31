import React from 'react';
import AirbnbPlusCard from '../AirbnbPlusCard';

const destinations = [
    {
        country: "Cape Town",
        header: "790+ verified stays",
        description: "Find dockside lofts, sunny studios, and more verified places to stay in a city that stuns from sky to sea.",
        picture: require('../../img/landing-page/airbnb-plus/cape_town.PNG')
    },
    {
        country: "Chicago",
        header: "200+ verified stays",
        description: "Explore Chicago's stunning architecture from the inside — in homes verified for quality and design.",
        picture: require('../../img/landing-page/airbnb-plus/chicago.PNG')
    },
    {
        country: "London",
        header: "540+ verified stays",
        description: "Explore London from secluded garden flats and luminous loft — all verified for quality and design.",
        picture: require('../../img/landing-page/airbnb-plus/london.PNG')
    }
];

const renderDestinations = destinations.map(destination =>{
    const {
        country,
        header,
        description,
        picture
    } = destination


    return <AirbnbPlusCard 
        country = {country}
        header = {header}
        description = {description}
        picture = {picture}
        key={country}
    />
})


const FeaturedAirbnbPlus=()=>{
    return (
        <div className="featured-airbnb-plus section-margin">
            <h2 className="header-big margin-bottom-medium">Featured Airbnb Plus destinations</h2>
            <div className="margin-bottom-large">Browse beautiful places to stay with all the comforts of home, plus more.</div>
            <div className="featured-airbnb-plus__cards margin-bottom-large">
                {renderDestinations}
            </div>
            <div className="continue-link ">Show more Airbnb Plus destinations</div>
        </div>
    )
};

export default FeaturedAirbnbPlus;