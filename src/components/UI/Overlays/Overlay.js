import ButtonOutline from "../Buttons/ButtonOutline";
import ButtonOverlay from "../Buttons/ButtonOverlay";
import classes from "./Overlay.module.css";

function Overlay(props) {
  return (
    <div className="mask">
      <div className="container hover p-0">
        <div className="col-12 mb-3">
          <ButtonOutline
            className="col-8 btn border-0 bg-white card-overlay-poppins"
            text="Add to cart"
          />
        </div>
        <div className="d-flex flex-wrap justify-content-evenly">
          <ButtonOverlay icon="bi bi-share-fill" text="Share" />
          <ButtonOverlay icon="bi bi-arrow-left-right" text="Compare" />
          <ButtonOverlay icon="bi bi-heart" text="Like" />
        </div>
      </div>
    </div>
  );
}

export default Overlay;
