 const INITIAL_STATE = {
    id: 900
}

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case "INCREASE_ID_TEMP":
            // const newId = INITIAL_STATE.id + action.payload;
            // console.log(newId);
            INITIAL_STATE.id = INITIAL_STATE.id + 1;
            return {...state, id: INITIAL_STATE.id }
        default:
            return state;
    }

}