import { type } from "@testing-library/user-event/dist/type";
import { BASE_URL } from "../../../api/api";

export const getAllList = (id) => {
  return (dispatch) => {
    return fetch(BASE_URL + `search?term=${id}`)
      .then(function (response) {
        return response.json();
      })
      .catch((e) => Promise.reject(e));
  };
};

export const savedListAction = (payload) => (dispatch) => {
  dispatch({
    type: "LIST",
    payload,
  });
};
