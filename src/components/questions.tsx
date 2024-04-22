import React, { useState } from "react";
import { IQuestion } from "../interfaces/question/question";

const Question = ({ question, choices }: IQuestion) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const handleChoiceSelect = (choice: string) => {
    setSelectedChoice(choice);
  };

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {choices.map((choice, index) => (
          <div key={index}>
            <div
              id={`choice${index}`}
              onClick={() => handleChoiceSelect(choice)}
            >
              <label htmlFor={`choice${index}`}>{choice}</label>
            </div>
          </div>
        ))}
      </ul>
      <p>Selected choice: {selectedChoice}</p>
    </div>
  );
};

export default Question;
