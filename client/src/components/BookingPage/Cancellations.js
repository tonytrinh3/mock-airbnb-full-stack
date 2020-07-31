import React from 'react';

const Cancellations = () =>{
    return (
        <div className="cancellations">
            <h2 className="cancellations__header header-big margin-bottom-medium">Things to keep in mind</h2>
            <div className="cancellations__checkin margin-bottom-large">
                <p><span className = "p-bold">Check-in: </span>After 3:00 PM</p>
                <p><span className = "p-bold margin-bottom-small">Checkout: </span>11:00 AM</p>
                <p>Self check-in with keypad</p>
            </div>
            <div className="cancellations__rules margin-bottom-large">
                <h2 className="header-small margin-bottom-medium">House Rules</h2>
                <ul className = "margin-bottom-small">
                    <li>No smoking</li>
                    <li>No parties or events</li>
                    <li>No pets</li>
                </ul>
                <p className = "booking-page__link">Read all rules</p>
            </div>
            <div className="cancellations__cancel">
                <h2 className="header-small margin-bottom-medium">Cancellations</h2>
                <h2 className="header-small margin-bottom-medium">Free cancellation for 48 hours</h2>
                <p>After that, cancel up to 5 days before check-in and get a full refund, minus the service fee.</p>
                <p className = "booking-page__link">Read more about the policy</p>
            </div>

        </div>
    )
}

export default Cancellations;