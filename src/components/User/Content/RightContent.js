import CountDown from "./CountDown";
import { useRef } from "react";

const RightContent = (props) => {
    const refDiv = useRef([]);
  const { dataQuiz, handleFinishQuiz, setIndex } = props;

  const onTimeUp = () => {
    handleFinishQuiz();
  };

//   console.log('dataQuiz: ', dataQuiz);

  const getClassQuestion = (index, question) => {
    // console.log(index, question);
    // Check answered
    if (question && question.answers.length > 0) {
      let isAnswered = question.answers.find(
        (answer) => answer.isSelected === true
      );
      if (isAnswered) {
        return "question selected";
      }
    }
    return "question";
  };

  const handleClickQuestion = (question, index) => {
    if (refDiv.current) {
        // console.log(refDiv.current);
        refDiv.current.forEach((item) => {
            if (item && item.className === "question clicked") {
                item.className = "question";
            }
        })
    }
    if (question && question.answers.length > 0) {
        let isAnswered = question.answers.find(
          (answer) => answer.isSelected === true
        );
        if (isAnswered) {
            props.setIndex(index);
            return;
        }
    }

    refDiv.current[index].className = "question clicked";
    props.setIndex(index);
  }

  return (
    <>
      <div className="main-timer">
        <CountDown onTimeUp={onTimeUp} />
      </div>
      <div className="main-question">
        {dataQuiz &&
          dataQuiz.length > 0 &&
          dataQuiz.map((item, index) => {
            return (
              <div
                onClick={() => handleClickQuestion(item, index)}
                className={getClassQuestion(index, item)}
                key={item.id}
                ref={element => refDiv.current[index] = element}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RightContent;
