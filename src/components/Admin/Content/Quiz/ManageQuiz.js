import { useState, useEffect } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
import { postCreateNewQuiz } from "../../../../services/apiServices";
import { toast } from "react-toastify";
import TableQuiz from "./TableQuiz";
import { Accordion } from "react-bootstrap";
import { getAllQuizzesForAdmin } from "../../../../services/apiServices";

const ManageQuiz = (props) => {
  const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
  ];

  const [listQuiz, setListQuiz] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    let response = await getAllQuizzesForAdmin();
    if (response && response.EC === 0) {
      setListQuiz(response.DT);
    }
  };

  const handelChangeFile = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmitQuiz = async () => {
    // validate
    if (!name || !description || !type?.value || !image) {
      toast.error("Please fill all fields");
      return;
    }

    let response = await postCreateNewQuiz(
      name,
      description,
      type?.value,
      image
    );

    if (response && response.EC === 0) {
      toast.success(response.EM);
      setName("");
      setDescription("");
      setType("");
      setImage(null);
      fetchQuiz();
    } else {
      toast.error(response.EM);
    }
  };

  return (
    <div className="quiz-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Manage Quizzes</Accordion.Header>
          <Accordion.Body>
            <div className="add-new">
              <fieldset className="border round-3 p-3">
                <legend className="float-none w-auto px-3">
                  <b>Add new Quiz:</b>
                </legend>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <label>Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                  <label>Description</label>
                </div>
                <div className="form-floating my-3">
                  <Select
                    options={options}
                    placeholder="Quiz Type"
                    value={type}
                    defaultValue={type}
                    onChange={setType}
                  />
                </div>
                <div className="more-actions form-group">
                  <label htmlFor="uploadImage" className="form-label">
                    Upload Image
                  </label>
                  <div className="input-group">
                    <input
                      type="file"
                      className="form-control"
                      id="uploadImage"
                      onChange={(event) => handelChangeFile(event)}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSubmitQuiz()}
                  >
                    Save
                  </button>
                </div>
              </fieldset>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <hr />
      <div className="list-detail">
        <TableQuiz
          listQuiz={listQuiz}
          fetchQuiz={fetchQuiz}
        />
      </div>
    </div>
  );
};

export default ManageQuiz;
