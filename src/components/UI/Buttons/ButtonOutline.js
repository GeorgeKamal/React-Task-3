function ButtonOutline(props) {
  return (
    <div
      className={`btn yellow-button-outline ${
        props.className && props.className
      }`}
      style={{
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "24px",
      }}
      onClick={props.onClick}
      hidden={props.hidden}
    >
      {props.text}
    </div>
  );
}

export default ButtonOutline;
