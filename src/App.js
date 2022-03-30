import Question from "./Question";
import questions from "./questions";
import "./App.css";
import React, { useState, useEffect } from "react";
import { deepCopy, onSetValueMultiSelect } from "./utils";

const App = () => {
  const [validationObj, setValidationObj] = useState(null);

  const onHandleChange = (data) => {
    data.event.preventDefault();

    let tmpObj = deepCopy(validationObj);

    tmpObj[`${data.name}`].touched = true;

    tmpObj[`${data.name}`].value = onSetValueMultiSelect(
      tmpObj[`${data.name}`].value,
      data.value
    );

    setValidationObj(tmpObj);
  };

  const onHandleSumit = (e) => {
    if (Object.values(validationObj).every((item) => !item.touched)) {
      e.preventDefault();

      let tmpObj = deepCopy(validationObj);

      for (const key in tmpObj) {
        tmpObj[key].touched = true;
      }

      setValidationObj(tmpObj);
    }
  };

  useEffect(() => {
    let tmpObj = {};

    questions.forEach((item) => {
      tmpObj[`${item.id}`] = {
        touched: false,
        value: "",
      };
    });

    setValidationObj(tmpObj);
  }, []);

  return validationObj ? (
    <main className="App">
      <h1 className="App-title">Risk Assessment</h1>
      <form onSubmit={onHandleSumit}>
        <span>You must select at least one value for each question</span>
        {questions.map((question) => (
          <>
            {/* {validationObj[`${question.id}`].touched &&
            !validationObj[`${question.id}`].value ? (
              ) : null} */}
            <Question
              key={question.id}
              question={question}
              onHandleChange={onHandleChange}
              answers={validationObj[`${question.id}`].value}
            />
          </>
        ))}
        <div>
          <button type="submit">Next</button>
        </div>
      </form>
    </main>
  ) : null;
};

export default App;
