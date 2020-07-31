import React from 'react';


import DateAndGuestsForm from '../DateAndGuestsForm';

import {avgReview} from '../avgReview';

const BookingCard = ({bookingId, title, location, description, imgs, price, reviews}) =>{


    return( 
        <div className="booking-card">
         
            <p className="booking-card__price"><span className="header-medium">${price}</span> per night</p>
            <p className="booking-card__reviews margin-bottom-medium">{avgReview(reviews,"overall")} <span className="booking-card__reviews__amount">({reviews.length} reviews)</span></p>
            
            <hr className="hr margin-bottom-medium"/>
            <h3 className ="header-small margin-bottom-medium">Dates</h3>
            <DateAndGuestsForm 
                pageType = {"Booking Page"}
                btnType = {"Reserve"}
                bookingId = {bookingId}
                title = {title}
                location = {location}
                description = {description}
                imgs = {imgs}
            />
        </div>

    )
};

export default BookingCard;



// onSubmit = (formValues) =>{
//     this.props.createUserReservation(this.props.bookingId, formValues);
// }

// <div className="awef">
// <div className="awef" style = {{color:"blue"}}>Create a Booking</div>
// <BookingForm onSubmit = {this.onSubmit}/>
// </div>







// export default connect(mapStateToProps,{createBooking})(BookingCard);



// const mapStateToProps = (state) =>{
//     console.log(state);
//     return {isSignedInM: state.authy.isSignedInssss};
// }

// export default connect(
//     mapStateToProps,
//     {signIn, signOut}
// )(GoogleAuth);

/* <div className="aewf">Booking Ccard</div> */


// renderError(error,touched){
//     if(error && touched){
//         return(
//             <div style = {{color: "red" }}>{error}</div>
//         )
//     }
// }




// renderInput=(formProps)=>{
//     // console.log(formProps);
//     // return <input onChange = {formProps.input.onChange} value = {formProps.input.value}/>;
//     //console.log(formProps.meta)
//     return(
//         <div className="aerwf">
          
//             <label>{formProps.label}</label>
//             <input {...formProps.input} autoComplete="off"/>
//             {this.renderError(formProps.meta.error, formProps.meta.touched)}
//         </div>
//     ) 
// }

// //so all of this form stuff creates an object - 
// // onSubmit=(formValues)=>{
// //     //prevent broswer to refresh when you submit
// //     // event.preventDefault();
// //     console.log(formValues);
// //     const testing = {
// //         testssss: 1,
// //         test: 2
// //     }
// //     this.props.createBooking(testing);
// // }

// onSubmit=(formValues)=>{
//     //prevent broswer to refresh when you submit
//     // event.preventDefault();
//     //console.log(formValues);
//     // const testing = {
//     //     tony: 1,
//     //     tonyss: 2
//     // }
//     //so basically when you pass something through the actions - that gets posted in the db.json... - you can click a button to trigger the function or even have the function run when you load the sheet 
//     // this.props.createBooking(testing);
//     this.props.createBooking(formValues);
// }


// render(){
//     //this.props is from reduxform
//     //console.log(this.props);
//     return( 
//         <div className="awef">
//      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
//             <Field name = "title" component = {this.renderInput}  label ="enter something"/>
//             <Field name = "description" component = {this.renderInput} label ="enter nothing" />
//             <button  className="awef">Submit</button>
//         </form>
//       {/* <button  onClick = {this.onSubmit} className="awef">Submit</button> */}
//         </div>

      
//     )
// }
// };

// const validate = (formValues) =>{
// const errors = {};

// if(!formValues.title){
//     errors.title = 'you must enter a title'
// }

// if(!formValues.description){
//     errors.description = 'you must enter a description'
// }

// return errors;

// }


// const formWrapped = reduxForm({
// form: "BookingCard",
// validate: validate
// })(BookingCard);

// //state has all the state in the store
// // const mapStateToProps = (state) =>{
// //     console.log(state);
// //     return {something: state}
// // }

// export default connect(null,{createBooking})(formWrapped);

// // export default connect(mapStateToProps,{createBooking})(BookingCard);



// // const mapStateToProps = (state) =>{
// //     console.log(state);
// //     return {isSignedInM: state.authy.isSignedInssss};
// // }

// // export default connect(
// //     mapStateToProps,
// //     {signIn, signOut}
// // )(GoogleAuth);

// {/* <div className="aewf">Booking Ccard</div> */}