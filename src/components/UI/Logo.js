import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import classes from "./Logo.module.css";

function Logo(props) {
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate("/")
  }

  return (
    <a className="navbar-brand pointer" onClick={navigationHandler}>
      <img src={logo} alt="logo" className="img-fluid" />
    </a>
  );
}

export default Logo;
