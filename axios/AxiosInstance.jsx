import axios from "axios";

// Set config defaults when creating the instance
const baseURL = "http://127.0.0.1:8000/api/";

export const axiosInstance = axios.create({
  baseURL,
});
