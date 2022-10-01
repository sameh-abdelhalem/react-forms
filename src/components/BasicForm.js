import { useState } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameInputIsValid,
    hasError: firstNameInValid,
    valueChangeHandler: firstNameChangeHandler,
    InputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim().length !== 0);
  const {
    value: enteredLastName,
    isValid: lastNameInputIsValid,
    hasError: lastNameInValid,
    valueChangeHandler: lastNameChangeHandler,
    InputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim().length !== 0);
  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    hasError: emailInValid,
    valueChangeHandler: emailChangeHandler,
    InputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((value) =>
    value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  );

  let formIsValid = false;

  // email validation

  const emailClass = emailInValid ? "form-control invalid" : "form-control";

  // first name validation

  const firstNameClass = firstNameInValid
    ? "form-control invalid"
    : "form-control";

  // Last name validation

  const lastNameClass = lastNameInValid
    ? "form-control invalid"
    : "form-control";

  if (emailInputIsValid && firstNameInputIsValid && lastNameInputIsValid) {
    formIsValid = true;
  }

  const formSubmitionHandler = (event) => {
    event.preventDefault();

    console.log(enteredFirstName, enteredEmail, enteredLastName);
    resetFirstName();
    resetLastName();
    resetEmail();
  };
  return (
    <form onSubmit={formSubmitionHandler}>
      <div className="control-group">
        <div className={!firstNameInValid ? "form-control" : firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameInputBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInValid && (
            <p className="error-text">Please enter a valid first name</p>
          )}
        </div>
        <div className={!lastNameInValid ? "form-control" : lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
          />
          {lastNameInValid && (
            <p className="error-text">Please enter a valid last name</p>
          )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailInValid && (
        <p className="error-text">please enter a valid email address</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
