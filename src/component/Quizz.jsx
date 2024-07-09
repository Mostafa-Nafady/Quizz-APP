import { useState } from "react";

function Quizz() {
  const QUESTIONS_ARRAY = ["Ques1", "QUESTION2", "QUestion3"];
  const [currentQuestion, setCurrentQuestion] = useState(QUESTIONS_ARRAY[0]);
  const [remainQuestions, setRemainQuestions] = useState(QUESTIONS_ARRAY);
  const [answers, setAnswers] = useState("Array of answers ");

  function HandelSubmit() {
    console.log("click");
    /*go to the next Question */
    setRemainQuestions((prev) => {
      const updatedQuestionsArray = prev.filter(
        (ques, idx) => ques !== currentQuestion
      );
      if (prev.length) setCurrentQuestion(updatedQuestionsArray[0]);
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
