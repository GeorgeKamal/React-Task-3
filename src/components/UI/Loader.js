import PuffLoader from "react-spinners/PuffLoader";

function Loader(props) {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <PuffLoader color="#b88e2f" size={100} />
    </div>
  );
}

export default Loader;
