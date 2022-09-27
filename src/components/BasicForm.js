import { useState } from "react";

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);

    console.log(enteredFirstName);
  };
  const firstNameInputBlurHandler = () => {
    setEnteredFirstNameTouched(true);

    console.log(enteredFirstName);
  };
  const firstNameInputIsValid = enteredFirstName.trim().length !== 0;
  const firstNameInValid = enteredFirstNameTouched && !firstNameInputIsValid;
  const firstNameClass = firstNameInValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form>
      <div className="control-group">
        <div
          className={!enteredFirstNameTouched ? "form-control" : firstNameClass}
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
