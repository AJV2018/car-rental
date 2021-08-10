import { RESET_USER, SET_USER } from "../types";

export const setUser = (payload) => ({
    type: SET_USER,
    payload
})

export const resetUser = () => ({
    type: RESET_USER,
})

