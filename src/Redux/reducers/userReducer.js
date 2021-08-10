import { RESET_USER, SET_USER } from "../types"

const initialState = {
    name : '',
    email : '',
}

export default (state = initialState, { type, payload }) => {
    if(type === SET_USER){
        return {
            name : payload.name,
            email : payload.email
        }
    }else if(type === RESET_USER){
        return initialState
    }
    return state
}
