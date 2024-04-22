import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Question from "./components/questions";
import { IQuestion } from "./interfaces/question/question";
import { allQuestionsAndChoices } from "./constants/question/question.constant";

function App() {
  const alreadyHasQuestion: any = {};

  // This function will get random question in all questions and not duplicate question
  const getRandomNumberWithMinAndMaxAndNotDuplicateQuestion = (
    min: number,
    max: number
  ) => {
    const randomQuestionNumber = Math.floor(Math.random() * (max - min) + min);
    if (alreadyHasQuestion[randomQuestionNumber.toString()]) {
      getRandomNumberWithMinAndMaxAndNotDuplicateQuestion(min, max);
    }
    alreadyHasQuestion[randomQuestionNumber.toString()] = randomQuestionNumber;
    return randomQuestionNumber;
  };

  const questionsAndChoices = [];

  for (let i = 0; i < 20; ) {
    const randomQuestionNumber =
      getRandomNumberWithMinAndMaxAndNotDuplicateQuestion(
        0,
        allQuestionsAndChoices.length
      );
    questionsAndChoices.push(allQuestionsAndChoices[randomQuestionNumber]);
    i++;
  }

  return (
    <div className="App">
      {questionsAndChoices.map((questionAndAnswer: IQuestion) => {
        return (
          <Question
            question={questionAndAnswer.question}
            choices={questionAndAnswer.choices}
          />
        );
      })}
    </div>
  );
}

export default App;
