import React from "react";

const ProductContext = React.createContext({
  products: {},
  fetchProducts: () => {},
  addProduct: (product) => {},
  editProduct: (productID, product) => {},
  deleteProduct: (productID) => {},
  adding: false,
  submitted: undefined,
  setSubmitted: () => {},
  edited: false,
  setEdited: () => {},
  errorMessage: undefined,
  setErrorMessage: (message) => {},
  toggleAdding: () => {},
});

export default ProductContext;
