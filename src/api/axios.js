// src/services/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5173/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
