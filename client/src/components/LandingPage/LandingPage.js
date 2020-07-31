import React from 'react';
import Header from './1Header';
import ExploreAirbnb from './2ExploreAirbnb';
import AirbnbPlusExplore from './3AirbnbPlusExplore';
import IntroAirbnbAdventures from './4IntroAirbnbAdventures';
import PlacesStayAroundWorld from './5PlacesStayAroundWorld';
import PopularDestinationUS from './6PopularDestinationUS';
import FeaturedAirbnbPlus from './7FeaturedAirbnbPlus';
import StaySuperhost from './8StaySuperhost';
import Footer from '../Footer';


const LandingPage=()=>{
    return (
        <div className="landing-page">
            <Header/>
            <ExploreAirbnb/>
            <AirbnbPlusExplore/>
            <IntroAirbnbAdventures/>
            <PlacesStayAroundWorld/>
            <PopularDestinationUS/>
            <FeaturedAirbnbPlus/>
            <StaySuperhost/>
            <Footer/>
        </div>
    )
};

export default LandingPage;