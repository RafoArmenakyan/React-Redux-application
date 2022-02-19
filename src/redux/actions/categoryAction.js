import { SET_CATEGORY_NAMES } from "./actionTypes"

export const setCategoryNames = (payload) => {
    return {
        payload,
        type: SET_CATEGORY_NAMES,
    }
}