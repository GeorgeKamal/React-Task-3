import Icon from "../UI/Icon";
import Logo from "../UI/Logo";

import ButtonText from "../UI/Buttons/ButtonText";
import ButtonRouter from "../UI/Buttons/ButtonRouter";

import classes from "./Navbar.module.css";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-white rounded ${classes.navbar} ${classes["disable-scroll"]}`}
    >
      <div className="container-lg p-1 justify-content-around">
        <div className="d-flex d-lg-none col-5 col-lg-6 justify-content-start">
          <Logo />
        </div>
        <div className="d-flex d-lg-none col-4 col-lg-6 justify-content-around gap-0">
          <a className="navbar-brand" aria-label="Account" href="Account">
            <Icon iconName="bi bi-person" />
          </a>
          <a className="navbar-brand" aria-label="Search" href="Search">
            <Icon iconName="bi bi-search" />
          </a>
          <a className="navbar-brand" aria-label="Wishlist" href="Wishlist">
            <Icon iconName="bi bi-heart" />
          </a>
          <a className="navbar-brand" aria-label="Cart" href="Cart">
            <Icon iconName="bi bi-cart" />
          </a>
        </div>
        <button
          aria-label="More Links"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="myNavbar">
          <div className="d-none d-lg-flex col-lg-3 justify-content-start">
            <Logo />
          </div>
          <ul className="navbar-nav col-lg-6 justify-content-evenly">
            <li className="d-flex justify-content-center nav-item">
              <ButtonRouter name="Dashboard" link="Dashboard" />
            </li>
            <li className="d-flex justify-content-center nav-item">
              <ButtonRouter name="Home" link="/" />
            </li>
            <li className="d-flex justify-content-center nav-item">
              <ButtonText name="Shop" href="Shop" />
            </li>
            <li className="d-flex justify-content-center nav-item">
              <ButtonText name="About" href="About" />
            </li>
            <li className="d-flex justify-content-center nav-item">
              <ButtonText name="Contact" href="Contact" />
            </li>
          </ul>
          <div className="d-none d-lg-flex col-lg-3 justify-content-end gap-4">
            <a className="navbar-brand" aria-label="Account" href="Account">
              <Icon iconName="bi bi-person" />
            </a>
            <a className="navbar-brand" aria-label="Search" href="Search">
              <Icon iconName="bi bi-search" />
            </a>
            <a className="navbar-brand" aria-label="Wishlist" href="Wishlist">
              <Icon iconName="bi bi-heart" />
            </a>
            <a className="navbar-brand" aria-label="Cart" href="Cart">
              <Icon iconName="bi bi-cart" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
