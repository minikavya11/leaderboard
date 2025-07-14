import axios from "axios";

const API = axios.create({
  baseURL: "https://leaderboard-backend-ol9f.onrender.com/api", // backend running here
});

export default API;
