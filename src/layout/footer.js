import classes from "./layout.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        <div>
          <p>@2022 All Rights Reserved</p>
        </div>
        <div className={classes.icon}>
          <a href="https://www.youtube.com/" target="_blank">
            <img src="https://www.youtube.com/favicon.ico" alt="YouTube" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="https://abs.twimg.com/favicons/twitter.ico"
              alt="Twitter"
            />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src="https://www.facebook.com/favicon.ico" alt="Facebook" />
          </a>
        </div>
        <div>
          <ul className={classes.ul}>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">Privary Policies</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
