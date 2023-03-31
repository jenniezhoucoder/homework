import Login from "../component/starting-page/login";

import classes from "./layout.module.css";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <div>
        <a>
          <span className={classes.navname}>Management System</span>
        </a>
      </div>
      <div>
        <input className={classes.input} placeholder="Search" type="text" />
      </div>
      <div>
        <Login />
        {/* <button className={classes.signinbutton}>
          Sign in</button> */}
      </div>
    </nav>
  );
}
