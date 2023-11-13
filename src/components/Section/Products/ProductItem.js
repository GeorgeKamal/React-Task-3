import Overlay from "../../UI/Overlays/Overlay";

function ProductItem(props) {
  const currency = "Rp";
  let price = `${currency} ${props.item.price.toLocaleString(undefined, {
    minimumFractionDigits: 3,
  })}`;
  let discountPrice = props.item.price * (1 - props.item.discount / 100);
  discountPrice = `${currency} ${discountPrice.toLocaleString(undefined, {
    minimumFractionDigits: 3,
  })}`;
  return (
    <div className="col-12 col-lg-3 col-md-6 text-center pb-4">
      <div className="bg-image hover-overlay shadow-1-strong d-flex flex-column h-100">
        <div style={{ position: "relative" }}>
          <img
            src={props.item.src}
            alt={props.item.alt}
            className="img-fluid w-100"
            style={{ height: "350px", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", top: "10%", right: "10%" }}>
            {(props.item.discount || props.item.new) && (
              <div
                className="rounded-circle text-white card-subtitle-poppins"
                style={{
                  backgroundColor: `${props.item.discount ? "#e97171" : ""}${
                    props.item.new ? "#2ec1ac" : ""
                  }`,
                  width: "48px",
                  height: "48px",
                }}
              >
                <span className="" style={{ position: "relative", top: "25%" }}>
                  {props.item.discount && `-${props.item.discount}%`}
                  {props.item.new && "New"}
                </span>
              </div>
            )}
          </div>
        </div>
        <div
          className="card-body px-3 pt-3 pb-4 d-flex flex-column"
          style={{ backgroundColor: "#f4f5f7" }}
        >
          <div className="my-auto">
            <h1 className="card-title text-start card-title-poppins">
              {props.item.name}
            </h1>
            <p className="card-text text-start card-subtitle-poppins">
              {props.item.description}
            </p>
            <h2 className="card-title d-flex justify-content-between card-price-poppins">
              {props.item.discount ? discountPrice : price}
              {props.item.discount && (
                <strike className="card-price-old-poppins">{price}</strike>
              )}
            </h2>
          </div>
        </div>
        <Overlay />
      </div>
    </div>
  );
}

export default ProductItem;
