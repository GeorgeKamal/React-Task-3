function ButtonText(props) {
  return (
    <a
      className="navbar-brand normal-poppins bold-underlined"
      href={`#${props.href}`}
      style={props.style}
    >
      {props.name}
    </a>
  );
}

export default ButtonText;
