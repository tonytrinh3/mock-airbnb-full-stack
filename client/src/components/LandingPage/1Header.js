import React from 'react';
import Navigation from '../Navigation';
import LandingForm from './1.1LandingForm';

const Header=()=>{
    return (
        <header className="header">
            {/* <Navigation/> */}
            <LandingForm/>
            <div className="header__caption">Over 300 unique places <br/> to stay in San Francisco</div>
        </header>
    )
};

export default Header;