import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const reference = useRef();
  useImperativeHandle(
    ref,
    () => {
      return {
        getValue() {
          return reference.current.value;
        },
      };
    },
    []
  );

  return (
    <div
      className={`form-group row pb-2 ${props.className && props.className}`}
    >
      <label htmlFor={props.name} className="col-sm-2 col-form-label">
        {props.name}
      </label>
      <div className="col-sm-10">
        {props.textarea && (
          <textarea
            className="form-control"
            id={props.name}
            rows="2"
            ref={reference}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            defaultValue={props.defaultValue}
            readOnly={props.readOnly}
            {...props.input}
          />
        )}
        {!props.textarea && (
          <input
            type="text"
            className="form-control"
            id={props.name}
            ref={reference}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            defaultValue={props.defaultValue}
            readOnly={props.readOnly}
            {...props.input}
          />
        )}
      </div>
    </div>
  );
});

export default Input;
