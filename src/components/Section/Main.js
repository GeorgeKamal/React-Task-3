import background from "../../assets/background.png";
import Button from "../UI/Buttons/Button";
import classes from "./Main.module.css";

function Main(props) {
  return (
    <section>
      <div className="overlay mb-8">
        <img
          id="background"
          src={background}
          alt="background"
          className="img-fluid mx-auto d-flex"
          style={{ width: "100%", height: "90vh" }}
        />
        <div className="overlay-text mx-auto px-4 py-5 d-flex">
          <div className="row">
            <div className="col-12">
              <p
                id="subtitle"
                className="lead mb-0 mb-lg-3"
                style={{
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "3px",
                  color: "#333333",
                }}
              >
                New Arrival
              </p>
            </div>
            <div className="col-12">
              <h2
                id="title"
                className="mb-1 mb-lg-3 yellow-text"
                style={{
                  fontWeight: "600",
                  fontSize: "52px",
                  lineHeight: "65px",
                }}
              >
                Discover Our <br id="break" />
                New Collection
              </h2>
            </div>
            <div className="col-12">
              <p
                id="subtitle"
                className="pb-lg-4 normal-poppins"
                style={{ color: "#333333" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, assumenda.
              </p>
            </div>
            <div className="col-12">
              <Button className="px-5 py-2 py-lg-3" text="BUY NOW" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
