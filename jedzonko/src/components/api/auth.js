import axios from "axios";

const API_URL = "http://127.0.0.1:8000/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(`${API_URL + "login"}`, {
        username,
        password
      })
      .then(response => {
        console.log("RESPOONSE: ", response);
        console.log("DATA TOKEN", response.data.token);
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }

        return response.data;
      });
  }

  logout() {
    // let user = JSON.parse(localStorage.getItem('user'));
    // return axios
    // .get(`${API_URL + "logout"}`, {
    //   user
    // })
    // .then(response => {
    //   console.log("RESPONSE: ", response);
    //   localStorage.removeItem("user");
    //   return response;
    // });
     localStorage.removeItem("user");
  }

  register(email, username, password, password2, first_name, last_name) {
    return axios.post(`${API_URL + "register"}`, {
      email,
      username,
      password,
      password2,
      last_name,
      first_name
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();