import { useContext } from "react";

import ProductProvider from "../../../store/ProductProvider";
import ProductContext from "../../../store/product-context";
import ProductForm from "../../Section/Products/ProductForm";
import Button from "../../UI/Buttons/Button";
import Table from "./Table/Table";
import Modal from "../../UI/Overlays/Modal";

import classes from "./Dashboard.module.css";

function Dashboard(props) {
  document.title = "Dashboard";
  const context = useContext(ProductContext);

  return (
    <>
      {context.errorMessage && (
        <Modal onClick={context.setErrorMessage.bind(null, undefined)} noForm>
          <p>An Error occured</p>
          <p>Error Message: {context.errorMessage}</p>
          <div className="container text-end">
            <Button
              onClick={context.setErrorMessage.bind(null, undefined)}
              className="mx-2"
              text="Ok"
            />
          </div>
        </Modal>
      )}
      {context.adding && (
        <Modal onClick={context.toggleAdding}>
          <ProductForm onClick={context.toggleAdding} add />
        </Modal>
      )}
      {context.submitted && (
        <Modal noForm onClick={context.toggleAdding}>
          <p>Product Submitted Successfully with ID: {context.submitted}</p>
          <div className="container text-end">
            <Button
              onClick={context.setSubmitted.bind(null, undefined)}
              className="mx-2"
              text="Ok"
            />
          </div>
        </Modal>
      )}
      {context.edited && (
        <Modal noForm onClick={context.setEdited.bind(null, false)}>
          <p>Product Edited Successfully</p>
          <div className="container text-end">
            <Button
              onClick={context.setEdited.bind(null, false)}
              className="mx-2"
              text="Ok"
            />
          </div>
        </Modal>
      )}
      <div className={`container-fluid px-5 pb-5 ${classes["limit-height"]}`}>
        <div className="container-fluid d-flex justify-content-center my-5">
          <Button
            className="w-25"
            text="New Product"
            onClick={context.toggleAdding}
          />
        </div>
        <Table />
      </div>
    </>
  );
}
export const DashBoardExport = () => (
  <ProductProvider>
    <Dashboard />
  </ProductProvider>
);
export default DashBoardExport;
