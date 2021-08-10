import { combineReducers } from 'redux'
import authReducer from './authReducer'
import userReducer from './userReducer'
import carReducer from './carReducer'

const rootReducer = combineReducers({
    authState : authReducer,
    user : userReducer,
    cars : carReducer
})

export default rootReducer