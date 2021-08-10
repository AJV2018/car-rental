import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types"

export default (state = false, { type, payload }) => {
    if(type === USER_LOGGED_IN){
        return true
    }else if(type === USER_LOGGED_OUT){
        return false
    }

    return state
}
