import React, { useContext, useState } from "react";

import Button from "../../../UI/Buttons/Button";
import ButtonOutline from "../../../UI/Buttons/ButtonOutline";
import ProductContext from "../../../../store/product-context";
import Modal from "../../../UI/Overlays/Modal";
import ProductForm from "../../../Section/Products/ProductForm";
import Icon from "../../../UI/Icon";

import classes from "./TableCell.module.css";

function TableCell(props) {
  const context = useContext(ProductContext);
  const [confirm, setConfirm] = useState(false);
  const [editing, setEditing] = useState(false);

  const editingHandler = () => {
    setEditing((previousState) => !previousState);
  };

  let content = Object.keys(props.content).map((key, index) => (
    <td key={`cell${props.rowNumber}${index}`} className={classes["cell-item"]}>
      {props.content[key] &&
        !props.content[key].toString().startsWith("data:image/png;base64,") &&
        key !== "New" &&
        props.content[key]}
      {props.content[key] &&
        !props.content[key].toString().startsWith("data:image/png;base64,") &&
        key === "New" && (
          <Icon
            iconName="bi bi-check-square-fill"
            style={{ color: "#b88e2f" }}
          />
        )}
      {props.content[key] &&
        props.content[key].toString().startsWith("data:image/png;base64,") && (
          <img
            src={props.content[key]}
            alt={props.content["Alt Name"]}
            className="img-fluid w-100"
            style={{ height: "200px" }}
          />
        )}
    </td>
  ));

  content = content.concat(
    <td key={`cell${props.rowNumber}modify`} className={classes["cell-item"]}>
      {!confirm && (
        <>
          <ButtonOutline className="" text="Edit" onClick={editingHandler} />
          <Button
            text="Delete"
            // onClick={context.deleteProduct.bind(null, props.ID)}
            onClick={setConfirm.bind(null, true)}
          />
        </>
      )}
      {confirm && (
        <div className="container">
          <p>Confirm Delete?</p>
          <Button
            className="mx-1"
            text="Yes"
            // onClick={context.deleteProduct.bind(null, props.ID)}
            onClick={context.deleteProduct.bind(null, props.ID)}
          />
          <ButtonOutline
            className="mx-1 px-3"
            text="No"
            onClick={setConfirm.bind(null, false)}
          />
        </div>
      )}
    </td>
  );

  return (
    <>
      {editing && (
        <Modal onClick={editingHandler}>
          <p
            className="m-0 p-3"
            style={{ backgroundColor: "#b88e2f", color: "white" }}
          >
            Editing Product with ID: {props.ID}
          </p>
          <ProductForm
            onClick={editingHandler}
            edit
            ID={props.ID}
            content={props.content}
          />
        </Modal>
      )}
      <tr className={classes["cell-row"]}>{content}</tr>
    </>
  );
}

export default React.memo(TableCell);
