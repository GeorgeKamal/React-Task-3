import { useState, useEffect, useCallback, useMemo, useContext } from "react";
import classes from "./Table.module.css";
import TableHeader from "./TableHeader";
import TableCell from "./TableCell";

import axios from "axios";
import ProductContext from "../../../../store/product-context";
import ProductForm from "../../../Section/Products/ProductForm";
import Modal from "../../../UI/Overlays/Modal";

function Table(props) {
  // const context = useContext(ProductContext);

  const productsList = Object.keys(props.products).map((productID, index) => (
    <TableCell
      key={productID}
      ID={productID}
      rowNumber={index}
      content={{
        ID: productID,
        Name: props.products[productID].name,
        "Alt Name": props.products[productID].alt,
        Description: props.products[productID].description,
        Price: props.products[productID].price,
        New: props.products[productID].new,
        Discount: props.products[productID].discount,
        Image: props.products[productID].src,
      }}
      onDelete={props.onDelete.bind(null, productID)}
      onEdit={props.onEdit}
    />
  ));

  return (
    <table className={classes["styled-table"]}>
      <TableHeader
        headers={useMemo(
          () => [
            "Product ID",
            "Name",
            "Alt Name",
            "Description",
            "Price",
            "New",
            "Discount",
            "Image",
            "Modify",
          ],
          []
        )}
      />
      <tbody>{productsList}</tbody>
    </table>
  );
}

export default Table;
