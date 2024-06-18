import { useState, useEffect } from "react";
import Select from "react-select";
import {
  getAllQuizzesForAdmin,
  getAllUsers,
  postAssignQuiz,
} from "../../../../services/apiServices";
import { toast } from "react-toastify";

const AssignQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState({});

  const [listUser, setListUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    fetchQuiz();
  }, [props.listQuiz]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchQuiz = async () => {
    let response = await getAllQuizzesForAdmin();
    if (response && response.EC === 0) {
      let newQuizzes = response.DT.map((item) => {
        return {
          value: item.id,
          label: `${item.id}. ${item.name}`,
        };
      });
      setListQuiz(newQuizzes);
    }
  };

  const fetchUser = async () => {
    let response = await getAllUsers();
    if (response && response.EC === 0) {
      let newUsers = response.DT.map((item) => {
        return {
          value: item.id,
          label: `${item.id}. ${item.email}`,
        };
      });
      setListUser(newUsers);
    }
  };

  const handleAssign = async () => {
    let response = await postAssignQuiz(selectedQuiz.value, selectedUser.value);
    if(response && response.EC === 0){
        toast.success(response.EM);
    } else {
        toast.error(response.EM);
    }
  };

  return (
    <div className="assign-quiz-container row">
      <div className="col-6 form-group">
        <label className="mb-2">Select Quiz:</label>
        <Select
          options={listQuiz}
          value={selectedQuiz}
          defaultValue={selectedQuiz}
          onChange={setSelectedQuiz}
        />
      </div>
      <div className="col-6 form-group">
        <label className="mb-2">Select User:</label>
        <Select
          options={listUser}
          value={selectedUser}
          defaultValue={selectedUser}
          onChange={setSelectedUser}
        />
      </div>
      <div>
        <button className="btn btn-warning mt-3" onClick={() => handleAssign()}>
          Assign
        </button>
      </div>
    </div>
  );
};

export default AssignQuiz;
