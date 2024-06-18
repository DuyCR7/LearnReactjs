import _ from "lodash";
import { useState } from "react";
import Lightbox from "react-18-image-lightbox";

const Question = (props) => {
  const { index, data } = props;

  const [isPreviewImage, setIsPreviewImage] = useState(false);


  if (_.isEmpty(data)) {
    return (<></>);
  }

  const handleCheckbox = (event, aId, qId) => {
    // console.log('data props: ', aId, qId);
    props.handleCheckboxParent(aId, qId);
  }

  return (
    <>
      {data.imageFile ?
        <div className="q-image">
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => setIsPreviewImage(true)}
            src={`data:image/jpeg;base64,${data.imageFile}`}
            alt={data.imageFile}
          />
          {isPreviewImage === true && (
          <Lightbox
            mainSrc={`data:image/jpeg;base64,${data.imageFile}`}
            imageTitle={'Question Image'}
            onCloseRequest={() => setIsPreviewImage(false)}
          />
        )}
        </div>
        :
        <div className="q-image">
          
        </div>
      }
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
                    checked={answer.isSelected}
                    onChange={(event) => handleCheckbox(event, answer.id, data.id)}
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
