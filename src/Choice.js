import React from 'react';

const Choice = (props) => {
  return (
    <label>
      <input
        name={props.name}
        type="checkbox"
      ></input>
      <span>{props.label}</span>
    </label>
  );
};

export default Choice;
