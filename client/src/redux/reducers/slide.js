import { ActionTypes } from "../constants/action-type";
const initialState = {
  slides: []
  // if we want more states we can add here.
};

export const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL:
      return { ...state, slides: action.payload };
    default:
      return state;
  }
};
