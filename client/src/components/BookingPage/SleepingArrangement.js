import React from 'react';
import sleepingArrangement from "../../img/booking-page/listing-1/sleeping-arrangement.PNG";

const SleepingArrangement = () =>{
    return (
        <div className="sleeping-arrangement">
            <h3 className = "header-small margin-bottom-medium">Sleeping arrangements</h3>
            <img className="sleeping-arrangement__img" src={sleepingArrangement} alt="sleeping-arrangement"/>
            </div>
    )
}

export default SleepingArrangement;