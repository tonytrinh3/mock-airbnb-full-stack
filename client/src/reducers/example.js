

const bookingReducer = (state=[], action)=>{
    switch(action.type){
        case FETCH_BOOKING:
            return state.map(booking =>{
                if(booking.id === action.payload.id){
                    return action.payload;
                } else {
                    return booking;
                }
            });
        default:
            return state;
    }
}

const bookingReducer = (state={}, action)=>{
    switch(action.type){
        case FETCH_BOOKING:
           const newState = {...state};
           newState[action.payload.id] = action.payload;
           return newState;
        default:
            return state;
    }
}


const bookingReducer = (state={}, action)=>{
    switch(action.type){
        case FETCH_BOOKING:
        
        //key interpoliation syntax
        return {...state,[action.payload.id]: action.payload};
        default:
            return state;
    }
}

