import { useState } from "react";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdateQuiz";

const TableQuiz = (props) => {
  const {listQuiz, fetchQuiz} = props;
  const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
  const [dataDelete, setDataDelete] = useState({});
  const [showModalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const handleDelete = (quiz) => {
    setDataDelete(quiz);
    setShowModalDeleteQuiz(true);
  };

  const handleUpdate = (quiz) => {
    setDataUpdate(quiz);
    setShowModalUpdateQuiz(true);
  };

  return (
    <>
      <h3 className="text-left">List Quiz</h3>
      <table className="table table-bordered table-hover my-2">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listQuiz &&
            listQuiz.map((item, index) => {
              return (
                <tr key={`table-quiz-${item.id}`}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td style={{ display: "flex", gap: "10px" }}>
                    <button
                      className="btn btn-sm btn-warning mr-3"
                      onClick={() => handleUpdate(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalDeleteQuiz
        showModalDeleteQuiz={showModalDeleteQuiz}
        setShowModalDeleteQuiz={setShowModalDeleteQuiz}
        dataDelete={dataDelete}
        fetchQuiz={fetchQuiz}
      />

      <ModalUpdateQuiz
        showModalUpdateQuiz={showModalUpdateQuiz}
        setShowModalUpdateQuiz={setShowModalUpdateQuiz}
        dataUpdate={dataUpdate}
        fetchQuiz={fetchQuiz}
        setDataUpdate={setDataUpdate}
      />
    </>
  );
};

export default TableQuiz;
