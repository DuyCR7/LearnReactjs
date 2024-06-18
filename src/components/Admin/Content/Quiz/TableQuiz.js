import { useEffect, useState } from "react";
import { getAllQuizzesForAdmin } from "../../../../services/apiServices";

const TableQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    let response = await getAllQuizzesForAdmin();
    if (response && response.EC === 0) {
      setListQuiz(response.DT);
    }
  };

  return (
    <>
    <h3 className="text-left">List Quiz</h3>
      <table className="table table-bordered table-hover mt-2">
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
                    <button className="btn btn-sm btn-warning mr-3">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default TableQuiz;
