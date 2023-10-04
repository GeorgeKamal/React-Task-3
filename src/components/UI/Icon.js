import classes from "./Icon.module.css";

function Icon(props) {
  return <i className={props.iconName} style={props.style}></i>;
}

export default Icon;
