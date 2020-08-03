import {SIGN_IN, SIGN_OUT,FETCH_USER} from '../actions/types';


//caps mean don't try to change this
const INITIAL_STATE = {
    isSignedIn: null,
    userProfile: null,
    testProfile: null
}


export default (state = INITIAL_STATE, action) =>{
    // console.log(action);
    switch (action.type){
        case SIGN_IN:
            //take whatever is in that state and return it in new object
            return {...state, isSignedIn: true, userProfile: action.payload}
        case SIGN_OUT:
            return {...state, isSignedIn: false, userProfile: null}

        case FETCH_USER:
            return {...state, testProfile: action.payload || false} ; //if payload empty, then false
        default:
            return state;
    }

}