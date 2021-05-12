import axios from "axios";
import { apiUrl } from "../constants/api";

export const me = async () => {
  const { data } = await axios.get(`${apiUrl}/users/me`, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
  return data.data;
};

export const authenticate = async signinInfo => {
  const { data } = await axios.post(`${apiUrl}/users/authenticate`, signinInfo);
  return data.data;
};

export const validateEmail = async validateInfo => {
  const { data } = await axios.post(
    `${apiUrl}/users/validate-email`,
    validateInfo
  );
  return data.data;
};
