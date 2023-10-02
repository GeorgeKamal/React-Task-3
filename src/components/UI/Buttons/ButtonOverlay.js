import classes from "./ButtonOverlay.module.css";
import Icon from "../Icon";

function ButtonOverlay(props) {
  return (
    <div className="btn px-0 card-overlay-poppins">
      <Icon iconName={props.icon} /> {props.text}
    </div>
  );
}

export default ButtonOverlay;
