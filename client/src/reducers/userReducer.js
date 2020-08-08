import _ from 'lodash';

import {
    CREATE_USER_RESERVATION, 
    FETCH_USER_RESERVATIONS
} from '../actions/types';

//all of these reducers are just ??? something with store 
//reducers are just way to manupulate the state 
//actions are just functions that carry the data and what type that data is
//then actions tell the reducers how to change that state 


export default (state = {}, action) =>{


    switch(action.type){
        case FETCH_USER_RESERVATIONS:
            // console.log(state);
            // return {...state, ..._.mapKeys(action.payload, "id")};
            return action.payload; 
        case CREATE_USER_RESERVATION:
            return {...state, [action.payload.id]: action.payload};
        default: 
            return state;
    }

}