import { delay } from "lodash";
import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
  // sử dụng file nên truyền qua formdata
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);

  return axios.post("api/v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);

  return axios.put("api/v1/participant", data);
};

const deleteUser = (id) => {
  return axios.delete("api/v1/participant", { data: { id: id } });
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

// Login
const postLogin = (email, password) => {
  return axios.post("api/v1/login", { email: email, password: password, delay: 2000 });
};

const postRegister = (email, password, username) => {
  return axios.post("api/v1/register", {
    email: email,
    password: password,
    username: username,
  });
};

// Get Quiz
const getQuizByUser = () => {
  return axios.get("api/v1/quiz-by-participant");
}

// Get data quiz
const getDataQuiz = (quizId) => {
  return axios.get(`api/v1/quiz-with-qa/${quizId}`);
}

export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
  getQuizByUser,
  getDataQuiz
};
