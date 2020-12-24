import axios from 'axios'
import { SET_SAMPLE } from '../actions/actionType';
import { AsyncStorage } from "react-native";

export const getHomeSample = () => {
  return async (dispatch, getState) => {
    axios.get('https://randomuser.me/api/',
      // { headers: { Authorization: 'Bearer '+await AsyncStorage.getItem('token')}}
    )
    .then(function (response) {
      dispatch({ type: SET_SAMPLE, payload: response.results })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
