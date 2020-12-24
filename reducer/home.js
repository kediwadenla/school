import { SET_SAMPLE } from '../src/actions/actionType';

let initialState = {
  userData: {name: {}},
  isLoading: true
}

export default quotes = (state = initialState, action) => {
  switch (action.type) {
      case SET_SAMPLE:
          return Object.assign({}, state, { userData: action.payload})
      default:
          return state
  }
}