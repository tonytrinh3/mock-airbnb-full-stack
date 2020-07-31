import React from 'react';
// import airbnb_logo from "../img/airbnb-logo.png";
import GoogleAuth from "./GoogleAuth";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Navigation extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            toggleDropdown: false
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

 

    render(){

    
        return (

            
            // <nav className="nav">
            //     <Link  to={`/`} ><img className = "nav__img" src={require("../img/airbnb-logo.png")} alt="airbnb_logo"/></Link>
            //     <div className="nav__text">
            //         <a className = "nav__text__item">English (US)</a>
            //         <a className = "nav__text__item">USD</a>
            //         <a className = "nav__text__item">Host a home</a>
            //         <a className = "nav__text__item">Host an experience</a>
            //         <a className = "nav__text__item">Help</a>
            //         <GoogleAuth/>                  
            //         {/* <button onClick = {this.onClick} className = "nav__text__item">Login</button> */}
            //     </div>
            // </nav>
        
             
        <nav className="nav">
            <div className="nav__content">
                <Link  to={`/`} ><img className = "nav__content__img" src={require("../img/airbnb-logo.png")} alt="airbnb_logo"/></Link>
                <div className="nav__content__links">
                    <p className = "nav__content__links__link">English (US)</p>
                    <p className = "nav__content__links__link">USD</p>
                    <p className = "nav__content__links__link">Host a home</p>
                    <p className = "nav__content__links__link">Host an experience</p>
                    <p className = "nav__content__links__link">Help</p>
                    <GoogleAuth/>
                </div>
          
            </div>
          
      
         
         
         </nav>

        
        
        
        
        )
    }

   
};

const mapStateToProps = (state)=>{
    // console.log(state);
    return {
        isSignedIn: state.auth.isSignedIn,
        userProfile: state.auth.userProfile
    }
}

export default connect (mapStateToProps,null)(Navigation);


     /* <p className = "nav__content__links__link nav__content__links__google  " onClick={this.toggleDropdown}>                 
                        <GoogleAuth/> 
                        {!this.state.toggleDropdown ? null:
                            (<div className="nav__dropdown">
                            <p className = "nav__dropdown__link">Your Trips</p>
                            <p className = "nav__dropdown__link">Sign Out</p>
                            </div>)
                        }
                        
                        </p> */

/* <div className="nav__content__menu-btn">MENU </div> */