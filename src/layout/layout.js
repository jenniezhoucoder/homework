import Nav from "./nav";
import Footer from "./footer";
import classes from "./layout.module.css";

function Layout() {
  return (
    <div className={classes.layout}>
      <Nav />
      <Footer />
    </div>
  );
}

export default Layout;
