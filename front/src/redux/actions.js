import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";
import axios from "axios";
const ENDPOINT = 'http://localhost:3001/rickandmorty/fav';

export const addFav = (character) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.post(ENDPOINT, character)
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         alert(error.message);
         return dispatch({
            type: "ERROR",
            payload: error.message
         });
      }
   };
};

export const removeFav = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(`${ENDPOINT}/${id}`)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch (error) {
         alert(error.message);
         return dispatch({
            type: "ERROR",
            payload: error.message
         });
      }
   };
};

export const filterCards = (gender) => {
   return {
      type: FILTER,
      payload: gender
   }
}

export const orderCards = (orden) => {
   return {
      type: ORDER,
      payload: orden
   }
}