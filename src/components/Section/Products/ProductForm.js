import { useState, useContext } from "react";

import Input from "../../Input/Input";
import Button from "../../UI/Buttons/Button";
import ButtonOutline from "../../UI/Buttons/ButtonOutline";
import RadioButton from "../../UI/Buttons/RadioButton";
import classes from "./ProductForm.module.css";
import useInput from "../../../hooks/use-input";
import axios from "axios";
import ProductContext from "../../../store/product-context";

const validateText = (text) => text.trim().length !== 0;

function ProductForm(props) {
  // const context = useContext(ProductContext)
  const [firstLoad, setFirstLoad] = useState(true);
  let productToBeEdited;
  if (props.content) {
    productToBeEdited = { ...props.content };
    delete productToBeEdited.ID;
  }

  const [
    name,
    setName,
    nameValid,
    nameError,
    nameChangeHandler,
    nameBlurHandler,
    nameReset,
  ] = useInput(validateText);
  const [alt, setAlt] = useState(
    productToBeEdited ? productToBeEdited["Alt Name"] : ""
  );
  const [
    description,
    setDescription,
    descriptionValid,
    descriptionError,
    descriptionChangeHandler,
    descriptionBlurHandler,
    descriptionReset,
  ] = useInput(validateText);
  const [
    price,
    setPrice,
    priceValid,
    priceError,
    priceChangeHandler,
    priceBlurHandler,
    priceReset,
  ] = useInput((price) => price >= 1);
  const [isNew, setIsNew] = useState(
    productToBeEdited ? productToBeEdited.New : "false"
  );
  const [
    discount,
    setDiscount,
    discountValid,
    discountError,
    discountChangeHandler,
    discountBlurHandler,
    discountReset,
  ] = useInput(
    (discount) => 1 <= parseFloat(discount) && parseFloat(discount) < 100
  );
  const [imageState, setImageState] = useState({
    image: productToBeEdited ? productToBeEdited.Image : "",
    valid: true,
  });

  if (productToBeEdited && firstLoad) {
    setFirstLoad(false);
    setName(productToBeEdited.Name);
    setDescription(productToBeEdited.Description);
    setPrice(productToBeEdited.Price);
    setDiscount(productToBeEdited.Discount ? productToBeEdited.Discount : "");
  }

  let formValid = nameValid && descriptionValid && priceValid;

  //   const nameReference = useRef();
  //   const altReference = useRef();
  //   const descriptionReference = useRef();
  //   const priceReference = useRef();
  //   const [isNew, setIsNew] = useState("false");
  //   const discountReference = useRef();
  //   const [image, setImage] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    let imageValid =
      imageState.image.startsWith("data:image/png;base64,") &&
      imageState.image.length > "data:image/png;base64,".length;
    setImageState((previousState) => ({
      ...previousState,
      valid: imageValid,
    }));
    formValid = formValid && imageValid;
    if (!formValid) {
      return;
    }

    let product = {
      name,
      alt: alt.trim().length === 0 ? name : alt,
      description,
      price: parseFloat(price),
      src: imageState.image,
    };
    if (isNew === "true") {
      product = { ...product, new: "true" };
    }
    if (discount.toString().trim().length !== 0) {
      product = { ...product, discount: parseFloat(discount) };
    }

    if (productToBeEdited) {
      product = { ...product, alt: alt };
      props.onEdit(product);
    } else {
      props.onAdd(product);
    }

    nameReset();
    setAlt("");
    descriptionReset();
    priceReset();
    setIsNew("false");
    discountReset();
    setImageState({ image: "default", valid: false });

    props.onClick();
  };

  const imageHandler = (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setImageState({
        image: reader.result,
        valid:
          reader.result.startsWith("data:image/png;base64,") &&
          reader.result.trim().length > "data:image/png;base64,".trim().length,
      });
      // console.log("RESULT", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const altChangeHandler = (event) => {
    setAlt(event.target.value);
  };

  return (
    <form id="form" className={classes.form}>
      <Input
        className={`${nameError && classes.invalid}`}
        name="Name"
        input={{ placeholder: "Name" }}
        value={name}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        //   ref={nameReference}
      />
      {nameError && <p className={classes["error-text"]}>Invalid Name</p>}
      <Input
        name="Alt Name"
        input={{ placeholder: "Alt Name (Same As Name By Default)" }}
        value={alt}
        onChange={altChangeHandler}
        // ref={altReference}
      />
      <Input
        className={`${descriptionError && classes.invalid}`}
        name="Description"
        input={{ placeholder: "Description" }}
        value={description}
        onChange={descriptionChangeHandler}
        onBlur={descriptionBlurHandler}
        // ref={descriptionReference}
        textarea
      />
      {descriptionError && (
        <p className={classes["error-text"]}>Invalid Description</p>
      )}
      <Input
        className={`${priceError && classes.invalid}`}
        name="Price"
        input={{ placeholder: "Price", type: "number", min: 1, step: 0.01 }}
        value={price}
        onChange={priceChangeHandler}
        onBlur={priceBlurHandler}
        // ref={priceReference}
      />
      {priceError && <p className={classes["error-text"]}>Invalid Price</p>}
      <fieldset className="form-group py-2">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">New</legend>
          <div className="col-sm-10">
            <div className="form-check px-0">
              <RadioButton
                className="m-0"
                name="New"
                id="true"
                value="true"
                onChange={setIsNew.bind(null, "true")}
                checked={productToBeEdited && productToBeEdited.New === "true"}
              />
              <label className="form-check-label me-5" htmlFor="true">
                True
              </label>
              <RadioButton
                className="m-0"
                name="New"
                id="false"
                value="false"
                onChange={setIsNew.bind(null, "false")}
                checked={!(productToBeEdited && productToBeEdited.New)}
              />
              <label className="form-check-label me-5" htmlFor="false">
                False
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <Input
        name="Discount"
        input={{
          placeholder: "Discount Percentage (1-99)",
          type: "number",
          min: 1,
          step: 1,
          max: 99,
        }}
        value={discount}
        onChange={discountChangeHandler}
        onBlur={discountBlurHandler}
        // ref={discountReference}
      />
      <Input
        className={`${!imageState.valid && classes.invalid}`}
        name="Image"
        onChange={imageHandler}
        input={{ type: "file" }}
        // onChange={imageChangeHandler}
        // onBlur={imageBlurHandler}
      />
      {!imageState.valid && (
        <p className={classes["error-text"]}>Invalid Image</p>
      )}
      <div className="form-group row">
        <div className="container-fluid d-flex justify-content-end">
          <Button
            onClick={submitHandler}
            className="mx-2"
            text="Submit"
            disabled={!formValid}
          />
          <ButtonOutline
            onClick={props.onClick}
            className="mx-2"
            text="Cancel"
          />
        </div>
      </div>
    </form>
  );
}

export default ProductForm;
