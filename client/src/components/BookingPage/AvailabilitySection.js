import React from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';

class AvailabilitySection extends React.Component{

    state = {
        startDate: null,
        endDate: null,
        focusedInput: null,
        defaultMonth: 2
    };

    updateMonth=()=>{
        if(window.innerWidth <= 420){
            this.setState({
                defaultMonth: 1
            })
        } else {
            this.setState({
                defaultMonth: 2
            })
        }
    }

   componentDidMount(){
        this.updateMonth(); //to reduce calendar from showing 2 to showing 1 and changing default month when window resize
        window.addEventListener("resize", this.updateMonth); 
        //https://www.hawatel.com/blog/handle-window-resize-in-react/
        //window.addEventListener("resize", this.updateMonth.bind(this));
    }


    render(){
        // console.log(window.innerWidth );

   

        return(
            <div className="availability-section">
                <h2 className="margin-bottom-large header-medium">Availability</h2>
                
                <DayPickerRangeController
                    startDateId= "startDate"
                    endDateId= "endDate"
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    initialVisibleMonth={() => moment().add(this.state.defaultMonth, "M")} // PropTypes.func or null,
                    numberOfMonths = {this.state.defaultMonth}
                /> 

                
            </div>
        )
    }

}

export default AvailabilitySection;