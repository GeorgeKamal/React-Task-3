function Button(props) {
  return (
    <button
      className={`btn yellow-button ${props.className && props.className}`}
      style={{
        fontWeight: "650",
        fontSize: "16px",
        lineHeight: "24px",
      }}
      onClick={props.onClick}
      hidden={props.hidden}
      type={props.type}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

export default Button;
