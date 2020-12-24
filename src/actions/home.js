import axios from 'axios'
import { SET_SAMPLE, LOADING, DONE_LOADING } from '../actions/actionType';
import { AsyncStorage } from "react-native";

export const getHomeSample = () => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING })
    axios.get('https://randomuser.me/api/',
      // { headers: { Authorization: 'Bearer '+await AsyncStorage.getItem('token')}}
    )
    .then(function (response) {
      dispatch({ type: SET_SAMPLE, payload: response.data.results[0] })
      dispatch({ type: DONE_LOADING });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
