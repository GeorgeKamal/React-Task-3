import RadioButton from "../UI/Buttons/RadioButton";
import Button from "../UI/Buttons/Button";

import HoverImage from "../UI/Overlays/HoverImage";
import room1 from "../../assets/room1.png";
import room2 from "../../assets/room2.png";

function Inspiration(props) {
  return (
    <section className="mb-5">
      <div
        className="py-5 text-center text-md-start"
        style={{ background: "#fcf8f3" }}
      >
        <div
          className="container-fluid widescreen"
          style={{ paddingInlineStart: "7%" }}
        >
          <div className="row justify-content-between">
            <div className="col-12 col-md-4 my-auto">
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "40px",
                  lineHeight: "48px",
                }}
              >
                50+ Beautiful rooms inspirations
              </h1>
              <p className="normal-poppins">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
              <Button className="mb-3" text="Explore more" />
            </div>
            <div className="col-12 col-md-8 my-auto">
              <div className="row justify-content-around">
                <HoverImage className="col-6 p-0 pe-2 text-end">
                  <img src={room1} alt="room" className="img-fluid" />
                </HoverImage>
                <div className="col-6 col-md-5 d-flex flex-column justify-content-between p-0 ps-1 pe-3 text-start">
                  <div className="col-12 hover-zoom">
                    <img src={room2} alt="room" className="img-fluid" />
                  </div>
                  <div className="col-12">
                    <RadioButton
                      className="m-0 pe-2"
                      name="photos"
                      id="photo1"
                      value="photo1"
                      checked="true"
                    />
                    <RadioButton
                      className="m-0 pe-2"
                      name="photos"
                      id="photo2"
                      value="photo2"
                    />
                    <RadioButton
                      className="m-0 pe-2"
                      name="photos"
                      id="photo3"
                      value="photo3"
                    />
                    <RadioButton
                      className="m-0 pe-2"
                      name="photos"
                      id="photo4"
                      value="photo4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inspiration;
