import { useState, useEffect, useCallback } from "react";

import ProductItem from "./ProductItem";
import ButtonOutline from "../../UI/Buttons/ButtonOutline";

import axios from "axios";

function ProductList(props) {
  const [maxProducts, setMaxProducts] = useState(4);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DATABASE_LINK}/products.json`
      );
      setAllProducts(maxProducts >= Object.keys(response.data).length);
      const productsList = Object.keys(response.data)
        .slice(0, maxProducts)
        .map((productID) => (
          <ProductItem key={productID} item={response.data[productID]} />
        ));
      setProducts(productsList);
    } catch (error) {
      console.log(error);
    }
  }, [maxProducts]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const clickHandler = () => {
    setMaxProducts((previousState) => previousState + 4);
  };

  return (
    <>
      <div className="container-lg px-lg-0 px-5 py-3">
        <div className="row">{products}</div>
      </div>
      <div className="d-flex justify-content-center pb-2">
        <ButtonOutline
          text="Show More"
          onClick={clickHandler}
          hidden={allProducts}
        />
      </div>
    </>
  );
}

export default ProductList;
