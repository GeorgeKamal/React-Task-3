import { Link } from "react-router-dom";

import logo from "../../assets/logo.webp";

function Logo(props) {
  // const navigate = useNavigate();
  // const navigationHandler = () => {
  //   navigate("/");
  // };

  return (
    <Link to="/" className="navbar-brand">
      <img src={logo} alt="logo" className="img-fluid" />
    </Link>
    // <a className="navbar-brand pointer" onClick={navigationHandler}>
    //   <img src={logo} alt="logo" className="img-fluid" />
    // </a>
  );
}

export default Logo;
