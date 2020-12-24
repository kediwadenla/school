import { LOADING, DONE_LOADING } from '../src/actions/actionType';

let initialState = {
  isLoading: false
}

export default loading = (state = initialState, action) => {
  switch (action.type) {
      case LOADING:
          return Object.assign({}, state, { isLoading: true })
      case DONE_LOADING:
          return Object.assign({}, state, { isLoading: false })
      default:
          return state
  }
}
