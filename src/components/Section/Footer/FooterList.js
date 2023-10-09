import React from "react";

import ButtonText from "../../UI/Buttons/ButtonText";
import classes from "./FooterList.module.css";

function FooterList(props) {
  const content = props.list.map((item, index) => (
    <li key={`${props.title}${index}`} className="nav-item mb-2" >
      <ButtonText name={item} style={{border: "3px solid transparent", boxSizing: "border-box", width: "max-content" }} />
    </li>
  ));

  return (
    <div className="col-6 col-lg-2 d-flex d-lg-inline justify-content-center justify-content-lg-center mb-4">
      <ul className="nav flex-column gap-2 gap-lg-5">
        <li className="nav-item" >
          <h5 className="normal-poppins" style={{ color: "#9f9f9f" }}>
            {props.title}
          </h5>
        </li>
        {content}
      </ul>
    </div>
  );
}

export default React.memo(FooterList);
