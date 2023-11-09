import dining from "../../assets/dining.png";
import living from "../../assets/living.png";
import bed from "../../assets/bed.png";
import HoverImage from "../UI/Overlays/HoverImage";

function Browse(props) {
  return (
    <section className="mb-5">
      <div className="my-5">
        <h1
          className="text-center"
          style={{
            fontWeight: "700",
            fontSize: "32px",
            lineHeight: "48px",
            color: "#333333",
          }}
        >
          Browse The Range
        </h1>
        <p
          className="text-center px-5"
          style={{
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "30px",
            color: "#666666",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          mollitia!
        </p>
      </div>
      <div className="container-lg px-5">
        <div className="row">
          <HoverImage className="col-12 col-lg-4 text-center">
            <img src={dining} alt="Dining Room" className="img-fluid mb-4" />
            <p
              className="text-center"
              style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "36px",
                color: "#333333",
              }}
            >
              Dining
            </p>
          </HoverImage>
          <HoverImage className="col-12 col-lg-4 text-center">
            <img src={living} alt="Living Room" className="img-fluid mb-4" />
            <p
              className="text-center"
              style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "36px",
                color: "#333333",
              }}
            >
              Living
            </p>
          </HoverImage>
          <HoverImage className="col-12 col-lg-4 text-center">
            <img src={bed} alt="Bedroom" className="img-fluid mb-4" />
            <p
              className="text-center"
              style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "36px",
                color: "#333333",
              }}
            >
              Bedroom
            </p>
          </HoverImage>
        </div>
        {/* <div className="row">
          <div className="col-12 col-lg-4 text-center hover-zoom">
            <img
              src="img/dining.png"
              alt="Dining Room"
              className="img-fluid mb-4"
            />
            <p
              className="text-center"
              style="
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
                color: #333333;
              "
            >
              Dining
            </p>
          </div>
          <div className="col-12 col-lg-4 text-center hover-zoom">
            <img
              src="img/living.png"
              alt="Living Room"
              className="img-fluid mb-4"
            />
            <p
              className="text-center"
              style="
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
                color: #333333;
              "
            >
              Living
            </p>
          </div>
          <div className="col-12 col-lg-4 text-center hover-zoom">
            <img src="img/bed.png" alt="Bed Room" className="img-fluid mb-4" />
            <p
              className="text-center"
              style="
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
                color: #333333;
              "
            >
              Bedroom
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Browse;
