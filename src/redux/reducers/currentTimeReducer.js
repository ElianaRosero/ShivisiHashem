const initialState = {
    currentTime: null,
    previewOn: false
}

export default function reducer(state=initialState, action){
    console.log(action)
    switch(action.type){
        case "GET_CURRENT_TIME":{
            return {
                ...state,
                currentTime: action.payload
            }
        }
        case "TOGGLE_VIEW":{
            return {
                ...state,
                previewOn: !state.previewOn
            }    
        }
        default: return state
    }

}