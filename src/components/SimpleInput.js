import { computeHeadingLevel } from "@testing-library/react";
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitionHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    setEnteredName("");
  };
  return (
    <form onSubmit={formSubmitionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
