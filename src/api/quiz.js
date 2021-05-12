import axios from "axios";
import { apiUrl } from "../constants/api";

export const takeQuiz = async quizInfo => {
  const { data } = await axios.post(`${apiUrl}/quiz/take`, quizInfo);
  return data.data;
};

export const getUserQuiz = async () => {
  const { data } = await axios.get(`${apiUrl}/quiz/user-quiz`, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
  return data.data;
};
