import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';
import moment from 'moment';

import { connect } from 'react-redux';
import {createUserReservation, createUserReservationTEMP,increaseIDTEMP } from "../actions";




class DateAndGuestsForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            startDate: null,
            endDate: null,
            focusedInput: null,
            numAdults: 0,
            numChildren: 0,
            numInfants: 0,
            numTotal: 0,
            toggleDropdown: false,
            showError: false
        }
    }

    //to reduce calendar from showing 2 to showing 1 and changing default month when window resize
    updateDateRange=()=>{
        const {
            startDate,
            endDate,
            focusedInput

        } = this.state;

        if(window.innerWidth <= 420){
           return <DateRangePicker
                startDateId="startDate"
                endDateId="endDate"
                startDate={startDate}
                endDate={endDate}
                onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                orientation="vertical" verticalHeight={400}
            />
         
        } else {
            return <DateRangePicker
                startDateId="startDate"
                endDateId="endDate"
                startDate={startDate}
                endDate={endDate}
                onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
            />
        }
    }

    //to reduce calendar from showing 2 to showing 1 and changing default month when window resize
    componentDidMount(){
        this.updateDateRange(); 
        window.addEventListener("resize", this.updateDateRange); 
        //https://www.hawatel.com/blog/handle-window-resize-in-react/
        //window.addEventListener("resize", this.updateMonth.bind(this));
    }

    onSubmit = () =>{
        const {
            bookingId,
            description,
            imgs,
            location,
            title

        } = this.props;
        
        const{
            numAdults,
            numChildren,
            numInfants,
            numTotal,
            startDate,
            endDate

        } = this.state;

        const reservation = {
            bookingId,
            startDate: moment(startDate).format('MMMM Do YYYY'),
            endDate: moment(endDate).format('MMMM Do YYYY'),
            numAdults,
            numChildren,
            numInfants,
            title,
            description,
            location,
            imgs
        };

        if(startDate === null || endDate === null || numTotal ===0 || !this.props.isSignedIn){
            this.setState({
                showError: true
            })
        } else {

            this.setState({
                showError: false
            })

            //disabled this UNTIL express and mongodb to come into play
            // this.props.createUserReservation(reservation);
            this.props.increaseIDTEMP();//to increase id for reservations for user to make more reservations
            // this.props.createUserReservationTEMP(reservation);
            this.props.createUserReservation(reservation);
        }
        
        // if(!(startDate === null) && !(endDate === null) && numTotal > 0 ){
        //     this.props.createUserReservation(reservation);
           
        // }

    }

    renderError(){
        const {
            startDate,
            numTotal
        } = this.state;

        //this is always going to change when the state changes due to other functions running to change the state
        if (!this.props.isSignedIn){
            return <p className="error-statement">Please sign into Google in order to reserve a room.</p>
        } else if (startDate === null & numTotal === 0){
            return <p className="error-statement">Please enter a start date, end date, and amount of people for the reservation.</p>
        } else if (startDate === null && numTotal > 0 ){
            return <p className="error-statement">Please enter a start date and end date for the reservation.</p>
        } else if(!(startDate === null) && numTotal === 0  ){
            return <p className="error-statement">Please enter an amount of people for the reservation.</p>
        } else{
            return null;
        }
    }


    toggleDropdown =()=>{
        (!this.state.toggleDropdown)
        ? this.setState({
            toggleDropdown: true
        })
        : this.setState({
            toggleDropdown: false
        });
    }

    additionButton (type) {
        //have this work for whatever type of people passed in
        //have if statement to stop button when the number of guest from booking exceeds it
        switch(type){
            case "Adults":
                this.setState({
                    numAdults: this.state.numAdults + 1,
                    numTotal: this.state.numTotal + 1
                });
                break;
            case "Children":
                this.setState({
                    numChildren: this.state.numChildren + 1,
                    numTotal: this.state.numTotal + 1
                });
                break;
            case "Infants":
                this.setState({
                    numInfants: this.state.numInfants + 1,
                    numTotal: this.state.numTotal + 1
                });
                break;
            default: 
                return;
        }
    }

    subtractionButton(type){
        switch(type){
            case "Adults":
                if(this.state.numAdults > 0){ 
                    this.setState({
                        numAdults: this.state.numAdults - 1,
                        numTotal: this.state.numTotal - 1
                    });
                }
                break;
            case "Children":
                if(this.state.numChildren > 0){ 
                    this.setState({
                        numChildren: this.state.numChildren - 1,
                        numTotal: this.state.numTotal - 1
                    });
                }
                break;
            case "Infants":
                if(this.state.numInfants > 0){ 
                    this.setState({
                        numInfants: this.state.numInfants - 1,
                        numTotal: this.state.numTotal - 1
                    });
                }
                break;
            default: 
                return;
        }
           
    }

    renderNumPeople = ()=>{
        return(
            <div className="date-guest-forms__guests__dropdown">
        
                <div className="date-guest-forms__guests__dropdown__type">
                    <p className="date-guest-forms__guests__dropdown__type__person form__guests__dropdown__type__person--adult">Adults</p>
                </div>
        
                <div className="date-guest-forms__guests__dropdown__counter">
                    <div className="counter-button" onClick= {()=>{this.subtractionButton("Adults")}} >-</div>
                    <p className="date-guest-forms__guests__dropdown__counter__num">{this.state.numAdults}</p>
                    <div className="counter-button" onClick= {()=>{this.additionButton("Adults")}}>+</div>
                </div>
            
                <div className="date-guest-forms__guests__dropdown__type">
                    <p className="date-guest-forms__guests__dropdown__type__person">Children</p>
                    <p className="date-guest-forms__guests__dropdown__type__person__description">Ages 2–12</p>
                </div>
        
                <div className="date-guest-forms__guests__dropdown__counter">
                    <div className="counter-button" onClick= {()=>{this.subtractionButton("Children")}} >-</div>
                    <p className="date-guest-forms__guests__dropdown__counter__num">{this.state.numChildren}</p>
                    <div className="counter-button" onClick= {()=>{this.additionButton("Children")}}>+</div>
                </div>
        
        
                <div className="date-guest-forms__guests__dropdown__type">
                    <p className="date-guest-forms__guests__dropdown__type__person">Infant</p>
                    <p className="date-guest-forms__guests__dropdown__type__person__description">Under 2</p>
                </div>
        
                <div className="date-guest-forms__guests__dropdown__counter">
                    <div className="counter-button" onClick= {()=>{this.subtractionButton("Infants")}} >-</div>
                    <p className="date-guest-forms__guests__dropdown__counter__num">{this.state.numInfants}</p>
                    <div className=" counter-button" onClick= {()=>{this.additionButton("Infants")}}>+</div>
                </div>

                <p className="date-guest-forms__guests__dropdown__close" onClick={this.toggleDropdown}>Close</p>
            </div>
        )



    }

    render(){
        const {
            numTotal,
            toggleDropdown,
            showError
        } = this.state;

        return (
            <div className = "date-guest-forms">
                <section className="date-guest-forms__section margin-bottom-medium-2">
                    {this.updateDateRange()}
                </section>
             
               <section className="date-guest-forms__section margin-bottom-medium-2">
                    <h3 className ="header-small margin-bottom-medium">Guests</h3>
                    <div className = "date-guest-forms__guests input-default" onClick={this.toggleDropdown}>
                        {numTotal ===0? "Add guests" : `${numTotal} guests` }
                    </div>
                    {toggleDropdown? this.renderNumPeople(): null}
                </section>
                {showError ? this.renderError(): null}
               {this.props.btnType === "Reserve"? <button className="reserve-button button" onClick = {this.onSubmit}>Reserve</button> : null}
                
            </div>
        )
    }

   
};

const mapStateToProps = (state)=>{
    // console.log(state);
    return {
        isSignedIn: state.auth.isSignedIn
    }
}




export default connect(mapStateToProps,{createUserReservation,createUserReservationTEMP,increaseIDTEMP})(DateAndGuestsForm);


