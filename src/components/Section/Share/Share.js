import Collage from "./Collage";

function Share(props) {
  return (
    <section className="mb-5" style={{ overflow: "hidden" }}>
      <div className="my-5">
        <h5
          className="text-center"
          style={{ fontWeight: "600", fontSize: "20px", lineHeight: "30px" }}
        >
          Share your setup with
        </h5>
        <h1
          className="text-center extra-small"
          style={{ fontWeight: "700", fontSize: "40px", lineHeight: "48px" }}
        >
          #FuniroFurniture
        </h1>
      </div>

      <Collage />
    </section>
  );
}

export default Share;
