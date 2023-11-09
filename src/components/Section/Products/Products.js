import ProductList from "./ProductList";

function Products(props) {
  return (
    <section className="mb-5">
      <div>
        <div>
          <h1
            className="text-center"
            style={{
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "48px",
              color: "#3a3a3a",
            }}
          >
            Our Products
          </h1>
        </div>
        <ProductList />
      </div>
    </section>
  );
}

export default Products;
