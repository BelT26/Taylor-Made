import Header from "./Header";
import Footer from "./Footer";
import classes from "./layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={classes.main_background}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
