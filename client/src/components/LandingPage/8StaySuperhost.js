import React from 'react';

import PlacesCards from '../PlacesCard';
// import mexico from '../../img/landing-page/superhost/mexico.PNG';
// import indonesia from '../../img/landing-page/superhost/indonesia.PNG';
// import colombia from '../../img/landing-page/superhost/colombia.PNG';
// import united_states from '../../img/landing-page/superhost/united_states.PNG';
// import united_states2 from '../../img/landing-page/superhost/united_states2.PNG';
// import united_states3 from '../../img/landing-page/superhost/united_states3.PNG';
// import united_kingdom from '../../img/landing-page/superhost/united_kingdom.PNG';
// import iceland from '../../img/landing-page/superhost/iceland.PNG';


const countries = [
    {
        country: "Mexico",
        description: "The World Famous Seashell House ~ Casa Caracol",
        picture: 'landing-page/superhost/mexico.PNG',
        pricing: "$299",
        rating:"4.75",
        superhost: "superhost"
    },
    {
        country: "Indonesia",
        description: "HIDEOUT BALI - Eco Bamboo Home",
        picture: 'landing-page/superhost/indonesia.PNG',
        pricing: "$75",
        rating:"4.82",
        superhost: "superhost"
    },
    {
        country: "Colombia",
        description: "Romantic Cabana with view",
        picture: 'landing-page/superhost/colombia.PNG',
        pricing: "$40",
        rating:"4.93",
        superhost: "superhost"
    },
    {
        country: "United States",
        description: "The Joshua Tree House",
        picture: 'landing-page/superhost/united_states.PNG',
        pricing: "$300",
        rating:"4.88",
        superhost: "superhost"
    },
    {
        country: "United States",
        description: "The Mushroom Dome Retreat & LAND of Paradise Suite",
        picture: 'landing-page/superhost/united_states2.PNG',
        pricing: "$130",
        rating:"4.86",
        superhost: "superhost"
    },
    {
        country: "United States",
        description: "Underground Hygge",
        picture: 'landing-page/superhost/united_states3.PNG',
        pricing: "$400",
        rating:"4.85",
        superhost: "superhost"
    },
    {
        country: "United Kingdom",
        description: "Live in an historic English Castle!",
        picture: 'landing-page/superhost/united_kingdom.PNG',
        pricing: "$256",
        rating:"4.96",
        superhost: "superhost"
    },
    {
        country: "Iceland",
        description: "Amazing view - Moderne apartment",
        picture: 'landing-page/superhost/iceland.PNG',
        pricing: "$151",
        rating:"4.76",
        superhost: "superhost"
    }
];


const renderPlacesCard = countries.map(xcountry =>{

    const {
        country,
        description,
        picture,
        pricing,
        rating,
        superhost
    } = xcountry;

    return <PlacesCards 
        country = {country}
        description = {description}
        picture = {picture} 
        pricing = {pricing} 
        rating = {rating}
        superhost = {superhost}
        key = {description} 
    />
})

const StaySuperhost=()=>{
    return (
        <div className="stay-superhost section-margin">
           <h2 className="header-big margin-bottom-large">Places to stay around the world</h2>
           <div className="place-cards-section margin-bottom-large">
             {renderPlacesCard}
           </div>
           <div className="continue-link ">Show (2000+)</div>
        </div>
    )
};

export default StaySuperhost;









