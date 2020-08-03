import React from 'react';
import DateAndGuestsForm from '../DateAndGuestsForm'
import Payments from '../Payments';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchUser } from '../../actions/index';


class LandingForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            searchLocation: null
        }
    }

    componentDidMount(){
        this.props.fetchUser();
    }


    render(){
        return (
            <div className="landing-page-form">
                <h2 className="landing-page-form__header">
                    Book unique places to 
                    <br/> stay and things to do.
                </h2>
                <a href="/auth/google" className="awef">sign in gogole here</a>
                <a href="/api/logout" className="awef">log out</a>
                <p className="awef">Credits {this.props.auth? this.props.auth.credits :null}</p>
                <Payments></Payments>

                <div className="landing-page-form__section">
                    <h3 className ="header-small margin-bottom-medium">WHERE</h3>
                    <input className = "landing-page-form__input input-default margin-bottom-medium-2 " type="text" id="location" name="location" placeholder="San Francisco" />
                </div>
            

                <div className="landing-page-form__section">
                    <h3 className ="header-small margin-bottom-medium">DATE</h3>
                    <DateAndGuestsForm
                        pageType = {"Landing Page"}
                        btnType = {"Search"}
                    />
                </div>
                <Link  to={`/roomListing`} ><button className="landing-page-form__button search__button button">Search</button></Link>
            </div>
        )
    }

   
};

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        auth: state.auth.testProfile
    }
}

// export default LandingForm;
export default connect(mapStateToProps, {fetchUser} )(LandingForm);

