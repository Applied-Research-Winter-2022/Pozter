import axios from "axios";

export default {
  get dataApi() {
    return axios.create({
      baseURL: "http://localhost:8080",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
