import { ADD_CARS } from "../types"

export default (state = [], { type, payload }) => {
    if(type === ADD_CARS){
        return [...payload]
    }
    return state
}
