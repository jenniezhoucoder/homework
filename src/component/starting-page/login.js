import classes from "../starting-page/login.module.css";
import { useState } from "react";

export default function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  function toggleLoginForm() {
    setShowLoginForm(!showLoginForm);
  }

  function handleColse() {
    setShowLoginForm(false);
  }

  async function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <div>
      <button className={classes.signinbutton} onClick={toggleLoginForm}>
        Sign In
      </button>
      {showLoginForm && (
        <div className={classes.popout}>
          <button onClick={handleColse}>X</button>
          <form className={classes.form} onSubmit={submitHandler}>
            <h2>Sign in to your account</h2>
            <div className={classes.input}>
              <label>Email</label>
              <input type="email" placeholder="abc.gmail.com"></input>
              <label>Password</label>
              <input type="password" placeholder="******"></input>
            </div>
            <button>Signin</button>
            <p>
              Don't have an account?<a href="/">Signup</a>
            </p>
            <a href="/">Forgot password</a>
          </form>
        </div>
      )}
    </div>
  );
}
