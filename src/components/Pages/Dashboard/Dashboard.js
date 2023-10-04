import { useState, useContext, useCallback, useEffect } from "react";
import ProductProvider from "../../../store/ProductProvider";
import ProductContext from "../../../store/product-context";
import ProductForm from "../../Section/Products/ProductForm";
import Button from "../../UI/Buttons/Button";
import classes from "./Dashboard.module.css";
import Table from "./Table/Table";
import Modal from "../../UI/Overlays/Modal";
import axios from "axios";

function Dashboard(props) {
  const [adding, setAdding] = useState(false);
  const [submitted, setSubmitted] = useState();
  const [edited, setEdited] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const addHandler = () => {
    setAdding((previousState) => !previousState);
  };

  const [products, setProducts] = useState({});

  const fetchProducts = useCallback(async () => {
    setErrorMessage();
    console.log("fetching");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DATABASE_LINK}/products.json`
      );
      setProducts(response.data);
    } catch (error) {
      setErrorMessage(error.message);
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const addProductHandler = useCallback(
    async (data) => {
      setErrorMessage();
      console.log("adding the following product", data);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_DATABASE_LINK}/products.json`,
          data
        );
        const newProduct = { [response.data.name]: data };
        // console.log(products);
        // setProducts((previousState) => ({
        //   newProduct,
        //   ...previousState.products,
        // }));
        console.log("response", response);
        setSubmitted(response.data.name);
        fetchProducts();
      } catch (error) {
        setErrorMessage(error.message);
        console.error(error);
      }
    },
    [fetchProducts]
  );

  const editProductHandler = useCallback(
    async (ID, data) => {
      setErrorMessage();
      console.log("editing");
      console.log(`editing the product with ID ${ID}`);
      console.log("new product details", data);
      try {
        const response = await axios.put(
          `${process.env.REACT_APP_DATABASE_LINK}/products/${ID}.json`,
          data
        );
        console.log("response", response);
        setEdited(true);
        fetchProducts();
      } catch (error) {
        setErrorMessage(error.message);
        console.error(error);
      }
    },
    [fetchProducts]
  );

  const deleteProductHandler = useCallback(
    async (ID) => {
      setErrorMessage();
      console.log("deleting");
      console.log(`deleting product with ID ${ID}`);
      // let productsTemp = { ...products };
      // delete productsTemp[ID];
      // setProducts(productsTemp);

      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_DATABASE_LINK}/products/${ID}.json`
        );
        console.log("response", response);
        fetchProducts();
      } catch (error) {
        setErrorMessage(error.message);
        console.error(error);
      }
    },
    [fetchProducts]
  );

  return (
    <>
      {errorMessage && (
        <Modal onClick={setErrorMessage.bind(null, undefined)} noForm>
          <p>An Error occured</p>
          <p>Error Message: {errorMessage}</p>
          <div className="container text-end">
            <Button
              onClick={setErrorMessage.bind(null, undefined)}
              className="mx-2"
              text="Ok"
            />
          </div>
        </Modal>
      )}
      {adding && (
        <Modal onClick={addHandler}>
          <ProductForm onClick={addHandler} onAdd={addProductHandler} />
        </Modal>
      )}
      {submitted && (
        <Modal noForm onClick={addHandler}>
          <p>Product Submitted Successfully with ID: {submitted}</p>
          <div className="container text-end">
            <Button
              onClick={setSubmitted.bind(null, undefined)}
              className="mx-2"
              text="Ok"
            />
          </div>
        </Modal>
      )}
      {edited && (
        <Modal noForm onClick={setEdited.bind(null, false)}>
          <p>Product Edited Successfully</p>
          <div className="container text-end">
            <Button
              onClick={setEdited.bind(null, false)}
              className="mx-2"
              text="Ok"
            />
          </div>
        </Modal>
      )}
      <div className={`container-fluid px-5 pb-5 ${classes["limit-height"]}`}>
        <div className="container-fluid d-flex justify-content-center my-5">
          <Button className="w-25" text="New Product" onClick={addHandler} />
        </div>
        <Table
          products={products}
          setProducts={setProducts}
          onDelete={deleteProductHandler}
          onEdit={editProductHandler}
        />
      </div>
    </>
  );
}

export default Dashboard;
