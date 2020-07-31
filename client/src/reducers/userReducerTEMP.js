// import _ from 'lodash';




export default (state = {}, action) =>{
   switch(action.type){
       case 'CREATE_USER_RESERVATION_TEMP':
           return {...state, [action.payload.id]:action.payload}
       default: 
            return state;
   }
}

