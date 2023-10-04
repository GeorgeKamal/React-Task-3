import Main from "../../Section/Main";
import Products from "../../Section/Products/Products";
import Inspiration from "../../Section/Inspiration";
import Share from "../../Section/Share/Share";
import Footer from "../../Section/Footer/Footer";
import Browse from "../../Section/Browse";

import classes from "./Furino.module.css";

function Furino(props) {
  document.title = "Furino";
  return (
    <div className={classes.furino}>
      <Main />
      <Browse />
      <Products />
      <Inspiration />
      <Share />
      <Footer />
    </div>
  );
}

export default Furino;
