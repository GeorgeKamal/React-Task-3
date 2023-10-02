import Main from "../../Section/Main";
import Products from "../../Section/Products/Products";
import Inspiration from "../../Section/Inspiration";
import Share from "../../Section/Share/Share";
import Footer from "../../Section/Footer/Footer";
import Browse from "../../Section/Browse";

import classes from "./Furino.module.css";

function Furino(props) {
  return (
    <>
      <Main />
      <Browse />
      <Products />
      <Inspiration />
      <Share />
      <Footer />
    </>
  );
}

export default Furino;
