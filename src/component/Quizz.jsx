import { useState } from "react";
import { Questions } from "./Questions";
function Quizz() {
  //   const QUESTIONS_ARRAY = ["Ques1", "QUESTION2", "QUestion3"];
  const [currentQuestion, setCurrentQuestion] = useState(Questions[0]);
  const [remainQuestions, setRemainQuestions] = useState(Questions);
  const [currentAnswers, setCurrentAnswers] = useState({
    ANSWER: "",
    checkedIdx: "",
  });

  const [AnswersArray, setAnswersArray] = useState([]);
  console.log("Questions", Questions);
  console.log("currentAnswers", currentAnswers);
  console.log("AnswersArray", AnswersArray);
  function HandelSubmit() {
    console.log("click");
    /*go to the next Question */
    setRemainQuestions((prev) => {
      setCurrentAnswers({
        ANSWER: "",
        checkedIdx: "",
      });
      const updatedQuestionsArray = prev.filter(
        (ques, idx) => ques.text !== currentQuestion.text
      );
      if (prev.length) setCurrentQuestion(updatedQuestionsArray[0]);
      return updatedQuestionsArray;
    });
    setAnswersArray((prev) => [
      ...prev,
      { quesId: currentQuestion.id, Ans: currentAnswers.ANSWER },
    ]);
  }
  function checkHaandler(QuesId, answerIdx) {
    console.log("checkHaandler");
    console.log("QuesId &&& answerIdx ", QuesId, answerIdx);

    if (currentAnswers.ANSWER == "") {
      setCurrentAnswers((prev) => {
        console.log("currentAnswers", {
          checkedIdx: answerIdx,
          ANSWER: currentQuestion.answers[answerIdx],
        });

        return {
          checkedIdx: answerIdx,
          ANSWER: currentQuestion.answers[answerIdx],
        };
      });
      const answersTOuncheck = currentQuestion.answers.filter(
        (answer, idx) => idx !== answerIdx
      );
      console.log("answersTOuncheck", answersTOuncheck);
    }
    if (currentAnswers.ANSWER !== "") {
      setCurrentAnswers({
        ANSWER: "",
        checkedIdx: "",
      });
    }
  }

  /*store the Answer and Question*/

  return (
    <div>
      {remainQuestions.length ? (
        <div>
          <p>{currentQuestion.text}</p>
          <div className="flex">
            {currentQuestion.answers &&
              currentQuestion.answers.map((answer, idx) => {
                return (
                  <div key={idx}>
                    <label>{answer}</label>
                    <input
                      type="checkbox"
                      checked={
                        currentAnswers.checkedIdx === idx &&
                        currentAnswers.ANSWER
                      }
                      onChange={() => checkHaandler(currentQuestion.id, idx)}
                      disabled={
                        currentAnswers.checkedIdx !== idx &&
                        currentAnswers.ANSWER
                      }
                    />
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <p>the End Of Ques</p>
      )}
      <button onClick={HandelSubmit}>Submit</button>
    </div>
  );
}
export default Quizz;
