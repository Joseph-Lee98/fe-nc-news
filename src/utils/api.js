import axios from "axios";

export const NCNewsApi = axios.create({
  baseURL: "https://be-nc-news-d1cb.onrender.com/api",
});