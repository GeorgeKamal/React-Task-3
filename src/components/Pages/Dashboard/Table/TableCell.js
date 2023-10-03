import React, { useContext, useState } from "react";
import Button from "../../../UI/Buttons/Button";
import ButtonOutline from "../../../UI/Buttons/ButtonOutline";
import classes from "./TableCell.module.css";
import ProductContext from "../../../../store/product-context";
import Modal from "../../../UI/Overlays/Modal";
import ProductForm from "../../../Section/Products/ProductForm";

function TableCell(props) {
  // const context = useContext(ProductContext);
  const [editing, setEditing] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const editHandler = () => {
    setEditing((previousState) => !previousState);
  };

  let content = Object.keys(props.content).map((key, index) => (
    <td key={`cell${props.rowNumber}${index}`} className={classes["cell-item"]}>
      {props.content[key] &&
        !props.content[key].toString().startsWith("data:image/png;base64,") &&
        props.content[key]}
      {props.content[key] &&
        props.content[key].toString().startsWith("data:image/png;base64,") && (
          <img src={props.content[key]} className="img-fluid w-100" />
        )}
    </td>
  ));

  content = content.concat(
    <td key={`cell${props.rowNumber}modify`} className={classes["cell-item"]}>
      {!confirm && (
        <>
          <ButtonOutline className="me-1" text="Edit" onClick={editHandler} />
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
            onClick={props.onDelete}
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
        <Modal onClick={editHandler}>
          <p
            className="m-0 p-3"
            style={{ backgroundColor: "#b88e2f", color: "white" }}
          >
            Editing Product with ID: {props.ID}
          </p>
          <ProductForm
            onClick={editHandler}
            onEdit={props.onEdit.bind(null, props.ID)}
            content={props.content}
          />
        </Modal>
      )}
      <tr className={classes["cell-row"]}>{content}</tr>
    </>
  );
}

export default React.memo(TableCell);
