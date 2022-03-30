export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj || {}));
}

export function onSetValueMultiSelect(currentValue, value) {
  if (currentValue) {
    let answersArr = currentValue.split(", ") || [];
    if (answersArr.indexOf(value) > -1) {
      answersArr.splice(answersArr.indexOf(value), 1);

      return answersArr.join(", ");
    } else {
      answersArr.push(value);

      return answersArr.join(", ");
    }
  } else {
    return value;
  }
}
