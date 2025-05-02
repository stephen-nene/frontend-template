import axios from "axios";
const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/";
// const API_URL = "http://127.0.0.1:8000/api/v1.0/"; http://127.0.0.1:8000/profile/auth/login


// console.log(API_URL)

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// for sending images now 

const apiClient2 = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
})

export  {apiClient, apiClient2}
// api/v1.0/user