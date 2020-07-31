import React from 'react';
// import { connect } from 'react-redux';
// import {Link} from 'react-router-dom'
// import {fetchBookings} from '../../actions/index';

const Amenities =()=>{



        // console.log(this.props)
        return(
            <div className="amenities">
                <h3 className="amenities__header header-small margin-bottom-medium">Amenities</h3>
                <ul className="amenities__column">
                    <li className="amenities__item">Elevator</li>
                    <li className="amenities__item">Kitchen</li>
                    <li className="amenities__item"> Wifi</li>
                    <li className="amenities__item">Laptop-friendly workspace</li>
                    <li className="amenities__item">Smoke alarm</li>
                    <li className="amenities__item">Carbon monoxide alarm</li>
                </ul>
                <p className = "amenities__paragraph margin-bottom-medium">The host hasn't reported smoke or carbon monoxide detectors on the property</p>
                <p className = "amenities__link booking-page__link">Show all 25 amenities</p> 
                    {/* needs to be modal */}


            </div>
            
        )


}



export default Amenities;