export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const ADD_USER_DATA = 'ADD_USER_DATA';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';

export const login = creds => dispatch => {
  creds = { "grant_type": "password", ...creds }
  let queryString = Object.keys(creds).map(key => key + '=' + creds[key]).join('&');
  dispatch({ type: LOGIN_START });
  return fetch("https://java-nifty.herokuapp.com/oauth/token", {
	  body: queryString,
	  headers: {
	    Authorization: "Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0",
	    "Content-Type": "application/x-www-form-urlencoded"
	  },
	  method: "POST"
	}).then(res => res.json())
	.then(data => {
		console.log(data);
		if ('access_token' in data) {
			localStorage.setItem('token', data.access_token);
			dispatch({ type: LOGIN_SUCCESS, payload: data.access_token });
			fetch("https://java-nifty.herokuapp.com/login", {
				  headers: {
				    Authorization: `Bearer ${localStorage.getItem('token')}`,
				    "Content-Type": "application/x-www-form-urlencoded"
				  },
				  method: "GET"
				}).then(res => res.json()).then( data => {
					console.log(data)
					dispatch({ type: ADD_USER_DATA, payload: data });
				})
		} else {
			dispatch({ type: LOGIN_FAILURE, payload: data });
		}
	})
};

export const getUserData = () => dispatch => {
	return fetch("https://java-nifty.herokuapp.com/login", {
		  headers: {
		    Authorization: `Bearer ${localStorage.getItem('token')}`,
		    "Content-Type": "application/x-www-form-urlencoded"
		  },
		  method: "GET"
		}).then(res => res.json()).then( data => {
			console.log(data)
			dispatch({ type: ADD_USER_DATA, payload: data });
		})
}

export const logout = () => dispatch => {
	localStorage.removeItem('token');
	dispatch({ type: LOGOUT });
}

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  fetch("https://java-nifty.herokuapp.com/market", {
  	method: "GET"
	}).then(res => res.json())
	.then(data => {
		console.log(data);
		dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
	})
	.catch(console.log);
};

export const newCard = card => {
	fetch("https://java-nifty.herokuapp.com/post/card", {
	  method: "POST",
	  body: card
	}).then(res => res.json()).then(data => console.log(data)).catch(console.log);
}

export const updateCard = (cardid, params) => {
	fetch(`https://java-nifty.herokuapp.com/playingcards/update/${cardid}`, {
	  method: "PUT",
	  body: params
	}).then(res => res.json()).then(data => console.log(data)).catch(console.log);
}

export const deleteCard = cardid => {
	fetch(`https://java-nifty.herokuapp.com/playingcards/delete/card/${cardid}`, {
	  method: "DELETE"
	}).then(res => res.json()).then(data => console.log(data)).catch(console.log);
}

export const newTransaction = newTrans => {
	fetch("https://java-nifty.herokuapp.com/transactions/new", {
		method: "POST",
		body: newTrans
}).then(res => res.json()).then(data => console.log(data)).catch(console.log);
}