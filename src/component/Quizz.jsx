import { useState } from "react";
import { Questions } from "./Questions";
function Quizz() {
  //   const QUESTIONS_ARRAY = ["Ques1", "QUESTION2", "QUestion3"];
  const [currentQuestion, setCurrentQuestion] = useState(Questions[0].text);
  const [remainQuestions, setRemainQuestions] = useState(Questions);
  const [answers, setAnswers] = useState("Array of answers ");

  function HandelSubmit() {
    console.log("click");
    /*go to the next Question */
    setRemainQuestions((prev) => {
      const updatedQuestionsArray = prev.filter(
        (ques, idx) => ques.text !== currentQuestion
      );
      if (prev.length) setCurrentQuestion(updatedQuestionsArray[0].text);
      return updatedQuestionsArray;
    });

    /*store the Answer and Question*/
  }
  return (
    <div>
      {remainQuestions.length ? (
        <p>{currentQuestion}</p>
      ) : (
        <p>the End Of Ques</p>
      )}
      <button onClick={HandelSubmit}>Submit</button>
    </div>
  );
}
export default Quizz;
