import { computeHeadingLevel } from "@testing-library/react";
import { useState } from "react";
import useInput from "../hooks/use-imput";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    InputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [entereEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.match(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  const enteredEmailInvalid = !enteredEmailIsValid && entereEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const formSubmitionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid || enteredEmailInvalid) {
      return;
    }

    console.log(enteredName, enteredEmail);
    resetNameInput();
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
    console.log(enteredName);
  };
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = enteredEmailIsValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {enteredEmailInvalid && (
          <p className="error-text">Please enter a valid Email address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
