import { useState } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";

const ManageQuiz = (props) => {
  const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
  ];

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("EASY");
  const [image, setImage] = useState(null);

  const handelChangeFile = (event) => {

  }

  return (
    <div className="quiz-container">
      <div className="title">Manage Quizzes</div>
      <hr />
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
            <Select options={options} placeholder="Quiz Type" value={type} />
          </div>
          <div className="more-actions form-group">
            <label htmlFor="uploadImage" className="form-label">
              Upload Image
            </label>
            <div className="input-group">
              <input type="file" className="form-control" id="uploadImage" onChange={(event) => handelChangeFile(event)} />
            </div>
          </div>
        </fieldset>
      </div>
      <div className="list-detail">table</div>
    </div>
  );
};

export default ManageQuiz;
