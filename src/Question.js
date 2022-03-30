import Choice from "./Choice";

const Question = ({ question, onHandleChange, answers }) => (
  <div>
    <p>{question.text}</p>
    <div className="choices">
      {question.choices.map((choice) => {
        return (
          <Choice
            name={question.id}
            value={choice.name}
            label={choice.label}
            key={choice.name}
            onHandleChange={onHandleChange}
            answers={answers}
          />
        );
      })}
    </div>
  </div>
);

export default Question;
