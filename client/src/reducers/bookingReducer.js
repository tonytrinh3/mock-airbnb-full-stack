import _ from 'lodash';

import {
    CREATE_BOOKING,
    FETCH_BOOKINGS,
    FETCH_BOOKING,
    DELETE_BOOKING,
    EDIT_BOOKING
} from '../actions/types';

//state is always empty
//you only need state is to return when you don't have any action, just in case
//but for all other actions, you don't really need to return state...

export default (state = {}, action) =>{
    switch (action.type) {
        case FETCH_BOOKINGS:
            //you still need ... for mapkeys bc mapkeys return object
            //action.payload is the list of bookings that you got from the api

         
            return {...state, ..._.mapKeys(action.payload, "id")};
        case FETCH_BOOKING:
            //you always ahve to return something in redux reducer to show that something changed in the component
            
            //but this is adding in the new payload to the state...
            //but it depends on what the action.payload is?

            //[action.payload.id]: action.payload is called key interpolation

            // console.log({...state, [action.payload.id]: action.payload })
            return {...state, [action.payload.id]: action.payload };
        case CREATE_BOOKING:
            return {...state, [action.payload.id]: action.payload };
        case EDIT_BOOKING:
            return {...state, [action.payload.id]: action.payload };
        case DELETE_BOOKING:
            //omit creates new object with state but without what you pass in as id
            return _.omit(state,action.payload);
        default:
            return state;
    }
}