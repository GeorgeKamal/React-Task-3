import HoverImage from "../../UI/Overlays/HoverImage";

import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
import img6 from "../../../assets/img6.png";
import img7 from "../../../assets/img7.png";
import img8 from "../../../assets/img8.png";
import img9 from "../../../assets/img9.png";

import classes from "./Collage.module.css";

function Collage(props) {
  return (
    <div className="container-fluid widescreen p-0 m-0 mx-auto">
      <div className="row p-0 m-0">
        <div className="col-5 p-0 m-0">
          <div className="row p-0 m-0">
            <HoverImage className="col-2 p-0 m-0 hover-zoom-small">
              <img
                src={img1}
                className="img-fluid w-100 pe-1 pb-1 pe-md-2 pb-md-2 pe-lg-3 pb-lg-3"
              />
            </HoverImage>
            <HoverImage className="col-10 p-0 m-0 align-self-end hover-zoom-small">
              <img
                src={img2}
                className="img-fluid w-100 pe-1 pb-1 pe-md-2 pb-md-2 pe-lg-3 pb-lg-3"
              />
            </HoverImage>
          </div>
          <div className="row p-0 m-0">
            <HoverImage className="col-4 p-0 m-0 hover-zoom-small">
              <img
                src={img3}
                className="img-fluid w-100 pe-1 pb-1 pe-md-2 pb-md-2 pe-lg-3 pb-lg-3"
              />
            </HoverImage>
            <HoverImage className="col-8 p-0 m-0 hover-zoom-small">
              <img
                src={img4}
                className="img-fluid w-100 pe-1 pb-1 pe-md-2 pb-md-2 pe-lg-3 pb-lg-3"
              />
            </HoverImage>
          </div>
        </div>
        <HoverImage className="col-2 p-0 m-0 align-self-center hover-zoom-small">
          <img src={img5} className="img-fluid w-100" />
        </HoverImage>
        <div className="col-5 p-0 m-0">
          <div className="row p-0 m-0">
            <HoverImage className="col-6 p-0 m-0 align-self-end hover-zoom-small">
              <img
                src={img6}
                className="img-fluid w-100 ps-1 pb-1 ps-md-2 pb-md-2 ps-lg-3 pb-lg-3"
              />
            </HoverImage>
            <HoverImage className="col-6 p-0 m-0 hover-zoom-small">
              <img
                src={img7}
                className="img-fluid w-100 ps-1 pb-1 ps-md-2 pb-md-2 ps-lg-3 pb-lg-3"
              />
            </HoverImage>
          </div>
          <div className="row p-0 m-0">
            <HoverImage className="col-4 p-0 m-0 hover-zoom-small">
              <img
                src={img8}
                className="img-fluid w-100 ps-1 pb-1 ps-md-2 pb-md-2 ps-lg-3 pb-lg-3"
              />
            </HoverImage>
            <HoverImage className="col-6 p-0 m-0 hover-zoom-small">
              <img
                src={img9}
                className="img-fluid w-100 ps-1 pb-1 ps-md-2 pb-md-2 ps-lg-3 pb-lg-3"
              />
            </HoverImage>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collage;
