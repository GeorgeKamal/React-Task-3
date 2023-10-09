import React, { useState, useCallback, useMemo, useEffect } from "react";

import ProductContext from "../store/product-context";
import axios from "axios";

function ProductProvider(props) {
  const [products, setProducts] = useState({});
  const [adding, setAdding] = useState(false);
  const [submitted, setSubmitted] = useState();
  const [edited, setEdited] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const addingHandler = () => {
    setAdding((previousState) => !previousState);
  };

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

  const productContext = {
    products,
    fetch: fetchProducts,
    addProduct: addProductHandler,
    editProduct: editProductHandler,
    deleteProduct: deleteProductHandler,
    adding,
    submitted,
    setSubmitted,
    edited,
    setEdited,
    errorMessage,
    setErrorMessage,
    toggleAdding: addingHandler,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default React.memo(ProductProvider);
