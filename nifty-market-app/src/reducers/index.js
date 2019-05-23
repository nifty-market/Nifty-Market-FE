import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_USER_DATA,
} from '../actions';

const initialState = {
  username: '',
  userItems: [],
  wishlist: [],
  transactions: [],
	items: [],
  loggingIn: false,
  fetchingItems: false,
  updatingItem: false,
  deletingItem: false,
  loggedIn: localStorage.getItem('token'),
  errorStatusCode: null,
  token: localStorage.getItem('token'),
  error: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        token: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.error
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        token: ''
      };
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingItems: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingItems: false,
        items: [...action.payload.cards,...action.payload.videogames]
      };
    case ADD_USER_DATA:
      return {
        ...state,
        username: action.payload.username,
        userItems: [...action.payload.cards,...action.payload.videogames],
        wishlist: [...action.payload.wishlist.products],
        transactions: action.payload.transactions
      };
    default:
      return state;
  }
}

export default reducer;