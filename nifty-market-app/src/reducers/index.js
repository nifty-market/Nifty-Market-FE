import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions';

const initialState = {
	items: [{name: 'name', description: 'description', img: 'src', id: 0}, 
		{name: 'name', description: 'description', img: 'src', id: 1}, 
		{name: 'name', description: 'description', img: 'src', id: 2}, 
		{name: 'name', description: 'description', img: 'src', id: 3},
		{name: 'name', description: 'description', img: 'src', id: 4}, 
		{name: 'name', description: 'description', img: 'src', id: 5}, 
		{name: 'name', description: 'description', img: 'src', id: 6},
		{name: 'name', description: 'description', img: 'src', id: 7}, 
		{name: 'name', description: 'description', img: 'src', id: 8}, 
		{name: 'name', description: 'description', img: 'src', id: 9},
		{name: 'name', description: 'description', img: 'src', id: 10}, 
		{name: 'name', description: 'description', img: 'src', id: 11}, 
		{name: 'name', description: 'description', img: 'src', id: 12},
		{name: 'name', description: 'description', img: 'src', id: 13}, 
		{name: 'name', description: 'description', img: 'src', id: 14},
		{name: 'name', description: 'description', img: 'src', id: 15}, 
		{name: 'name', description: 'description', img: 'src', id: 16}, 
		{name: 'name', description: 'description', img: 'src', id: 17}, 
	],
  mtgCards: [],
  ygoCards: [],
  pokeCards: [],
  loggingIn: false,
  fetchingItems: false,
  updatingItem: false,
  deletingItem: false,
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
        Items: action.payload
      };
    default:
      return state;
  }
}

export default reducer;