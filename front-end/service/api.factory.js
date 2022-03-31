import axios from "axios";

let API_URL = "pozter-demo.herokuapp.com";
if (window.location.hostname === "localhost") {
  API_URL = "http://localhost:8000";
}

export default {
  get dataApi() {
    return axios.create({
      baseURL: API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
