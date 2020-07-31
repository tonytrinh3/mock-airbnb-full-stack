import React from 'react';
// import { renderChildren } from 'redux-form/lib/ReduxFormContext';
import {connect} from 'react-redux';
import {fetchUserReservations} from '../../actions';
import Navigation from '../Navigation';
import Footer from '../Footer';
//import moment from 'moment';
// import TripCard from './TripCard';

class TripsPage extends React.Component{


     //disabled this UNTIL express and mongodb to come into play
    // componentDidMount(){
    //     this.props.fetchUserReservations();
    //     // this.props.fetchBookings();
    // }

    // renderDate(){

    // }

    renderReservation(){

        const {
            userProfile,

            tripsTEMP

        } = this.props;
        
        //disabled this UNTIL express and mongodb to come into play
        return tripsTEMP.map((trip,i) =>{
        // return trips.map((trip,i) =>{

            const {
                bookingId,
                imgs,
                endDate,
                location,
                startDate,
                title
            } = trip.reservation;


            //you do this to wait until userProfile is fetch and loading
            if (!userProfile){
                return null
            }
            
            if (trip.userId === userProfile.userId){
                return (
                    <div className="trip-card" key = {i}>
                        <img className = "trip-card__img" src={require(`../../img/booking-page/listing-${bookingId}/${imgs.img_1}.jpg`)} alt= {`img_${i}`} key ={`img_${i}`}/>    
                        <div className="trip-card__description ">
                            <p className = "trip-card__description__date ">{`${startDate.split(" ")[0]} ${startDate.split(" ")[1]} - ${endDate.split(" ")[0]} ${endDate.split(" ")[1]}` }</p>                    
                            {/* <h2 className="header-medium">{trip.reservation.description}</h2> */}
                            <h3 className="trip-card__description__location ">{location.split(",")[0]}</h3>
                            <p className="trip-card__description__title ">{title}</p>
                            <p href="" className="trip-card__description__more-info">Show more trip plans</p>
                        </div>
                      
                        {/* <p>{moment(trip.reservation.startDate).format("MMMM Do")} - {moment(trip.reservation.endDate).format("Do")} </p> */}
                        
                    </div>
                    
                )
            }
        })
    }


    render(){
        //console.log(this.props.trips);

        return(

            <div className="trips-page">
            <Navigation />
                <h1 className="trips-page__header header-big margin-bottom-large">Your Trips</h1>
                <div className="trips-page__cards">
                    {this.renderReservation()} 
                </div>
                <hr className="footer__hr hr"/>
            <Footer/>
            </div>

        )
    }
};

const mapStateToProps = (state) =>{
    console.log(state);
    return {
        trips: Object.values(state.userReservations),
        userProfile: state.auth.userProfile,
        tripsTEMP: Object.values(state.userResTEMP),
    }
}

export default connect(mapStateToProps,{fetchUserReservations})(TripsPage);