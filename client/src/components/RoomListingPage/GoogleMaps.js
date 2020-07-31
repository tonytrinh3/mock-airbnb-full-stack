
import React from 'react';
// import { Link} from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker,InfoWindow } from 'google-maps-react';
// import history from '../../history';
// import PlacesCards from '../PlacesCard';

// import dotenv from 'dotenv'
// dotenv.config({ silent: true })




class GoogleMaps extends React.Component{
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        selectedPlaceId:{}
      };
   
    onMarkerClick = (props, marker) =>{
    //   console.log(props);
    //   console.log(marker);
    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });
    }

//   Civic Center Views from a Contemporary City Pad and Parking
//   37.780963, -122.420412
//   Downtown SF Studio Apartment Near Civic Center
//   37.781362, -122.417644
//   Private, Remodeled Home Close to Golden Gate Park
//   37.762404, -122.505071
//   Private, modern Central Sunset suite
//   37.748355, -122.476957


    

    onMapClicked = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
 
    containerStyle = {
        width: '91vh',
        height: '70%'
      
    }

    renderMarker(){
       return this.props.bookings.map((booking,i)=>{
            // console.log(booking.lng);

            const {
                lat,
                lng,
                title
            } = booking;
            
          
            return <Marker 
                    onClick={this.onMarkerClick} 
                    name={title} 
                     //position={{lat: booking.lat, lng: booking.lng}}
                    //position={{lat:lat, lng: lng}}
                    position={{ lat, lng}}
                    key = {i} 
                    className = {"google-map__marker"}
                    icon={{
                        url: require("../../img/airbnb-logo.png"),
                        anchor: new this.props.google.maps.Point(32,32),
                        scaledSize: new this.props.google.maps.Size(34,34)
                      }}
                />
        })
    }

    onClickLink = () =>{
        return console.log("aefw");
    }

    render(){
        // console.log(this.props.google)
        //console.log(this.props.bookings);
    
        return (
            
            <Map
               className = {"google-map"}
                google={this.props.google}
                zoom={13.5}
                containerStyle={this.containerStyle}
                initialCenter={{ lat: 37.783148, lng:  -122.430797}}
                onClick={this.onMapClicked}
            >
                 {/* <Marker 
                    onClick={this.onMarkerClick} 
                    title={'The marker`s title will appear as a tooltip.'} 
                    name={'SOMA'} 
                    position={{ lat:  37.780963, lng: -122.420412}}
                    key = {1} 
                /> */}
                
                {this.renderMarker()}
        
                <InfoWindow
              
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                >
                    <div className="google-map__info-window">
                        <h1 className="google-map__info-window__header header-small margin-bottom-medium">{this.state.selectedPlace.name}</h1>
                        {/* <PlacesCards
                             country = "Cuba"
                             description = "La Rosa de Ortega / Standard Room"
                             picture = 'landing-page/places-stay/Cuba.jpg'
                             pricing = "$70"
                             rating = "4.94"
                             superhost = "superhost"
                             key = "1"
                        /> */}
                    </div>
                    
               
                </InfoWindow>
            </Map>
        )
    
    }

}

// export default GoogleMaps;

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP
  })(GoogleMaps);