import React from 'react';

const renderNumBaths = (baths)=>{
    if (baths.shared === false){
        return <li>{baths.privates} baths </li>
    } else {
        return <li>{baths.privates} shared baths </li>
    }
};

const renderSpace_Type = (space_type, home_type) =>{
 
    if(space_type === "entire_space"){
        return(
            <div>
                <h3 className="listing-description__subheader header-small">{home_type}</h3>
                <p className ="margin-bottom-medium">You’ll have the {home_type} to yourself.</p>
            </div>
        )
    } else {
        return(
            <div>
                <h3 className="header-small">Private room in {home_type}</h3>
                <p className = "margin-bottom-medium">You’ll have a private room in a {home_type}</p>
            </div>
        )
    }
};

const renderSelf_check_in = (self_check_in) =>{
    if (self_check_in === true){
        return(
            <div>
                <h3 className="header-small">Self check-in</h3>
                <p className = "margin-bottom-medium">Check yourself in with the keypad.</p>
            </div>   
        ) 
    } else {
        return null
    }
};

const renderSuperhost = (host_info) =>{
    if (host_info.superhost === true){
        //console.log(host_info);
        
        return(
            <div>
                <h3 className="header-small">{host_info.name.split(" ")[0]} is a Superhost</h3>
                <p className = "margin-bottom-medium">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
            </div>
        )
    } else {
        return null;
    }
};

const renderSparklingClean = (reviews) =>{
//this could be in a separate function file
    //console.log(reviews);

    let sumCleanliness = 0;
    reviews.map((review)=>{
        return sumCleanliness += review.cleanliness
    })

   const avgCleanliness = sumCleanliness/reviews.length;
   //console.log(avgCleanliness);

   

    if (avgCleanliness >= 4.5){
        return (
            <div className="awef">
                <h3 className="header-small">Sparkling clean</h3>
                <p className = "margin-bottom-medium">{reviews.length} recent guests said this place was sparkling clean.</p>
            </div>
        )
    } else {
        return null;
    }

};


const ListingDescription = ({title, location, description, home_type, 
    space_type, home_specs, host_info, self_check_in, reviews}) =>{

    return (
        //all of this needs to come from backend and all dynamic per person
        <div className="listing-description">
            <h2 className="listing-description__header header-big margin-bottom-medium">{title}</h2>
            <p className="listing-description__location  margin-bottom-medium">{location}</p>
            <ul className = "listing-description__capacity margin-bottom-medium">
                <li>{home_specs.numGuests} guests</li>
                <li>{home_specs.numBedrooms} bedroom</li>
                <li>{home_specs.numBeds} beds</li>
                {renderNumBaths(home_specs.numBaths)}
            </ul>
            {renderSpace_Type(space_type,home_type)}
            {renderSelf_check_in(self_check_in)}
            {renderSparklingClean(reviews)}
            {renderSuperhost(host_info)}
            <p className = "margin-bottom-medium">{description}</p>
            <p className = "booking-page__link margin-bottom-medium">Read more about the space</p>
            <p className = "booking-page__link margin-bottom-medium">Contact Page</p>
        </div>
    )
}

export default ListingDescription;