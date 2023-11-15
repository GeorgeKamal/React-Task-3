import { useState, useEffect, useContext } from "react";

import ProductContext from "../../../store/product-context";
import ProductItem from "./ProductItem";
import ButtonOutline from "../../UI/Buttons/ButtonOutline";

function ProductList(props) {
  const [maxProducts, setMaxProducts] = useState(4);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState(false);
  const context = useContext(ProductContext);

  useEffect(() => {
    setAllProducts(maxProducts >= Object.keys(context.products).length);
    const productsList = Object.keys(context.products)
      .slice(0, maxProducts)
      .map((productID) => (
        <ProductItem key={productID} item={context.products[productID]} />
      ));
    setProducts(productsList);
  }, [context, maxProducts]);

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
