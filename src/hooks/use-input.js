import { useReducer } from "react";

const initialState = {
  input: "",
  touched: "",
};

const inputReducer = (previousState, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...previousState,
        input: action.input,
      };
    case "BLUR":
      return {
        ...previousState,
        touched: true,
      };
    case "RESET":
      return initialState;

    default:
      return initialState;
  }
};

function useInput(validationFunction) {
  const [inputState, inputDispatch] = useReducer(inputReducer, initialState);

  let valid = validationFunction ? validationFunction(inputState.input) : true;
  const error = !valid && inputState.touched;

  const setInput = (input) => {
    inputDispatch({
      type: "SET_INPUT",
      input: input,
    });
  };

  const inputChangeHandler = (event) => {
    inputDispatch({
      type: "SET_INPUT",
      input: event.target.value,
    });
  };

  const inputBlurHandler = (event) => {
    inputDispatch({
      type: "BLUR",
    });
  };

  const reset = () => {
    inputDispatch({
      type: "RESET",
    });
  };

  return [
    inputState.input,
    setInput,
    valid,
    error,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  ];
}

export default useInput;
