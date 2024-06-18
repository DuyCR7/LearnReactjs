import { useState } from "react";
import Select from "react-select";
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import "./Questions.scss";

const Questions = (props) => {
  const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
  ];

  const [selectedQuiz, setSelectedQuiz] = useState({});

  return (
    <div className="questions-container">
      <div className="title">Manage Questions</div>
      <div className="add-new-question">
        <div className="col-6 form-group">
          <Select
            options={options}
            value={selectedQuiz}
            defaultValue={selectedQuiz}
            onChange={setSelectedQuiz}
          />
        </div>

        <div className="mt-3">
          <h6>Add new question</h6>
        </div>

        <div>
          <div className="mt-3 questions-content">
            <div className="form-floating description">
              <input
                type="text"
                className="form-control"
                placeholder="Description"
              />
              <label>Description</label>
            </div>
            <div className="group-upload">
              <label className="label-up">Upload Image</label>
              <input type="file" hidden />
              <span>0 file is uploaded</span>
            </div>
            <div className="btn-add">
              <span>
                <BsFillPatchPlusFill className="icon-add" />
              </span>
              <span>
                <BsFillPatchMinusFill className="icon-remove" />
              </span>
            </div>
          </div>

          <div className="answers-content">
            <input className="form-check-input iscorrect" type="checkbox" />
            <div className="form-floating answer-name">
              <input
                type="text"
                className="form-control"
                placeholder="Answer Name"
              />
              <label>Answer 1</label>
            </div>
            <div className="btn-group">
              <span>
                <AiFillPlusCircle className="icon-add" />
              </span>
              <span>
                <AiOutlineMinusCircle className="icon-remove" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
