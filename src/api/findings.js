import axios from "axios";
import { apiUrl } from "../constants/api";

export const getFindings = async () => {
  const { data } = await axios.get(`${apiUrl}/findings`);
  return data.data;
};
