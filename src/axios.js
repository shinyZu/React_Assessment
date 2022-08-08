import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  //header
  //timeout
});

export default instance;
