import axios from "axios";

import authActions from "./authActions";
axios.defaults.baseURL =  "https://goit-phonebook-api.herokuapp.com"

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

// const register = (credentials) => (dispatch) => {
//   dispatch(authActions.registerRequest());

//   axios
//     .post('/users/signup', credentials)
//     .then((response) =>{      // token.set(response.data.token);
//       console.log(response)
//       dispatch(authActions.registerSuccess(response.data)) 
//     })
//     .catch((error) => dispatch(authActions.registerError(error)));
// };
const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

// const logIn = (credentials) => (dispatch) => {
//   dispatch(authActions.loginRequest());
//   axios
//     .get("/users/login", credentials)
//     .then((response) => {
//       token.set(response.data.token);
//       dispatch(authActions.loginSuccess(response.data));
//     })
//     .catch((error) => dispatch(authActions.loginError(error)));
// };

// const logOut = () => (dispatch) => {
//   dispatch(authActions.logoutRequest());
//   axios
//     .delete("/users/logout")
//     .then(() => {
//       token.unset();
//       dispatch(authActions.logoutSuccess());
//     })
//     .catch((error) => dispatch(authActions.logoutError(error)));
// };

export default { register,
  //  logIn, logOut 
  };
