import React from 'react';
import AdventureCard from '../AdventureCard';


// const countries = [canada, russia, us, madagascar,india ];

const countries = [
    {
        country: "Canada",
        description: "Bioluminescent Overnight Yachtstay",
        picture: require('../../img/landing-page/airbnb-adventures/canada-adventure.jpg'),
        pricing: "From $150/person · 2 days",
        rating:"4.76 (55)"
    },
    {
        country: "Russian Federation",
        description: "Окунитесь в настоящую сельскую жизнь",
        picture: require('../../img/landing-page/airbnb-adventures/russia-adventure.jpeg'),
        pricing: "From $88/person · 2 days",
        rating:"4.50 (67)"
    },
    {
        country: "United States",
        description: "Up North: Kayaking, Glamping, and FUN",
        picture: require('../../img/landing-page/airbnb-adventures/us-adventure.jpg'),
        pricing: "From $365/person · 3 days",
        rating:"4.80 (452)"
    },
    {
        country: "Madagascar",
        description: "Nature Photography in Madagascar",
        picture: require('../../img/landing-page/airbnb-adventures/madagascar-adventure.jpeg'),
        pricing: "From $7,310/person · 14 days",
        rating:"4.88 (49)"
    },
    {
        country: "India",
        description: "Food & Faith in Southwestern India",
        picture: require('../../img/landing-page/airbnb-adventures/india-adventure.jpeg'),
        pricing: "From $5,225/person · 10 days",
        rating: `4.90 (80)`
    },

]

// const renderAdventureCard = (countries) =>{
//     countries.map(country=>{
//         return <AdventureCard picture = {country}/>
//     })
// };

const renderAdventureCard = countries.map(xcountry=>{
    const {
        country,
        description,
        picture,
        pricing,
        rating
    } = xcountry;



        return <AdventureCard 
            country = {country}
            description = {description}
            picture = {picture} 
            pricing = {pricing} 
            rating = {rating}
            key = {country} 
        />
});

const IntroAirbnbAdventures=()=>{

    return (
        <div className="intro-airbnb-adventures section-margin">
            <h2 className="header-big margin-bottom-medium">Introducing Airbnb Adventures</h2>
            <div className=" margin-bottom-large">Multi-day trips led by local experts — activities, meals, and stays included.</div>
            <div className="adventure-card-section margin-bottom-large">
                {renderAdventureCard}
            </div>
            <div className="continue-link ">Show all adventures</div>
        </div>
    )
};

export default IntroAirbnbAdventures;