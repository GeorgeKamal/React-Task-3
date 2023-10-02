import React, { useState, useCallback, useMemo } from "react";

import ProductContext from "../store/product-context";
import axios from "axios";

function ProductProvider(props) {
  const [products, setProducts] = useState({});
  const [editing, setEditing] = useState(false);

  const editHandler = useCallback(() => {
    setEditing((previousState) => !previousState);
  }, []);

  const addProductHandler = useCallback(async (data) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DATABASE_LINK}/products.json`,
        data
      );
      const newProduct = { [response.data.name]: data };
      setProducts((previousState) => ({
        newProduct,
        ...previousState.products,
      }));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteProductHandler = useCallback(
    async (ID) => {
      let productsTemp = { ...products };
      delete productsTemp[ID];
      setProducts(productsTemp);

      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_DATABASE_LINK}/products/${ID}.json`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    [products]
  );

  const editProductHandler = useCallback(() => {}, []);

  const productContext = {
    editing: editing,
    toggleEditing: editHandler,
    products: useMemo(() => products, [products]),
    setProducts: setProducts,
    addProduct: addProductHandler,
    editProduct: editProductHandler,
    deleteProduct: deleteProductHandler,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default React.memo(ProductProvider);
