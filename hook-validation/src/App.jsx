import { useState } from "react";
import useInput from "./hooks/useInput";
function App() {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
    } = useInput((value) => value.trim() !== "");

  // ----------
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput((value) => value.includes("@"));
  // ----------

  let formIsValid = false;
  if (nameIsValid && emailIsValid)
    formIsValid = true;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Submitted Name:", name);

    // Reset input
    resetName();
    resetEmail();
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control"
  const emailClasses = emailHasError ? "form-control invalid" : "form-control"

  return (
    <form onSubmit={formSubmitHandler}>

      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        { nameHasError && <p className = "error-text">Name must not be empty</p> }
      </div>

      <div className={emailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        { emailHasError && <p className = "error-text">Email must contain @.</p> }
      </div>

      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default App;
