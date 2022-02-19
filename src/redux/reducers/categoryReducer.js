import { SET_CATEGORY_NAMES } from "../actions/actionTypes";

const initialState = {
    categoryNames: [],
}
  
  const categoryReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CATEGORY_NAMES:
            return {
                ...state,
                categoryNames: payload,
            }
            break;
      default:
        return state
    }
  }

  export default categoryReducer;