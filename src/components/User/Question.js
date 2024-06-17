import _ from "lodash";

const Question = (props) => {
  const { index, data } = props;
  if (_.isEmpty(data)) {
    return (<></>);
  }

  return (
    <>
      {data.imageFile && (
        <div className="q-image">
          <img
            src={`data:image/jpeg;base64,${data.imageFile}`}
            alt={data.imageFile}
          />
        </div>
      )}
      <div className="question">
        Question {index + 1}: {data.description}
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length > 0 &&
          data.answers.map((answer) => {
            return (
              <div key={`answer-${answer.id}`} className="a-child">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">
                    {answer.description}
                  </label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Question;
