import classes from "./HoverImage.module.css";

function HoverImage(props) {
  return (
    <div className={`hover-zoom ${props.className && props.className}`}>
      {props.children}
    </div>
  );
}

export default HoverImage;
