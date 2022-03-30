const Choice = ({ name, value, label, onHandleChange, answers }) => {
  return (
    <label
      onClick={(e) => onHandleChange({ name: name, value: value, event: e })}
    >
      <input
        name={name}
        type="checkbox"
        value={value}
        checked={answers.split(", ").includes(value) ? true : false}
        readOnly
      />
      {label}
    </label>
  );
};

export default Choice;
