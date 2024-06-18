import CountDown from "./CountDown";

const RightContent = (props) => {
    
    const {dataQuiz, handleFinishQuiz} = props;

    const onTimeUp = () => {
        handleFinishQuiz();
    }

    return (
        <>
            <div className="main-timer">
                <CountDown
                    onTimeUp={onTimeUp}
                />
            </div>
            <div className="main-question">
                {dataQuiz && dataQuiz.length > 0 &&
                dataQuiz.map((item, index) => {
                    return (
                        <div className="question" key={item.id}>
                            {index + 1}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RightContent;