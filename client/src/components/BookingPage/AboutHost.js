import React from 'react';
import moment from 'moment';

// const avgReview = (reviews,type) =>{
//     //this could be in a separate function file
//         //console.log(reviews);
//         let sum = 0;
//         reviews.map((review)=>{
//             return sum += eval("review." + type)
//         });
//       return sum/reviews.length;  
// };



const AboutHost = ({host_info,reviews}) =>{
    return(
        <div className="about-host">
            <h2 className="about-host__header header-big margin-bottom-medium">Hosted by {host_info.name.split(" ")[0]}</h2>
            <p className="margin-bottom-medium">{host_info.location} · Joined in {moment(host_info.date_joined).format("MMMM YYYY")}</p>
            <p className="about-host__reviews"> {reviews.length} Reviews</p>
            
            <hr className="about-host__hr hr"/>

            <p className="about-host__paragraph margin-bottom-medium">{host_info.description}</p>
            <p className="margin-bottom-medium">Languages: <span className="p-bold">{host_info.languages}</span></p>
            <p className="margin-bottom-medium">Response rate: <span className="p-bold">{host_info.response_rate}%</span></p>
            <p className="margin-bottom-medium">Response time: <span className="p-bold">within {host_info.response_time}</span></p>
            
            <button className="contact-host__button">Contact Host</button>

            <hr className="about-host__hr hr"/>

            <p className=""><span className="header-small">Always communicate through Airbnb</span> · To protect your payment, never transfer money or communicate outside of the Airbnb website or app. <span className="booking-page__link">Learn more</span></p>
            
            <hr className="about-host__hr hr"/>
            
            <h3 className="header-small margin-bottom-medium">About this place</h3>
            <p className="">When you stay in an Airbnb, you’re staying at someone’s place.</p>
           
            <hr className="about-host__hr hr"/>
            
            <div className="about-host__host-split">
                <p className="">This is {host_info.name.split(" ")[0]}'s Place</p>            
            </div>
        </div>
    )
};

export default AboutHost;