import { computeHeadingLevel } from "@testing-library/react";
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitionHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length < 1) {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    setEnteredName("");
  };
  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
