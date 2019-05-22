import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions';

const initialState = {
	items: [],
  cards: [],
  ygoCards: [],
  pokeCards: [],
  loggingIn: false,
  fetchingItems: false,
  updatingItem: false,
  deletingItem: false,
  loggedIn: false,
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
    default:
      return state;
  }
}

export default reducer;