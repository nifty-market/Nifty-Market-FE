import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const login = creds => dispatch => {
  creds = { ...creds, "grant_type": "password" }
  // dispatch({ type: LOGIN_START });
  return axios
	  .request({
	  	url: "http://java-nifty.herokuapp.com/oauth/token",
	  	method: "post",
	  	withCredentials: true,
	  	auth: {
      	username: "lambda-client",
      	password: "lambda-secret",
    	},
    	data: Object.keys(creds).map(key => key + '=' + creds[key]).join('&')
    })
	  .then(res => {
	    // localStorage.setItem('token', res.data.access_token);
	    // dispatch({ type: LOGIN_SUCCESS, payload: res.data.access_token });
	    console.log(res)
	  })
	  .catch(err => {
	  	// dispatch({ type: LOGIN_FAILURE, error: err.response});
	    console.log(err)
	  })
};

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get('https://java-nifty.herokuapp.com/login',
    	{ headers: {'Authorization': `bearer + ${localStorage.getItem('token')}`} })
    .then(res => {
      // dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch(err => {
      console.log(err)
    });
};