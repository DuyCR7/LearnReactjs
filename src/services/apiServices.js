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

// dạng x-www-form-urlencoded
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

// GET Quiz
const getQuizByUser = () => {
  return axios.get("api/v1/quiz-by-participant");
}

// GET data quiz
const getDataQuiz = (quizId) => {
  return axios.get(`api/v1/quiz-with-qa/${quizId}`);
}

// POST submit quiz
const postSubmitQuiz = (data) => {
  return axios.post("api/v1/quiz-submit", {...data}); // dạng raw data
}

// POST Create new quiz
const postCreateNewQuiz = (name, description, difficulty, quizImage) => {
  const data = new FormData();
  data.append("name", name);
  data.append("description", description);
  data.append("difficulty", difficulty);
  data.append("quizImage", quizImage);

  return axios.post("api/v1/quiz", data);
}

// GET All Quizzes
const getAllQuizzesForAdmin = () => {
  return axios.get("api/v1/quiz/all");
}

const deleteQuizForAdmin = (id) => {
  return axios.delete(`/api/v1/quiz/${id}`);
}

const putUpdateQuizForAdmin = (id, name, description, difficulty, image) => {
  const data = new FormData();
  data.append('id', id);
  data.append('description', description);
  data.append('name', name);
  data.append('difficulty', difficulty);
  data.append('quizImage', image);
  return axios.put('api/v1/quiz', data);
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
  getDataQuiz,
  postSubmitQuiz,
  postCreateNewQuiz,
  getAllQuizzesForAdmin,
  deleteQuizForAdmin,
  putUpdateQuizForAdmin
};