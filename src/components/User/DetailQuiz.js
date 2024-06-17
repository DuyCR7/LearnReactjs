import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
import "./DetailQuiz.scss";

const DetailQuiz = (props) => {

    const params = useParams();
    const quizId = params.id;
    const location = useLocation();

    useEffect(() => {
        fetchQuestions();
    }, [quizId]);

    const fetchQuestions = async () => {
        let response = await getDataQuiz(quizId);
        // console.log(response);
    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}:{location?.state?.quizTitle}
                </div>
                <hr/>
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <div className="question">
                        Question 1: are you ready?
                    </div>
                    <div className="answer">
                        <div className="a-child">A. shsfap</div>
                        <div className="a-child">B. shsfap</div>
                        <div className="a-child">C. shsfap</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary">Prev</button>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    );
}

export default DetailQuiz;