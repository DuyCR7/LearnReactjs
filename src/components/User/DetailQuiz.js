import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz, postSubmitQuiz } from "../../services/apiServices";
import "./DetailQuiz.scss";
import Question from "./Question";
import _ from "lodash";
import ModalResult from "./ModalResult";
import RightContent from "./Content/RightContent";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  const location = useLocation();

  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);

  const [showModalResult, setShowModalResult] = useState(false);
  const [dataModalResult, setDataMoDalResult] = useState({});

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  const fetchQuestions = async () => {
    let response = await getDataQuiz(quizId);
    let data = response.DT.qa;
    data.forEach((item) => {
        let temps = item.answers;
        temps.forEach((temp) => {
            temp.isSelected = false;
        })
    })
    setDataQuiz(data);
  };

//   console.log("check data quiz", dataQuiz);

  const handlePrev = () => {
    if (index - 1 < 0){
        return;
    }
    setIndex(index - 1);
  }

  const handleNext = () => {
    if (dataQuiz && dataQuiz.length > index + 1){
        setIndex(index + 1);
    }
  }

  const handleCheckboxParent = (answerId, questionId) => {
    let dataQuizClone = _.cloneDeep(dataQuiz);
    let question = dataQuizClone.find((item) => +item.id === +questionId);
    if(question && question.answers){
        question.answers = question.answers.map((item) => {
            if(+item.id === +answerId){
                item.isSelected = !item.isSelected;
            }
            return item;
        })

    }
    let index = dataQuizClone.findIndex(item => +item.id === +questionId);
    if(index > -1){
        dataQuizClone[index] = question;
        setDataQuiz(dataQuizClone);
    }
  }

  const handleFinishQuiz = async () => {
    // {
    //     "quizId": 1,
    //     "answers": [
    //         { 
    //             "questionId": 1,
    //             "userAnswerId": [3, 4]
    //         },
    //         { 
    //             "questionId": 2,
    //             "userAnswerId": [6]
    //         }
    //     ]
    // }

    console.log("Check data before finish quiz", dataQuiz);
    let payload = {
        quizId: +quizId,
        answers: []
    };
    let answers =[];
    if(dataQuiz && dataQuiz.length > 0) {
        dataQuiz.forEach((question) => {
            let questionId = question.id;
            let userAnswerId = [];

            // todo: userAnswerId
            question.answers.forEach((answer) => {
                if(answer.isSelected){
                    userAnswerId.push(+answer.id);
                }
            });

            answers.push({
                questionId: +questionId,
                userAnswerId: userAnswerId
            })
        })

        payload.answers = answers;
        // console.log("final payload: ", payload);
        // submit quiz
        let response = await postSubmitQuiz(payload);
        console.log("response: ", response);
        if(response && response.EC === 0){
            setDataMoDalResult({
                countCorrect: response.DT.countCorrect,
                countTotal: response.DT.countTotal,
                quizData: response.DT.quizData
            });
            setShowModalResult(true);
        } else {
            console.log("fail");
        }
    }
  }

  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId}:{location?.state?.quizTitle}
        </div>
        <hr />
        <div className="q-body">
          <img />
        </div>
        <div className="q-content">
          <Question
            index={index}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
            handleCheckboxParent={handleCheckboxParent}
          />
        </div>
        <div className="footer">
          <button className="btn btn-secondary" onClick={() => handlePrev()}>Prev</button>
          <button className="btn btn-primary" onClick={() => handleNext()}>Next</button>
          <button className="btn btn-warning" onClick={() => handleFinishQuiz()}>Finish</button>
        </div>
      </div>
      <div className="right-content">
        <RightContent 
          dataQuiz={dataQuiz}
        />
      </div>
      <ModalResult
        showModalResult={showModalResult}
        setShowModalResult={setShowModalResult}
        dataModalResult={dataModalResult}
      />
    </div>
  );
};

export default DetailQuiz;
