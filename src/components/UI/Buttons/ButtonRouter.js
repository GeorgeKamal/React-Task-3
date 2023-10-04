import { useNavigate } from "react-router-dom";
import classes from "./ButtonRouter.module.css";

function ButtonRouter(props) {
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate(props.link)
  }

  return (
    <a
      className="navbar-brand normal-poppins bold-underlined pointer"
      style={props.style}
      // href=""
      onClick={navigationHandler}
    >
      {props.name}
    </a>
  );
}

export default ButtonRouter;