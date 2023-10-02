import React from "react";

const ProductContext = React.createContext({
  editing: false,
  toggleEditing: () => {},
  products: {},
  setProducts: (products) => {},
  addProduct: (product) => {},
  editProduct: (product) => {},
  deleteProduct: (ID) => {},
});

export default ProductContext;
