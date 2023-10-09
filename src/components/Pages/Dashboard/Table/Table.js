import { useState, useEffect, useCallback, useMemo, useContext } from "react";
import classes from "./Table.module.css";
import TableHeader from "./TableHeader";
import TableCell from "./TableCell";

import axios from "axios";
import ProductContext from "../../../../store/product-context";
import ProductForm from "../../../Section/Products/ProductForm";
import Modal from "../../../UI/Overlays/Modal";

function Table(props) {
  const context = useContext(ProductContext);

  const productsList = Object.keys(context.products).map((productID, index) => (
    <TableCell
      key={productID}
      ID={productID}
      rowNumber={index}
      content={{
        ID: productID,
        Name: context.products[productID].name,
        "Alt Name": context.products[productID].alt,
        Description: context.products[productID].description,
        Price: context.products[productID].price,
        New: context.products[productID].new,
        Discount: context.products[productID].discount,
        Image: context.products[productID].src,
      }}
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
