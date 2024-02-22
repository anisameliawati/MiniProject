import axios from "axios";

export const axiosInstance = () => {
  const token = localStorage.getItem("user");
  return axios.create({
    baseURL: "http://localhost:8005",
    headers: {
      Authorization: token,
    },
  });
};

export const axiosInstanceSSR = () => {
  return axios.create({
    baseURL: "http://localhost:8005",
  });
};