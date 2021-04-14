import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-sperezc06.herokuapp.com/",
});

export default instance;
