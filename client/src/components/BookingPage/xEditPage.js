import React from 'react';
import {connect } from 'react-redux';

import {fetchBooking, editBooking} from '../../actions';
import BookingForm from './BookingForm';


class EditPage extends React.Component{

    componentDidMount(){
        this.props.fetchBooking(this.props.match.params.id);
    }


    onSubmit = (formValues) => {
        //this formValues is passed via redux form and it is just the title and description, you see it in the reducer
        //console.log(formValues);
        this.props.editBooking(this.props.match.params.id,formValues);
    };

    render(){
        console.log(this.props);//the props are from react router dom

        if (!this.props.booking){
            return <div className="awef">loading</div>
        }

        return (
        <div className="explore-options">
            edit somthing
            {this.props.booking.title}
            <BookingForm initialValues={{title: this.props.booking.title, description:this.props.booking.description}} onSubmit = {this.onSubmit}/>
        </div>
        )
    }

};



const mapStateToProps = (state, ownProps) =>{
    //console.log(ownProps); // ownProps is the props that is passed down to the component
    //console.log(state);
    //only return relevant info per id
    return {booking: state.bookings[ownProps.match.params.id]};
}

//export default connect(mapStateToProps, {fetchBooking, editBooking})(EditPage);

export default connect(mapStateToProps,{fetchBooking, editBooking})(EditPage);