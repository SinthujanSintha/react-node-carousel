import * as api from "../../api/index";
import { ActionTypes } from "../constants/action-type";

export const getSlides = (numberOfSlides) => async (dispatch) => {
  try {
    const { data } = await api.getSlides(numberOfSlides);
    dispatch({ type: ActionTypes.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
