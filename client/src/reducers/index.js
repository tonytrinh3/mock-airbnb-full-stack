import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import bookingReducer from './bookingReducer';
import userReducer from './userReducer'

//as a substitute until express and mongodb comes
import roomsReducerTEMP from './roomsReducerTEMP';
import userReducerTEMP from './userReducerTEMP';
import idReducerTEMP from './idReducerTEMP';

import testAuth from './testAuth';


export default combineReducers({
    auth: authReducer,
    bookings: bookingReducer,
    userReservations: userReducer,
    roomsTEMP: roomsReducerTEMP,
    userResTEMP: userReducerTEMP,
    idTEMP:idReducerTEMP,
    testAuth:testAuth
    
});