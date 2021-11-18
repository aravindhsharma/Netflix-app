// import axios
import axios from "axios";

// create an axios instance
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// instance.get("/foo-bar");

// https://api.themoviedb.org/3/foo-bar

export default instance;
