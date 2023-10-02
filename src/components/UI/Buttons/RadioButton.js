import classes from "./RadioButton.module.css";

const RadioButton = (props) => {
  return (
    <div
      className={`form-check form-check-inline ${
        props.className && props.className
      }`}
    >
      <input
        className="radio-button"
        type="radio"
        name={props.name}
        id={props.id}
        value={props.value}
        defaultChecked={props.checked}
        onClick={props.onClick}
        onChange={props.onChange}
      />
      {props.label && (
        <label class="form-check-label" for={props.id}>
          {props.value}
        </label>
      )}
    </div>
  );
};

export default RadioButton;
