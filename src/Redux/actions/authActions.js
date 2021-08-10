import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";

export const userLoggedIn = () => ({
    type: USER_LOGGED_IN,
})

export const userSignOut = () => ({
    type: USER_LOGGED_OUT,
})

