import React from 'react';
import {Field, reduxForm} from 'redux-form';


class BookingForm extends React.Component{

    renderError(error,touched){
        if(error && touched){
            return(
                <div style = {{color: "red" }}>{error}</div>
            )
        }
    }




    renderInput=(formProps)=>{
        // console.log(formProps);
        // return <input onChange = {formProps.input.onChange} value = {formProps.input.value}/>;
        //console.log(formProps.meta)
        return(
            <div className="aerwf">
              
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/>
                {this.renderError(formProps.meta.error, formProps.meta.touched)}
            </div>
        ) 
    }

    //so all of this form stuff creates an object - 
    // onSubmit=(formValues)=>{
    //     //prevent broswer to refresh when you submit
    //     // event.preventDefault();
    //     console.log(formValues);
    //     const testing = {
    //         testssss: 1,
    //         test: 2
    //     }
    //     this.props.createBooking(testing);
    // }

    onSubmit=(formValues)=>{
        //prevent broswer to refresh when you submit
        // event.preventDefault();
        //console.log(formValues);
        // const testing = {
        //     tony: 1,
        //     tonyss: 2
        // }
        //so basically when you pass something through the actions - that gets posted in the db.json... - you can click a button to trigger the function or even have the function run when you load the sheet 
        // this.props.createBooking(testing);
        this.props.onSubmit(formValues);
    }


    render(){
        //this.props is from reduxform
        //console.log(this.props);
        return( 
            <div className="awef">
         <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name = "usertitle" component = {this.renderInput}  label ="enter something"/>
                <Field name = "userdescription" component = {this.renderInput} label ="enter nothing" />
                <button  className="awef">Submit</button>
            </form>
          {/* <button  onClick = {this.onSubmit} className="awef">Submit</button> */}
            </div>
   
          
        )
    }
};

const validate = (formValues) =>{
    const errors = {};

    if(!formValues.title){
        errors.title = 'you must enter a title'
    }

    if(!formValues.description){
        errors.description = 'you must enter a description'
    }

    return errors;

}


export default reduxForm({
    form: "BookingForm",
    validate: validate
})(BookingForm);


