import React from 'react';
import PlacesCards from '../PlacesCard';
// import montenegro from '../../img/landing-page/places-stay/Montenegro.jpg';
// import belarus from '../../img/landing-page/places-stay/Belarus.jpg';
// import portugal from '../../img/landing-page/places-stay/Portugal.jpg';
// import south_africa from '../../img/landing-page/places-stay/South_Africa.jpg';
// import spain from '../../img/landing-page/places-stay/Spain.jpg';
// import greece from '../../img/landing-page/places-stay/Greece.jpg';
// import united_states from '../../img/landing-page/places-stay/United_States.jpg';
// import cuba from '../../img/landing-page/places-stay/Cuba.jpg';

//<img src = {require('../img/landing-page/places-stay/Montenegro.jpg')} alt={country} className = "places-card__img margin-bottom-picture"/>
const countries = [
    {
        country: "Montenegro",
        description: "Waterfront with extraordinary view",
        picture: `landing-page/places-stay/Montenegro.jpg`,
        pricing: "$67",
        rating:"4.81",
        superhost: "superhost"
    },
    {
        country: "Belarus",
        description: "Minsk Belarus Studio in historical center",
        picture: `landing-page/places-stay/Belarus.jpg`,
        pricing: "$32",
        rating:"4.80",
        superhost: "superhost"
    },
    {
        country: "Portugal",
        description: "Clérigos Room | Historic Centre",
        picture: 'landing-page/places-stay/Portugal.jpg',
        pricing: "$39",
        rating:"4.67",
        superhost: "superhost"
    },
    {
        country: "South Africa",
        description: "City Penthouse in Central Cape Town",
        picture: 'landing-page/places-stay/South_Africa.jpg',
        pricing: "$137",
        rating:"4.80",
        superhost: "superhost"
    },
    {
        country: "Spain",
        description: "Romantic 1 bed with stunning views",
        picture: 'landing-page/places-stay/Spain.jpg',
        pricing: "$119",
        rating:"4.94",
        superhost: "superhost"
    },
    {
        country: "Greece",
        description: "Unique Architecture Cave House",
        picture: 'landing-page/places-stay/Greece.jpg',
        pricing: "$433",
        rating:"4.94",
        superhost: "superhost"
    },
    {
        country: "United States",
        description: "Super Cute Retro Airstream",
        picture: 'landing-page/places-stay/United_States.jpg',
        pricing: "$140",
        rating:"4.93",
        superhost: "superhost"
    },
    {
        country: "Cuba",
        description: "La Rosa de Ortega / Standard Room",
        picture: 'landing-page/places-stay/Cuba.jpg',
        pricing: "$70",
        rating:"4.94",
        superhost: "superhost"
    }
];

const renderPlacesCard = countries.map(xcountry =>{
    const{
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
        key = {country} 
    />
})



const PlacesStayAroundWorld=()=>{
    return (
        <div className="places-stay-around-world section-margin">
           <h2 className="header-big margin-bottom-large">Places to stay around the world</h2>
           <div className="place-cards-section margin-bottom-large">
             {renderPlacesCard}
           </div>
           <div className="continue-link ">Show (2000+)</div>
        </div>
    )
};

export default PlacesStayAroundWorld;

