import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiServices";
import "./ListQuiz.scss";
import { useNavigate } from "react-router-dom";

const ListQuiz = (props) => {
  const navigate = useNavigate();
  const [arrQuiz, setArrQuiz] = useState([]);
  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = async () => {
    const response = await getQuizByUser();
    if (response && response.EC === 0) {
      setArrQuiz(response.DT);
    }
  };

  return (
    <div className="list-quiz-container container">
      {arrQuiz &&
        arrQuiz.length > 0 &&
        arrQuiz.map((quiz, index) => {
          return (
            <div
              key={`${quiz.id}-quiz`}
              className="card"
              style={{ width: "18rem" }}
            >
              <img
                src={`data:image/jpeg;base64,${quiz.image}`}
                className="card-img-top"
                alt={quiz.image}
              />
              <div className="card-body">
                <h5 className="card-title">Quiz {quiz.id}</h5>
                <p className="card-text">{quiz.description}</p>
                <button
                  href="#"
                  className="btn btn-primary"
                  onClick={() =>
                    navigate(`/quiz/${quiz.id}`, {
                      state: { quizTitle: quiz.description },
                    })
                  }
                >
                  Start now
                </button>
              </div>
            </div>
          );
        })}

      {arrQuiz && arrQuiz.length === 0 && (
        <div>
          <h2>You don't have any quiz now ...</h2>
        </div>
      )}
    </div>
  );
};

export default ListQuiz;
