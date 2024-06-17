import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";

const DetailQuiz = (props) => {

    const params = useParams();
    const quizId = params.id;

    useEffect(() => {
        fetchQuestions();
    }, [quizId]);

    const fetchQuestions = async () => {
        let response = await getDataQuiz(quizId);
        console.log(response);
    }

    return (
        <div className="detail-quiz-container">
            <h1>Detail Quiz</h1>
        </div>
    );
}

export default DetailQuiz;