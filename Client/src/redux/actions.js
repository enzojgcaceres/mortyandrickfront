import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";
import axios from "axios"
import dotenv from "dotenv"

dotenv.config();

export const addFav = (character) => {
  const endpoint = process.env.REACT_APP_API_FAV;
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
      /*
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
      */
    }
  };
};

export const removeFav = (id) => {
  const endpoint = process.env.REACT_APP_API_FAV + id;
  return (dispatch) => {
     axios.delete(endpoint)
      .then(({ data }) => {
          return dispatch({
            type: REMOVE_FAV,
            payload: data,
        });
     });
  };
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender
  }
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order
  }
}

// export function addFav(character) { //* { id: 1, name: "Rick"}
//   return {
//     type: ADD_FAV,
//     payload: character
//   }
// }

// export function removeFav(id) {
//   return {
//     type: REMOVE_FAV,
//     payload: id
//   }
// }

// export function filterCards(gender) {
//   return {
//     type: FILTER,
//     payload: gender
//   }
// }

// export function orderCards(order) {
//   return {
//     type: ORDER,
//     payload: order
//   }
// }