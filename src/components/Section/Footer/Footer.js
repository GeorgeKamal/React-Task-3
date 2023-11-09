import { useMemo } from "react";

import FooterList from "./FooterList";

function Footer(props) {
  return (
    <section>
      <div className="container">
        <footer>
          <div className="row">
            <div className="col-12 col-lg-4 mb-3 mb-lg-5 text-center text-lg-start">
              <h5
                className="text-black mb-4 mb-lg-5"
                style={{
                  fontWeight: "700",
                  fontSize: "24px",
                  lineHeight: "36px",
                }}
              >
                Furino.
              </h5>
              <p
                className="m-0"
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#9f9f9f",
                }}
              >
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>

            <FooterList
              title="Links"
              list={useMemo(() => ["Home", "Shop", "About", "Contact"], [])}
            />
            <FooterList
              title="Help"
              list={useMemo(
                () => [
                  "Payment Options",
                  "Returns",
                  "Pricing",
                  "Privacy Policies",
                ],
                []
              )}
            />

            <div className="col-12 col-lg-4 mb-3">
              <form>
                <h5
                  className="mb-3 mb-lg-5 normal-poppins"
                  style={{ color: "#9f9f9f" }}
                >
                  Newsletter
                </h5>
                <div className="d-flex flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter"
                    type="text"
                    className="form-control border-start-0 border-end-0 border-top-0 bold-underlined2"
                    style={{
                      borderRadius: "0",
                      borderColor: "black",
                      border: "1px solid black",
                      boxSizing: "border-box",
                    }}
                    placeholder="Enter Your Email Address"
                  />
                  <button
                    className="btn btn-outline border-start-0 border-end-0 border-top-0 bold-underlined"
                    type="button"
                    style={{
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "21px",
                      borderRadius: "0",
                      color: "black",
                      borderColor: "black",
                      border: "1px solid black",
                      boxSizing: "border-box",
                    }}
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-sm-row justify-content-center justify-content-lg-between py-4 my-4 border-top mb-0">
            <p className="normal-poppins text-center mb-0">
              2023 furino. All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
