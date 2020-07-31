import React from 'react';

const states = [
    {
        state:"San Francisco",
        pricing:"$216"
    },
    {
        state:"Los Angeles",
        pricing:"$213"
    },
    {
        state:"New York",
        pricing:"$159"
    },
    {
        state:"Seattle",
        pricing:"$134"
    },
    {
        state:"Denver",
        pricing:"$128"
    },
    {
        state:"Washington DC",
        pricing:"$166"
    },
    {
        state:"Phoenix",
        pricing:"$232"
    },
    {
        state:"Austin",
        pricing:"$242"
    },
    {
        state:"Houston",
        pricing:"$351"
    },
    {
        state:"New Orleans",
        pricing:"$210"
    },
];

const tile = ({state,pricing}) => {
    return (
    <div className="popular-destination__tile" key= {state}>
        <div className="popular-destination__tile__state margin-bottom-small">{state}</div>
        <div className="popular-destination__tile__pricing text-sub margin-bottom-large">{pricing}/night average</div>
    </div>
    );
};



const renderTile = states.map(state =>{
    return tile(state);
})



const PopularDestinationUS=()=>{
    return (
        <div className="popular-destination section-margin">
            <h2 className="header-big margin-bottom-large">Popular destinations in the United States</h2>
            <div className="popular-destination__tiles">
                {renderTile}
            </div>
        </div>
    )
};

export default PopularDestinationUS;