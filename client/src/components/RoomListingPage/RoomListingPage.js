import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchBookings} from '../../actions/index';
import Navigation from '../Navigation';
import Footer from '../Footer';
import GoogleMaps from './GoogleMaps';
import {avgReview} from '../avgReview';

class RoomListingPage extends React.Component{


    
    //then you call the action to use in here
    //disabled this UNTIL express and mongodb to come into play
    // componentDidMount(){
    //     this.props.fetchBookings();
    // }
  
 
    
    renderList(){
         //disabled this UNTIL express and mongodb to come into play
        // return this.props.bookings.map(booking=>{
        return this.props.rooms.map(booking=>{
            const {
                amenities,
                home_specs,
                home_type,
                id,
                price,
                space_type,
                title
            } = booking;

            //same as booking.price, booking.amenities

            return (
                <Link className="listings__listing " key = {id} to={`/booking/${id}`}>
                      <img className="listings__listing__img" src={require(`../../img/booking-page/listing-${id}/img-1.jpg`)} alt="" />
                    <div className="listings__listing__description">
                        <div className="listings__listing__description__superhost-tag superhost-tag margin-bottom-small">superhost</div>
                        {this.renderSpaceType(space_type, home_type)}
                        <p className="listings__listing__description__reviews">{avgReview(booking.reviews,"overall")} <span>({booking.reviews.length})</span></p>
                        <div className="listings__listing__description__title header-medium margin-bottom-small" > {title}</div>
                        {this.renderHomeSpecs(home_specs)}
                        <ul className="listings__listing__description__amenities">{this.renderAmenities(amenities)}</ul>  
                        <p className="listings__listing__description__price"><span >${price}</span> / night</p>
                    </div>
                  
                    <hr className="listings__listing__hr hr"/>
                </Link>
            )
        })
    }

    renderSpaceType(space_type, home_type){
        //console.log(space_type);
        return <p className = "listings__listing__description__space-type margin-bottom-small">{(space_type === "entire_space") ? `Entire ${home_type}` : `Private Room` }</p>
    }

    renderAmenities(amenities){
        //console.log(amenities);
        return amenities.map((amenity,i)=>{
            return <li className="listings__listing__description__amenities__amenity" key = {i}>{amenity}</li>
        })
    }

    renderHomeSpecs(home_specs){
        return(
            <ul className="listings__listing__description__home-specs margin-bottom-small">
                <li className="listings__listing__description__home-specs__spec">{home_specs.numGuests} guests</li>  
                <li className="listings__listing__description__home-specs__spec">{home_specs.numBedrooms} bedrooms</li> 
                <li className="listings__listing__description__home-specs__spec">{home_specs.numBeds} beds</li> 
                <li className="listings__listing__description__home-specs__spec">{home_specs.numBaths.privates ? `${home_specs.numBaths.privates} baths`:`${home_specs.numBaths.shared} shared baths`}</li> 
            </ul>
        )
    }

    //need to do a mouseover as well
    //pass down picture, superhost, title, space type , price, rating to google map
    render(){

            // console.log(this.props.bokings[1].amenities)
        
        return(
            <div>
                <Navigation />
                <div className="listing-page">
                    
                    <div className="listings">
                        <h1 className="listings__header header-big margin-bottom-large">
                        Stays in San Francisco
                        </h1>
                        {this.renderList()}
                    </div>
                    <GoogleMaps
                     //disabled this UNTIL express and mongodb to come into play
                    //    bookings = {this.props.bookings}
                       bookings = {this.props.rooms}
                    />
                </div>
                <Footer/>
            </div>

        )
    }
};


const mapStateToProps = (state) =>{
     //Object.values is a javascript function - that takes the values of each object awef: 2, and just lay them out in an array
    console.log(state);
     return{
        bookings: Object.values(state.bookings),
        rooms: Object.values(state.roomsTEMP)

        //this is handy to see if currentUserId exist or not to render certain things if the user has logged in or not or if the user own the content of the object or not  
        // currentUserId: state.authy.userId,
        // isSignedIn: state.authy.isSignedInssss
    }
}

//you call the action that you are using to fetch from store
//connect is part of the redux store
export default connect(mapStateToProps,{fetchBookings})(RoomListingPage);