import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClick}/>;
}

function Overlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  return <>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById("overlay"))}
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById("overlay"))}
  </>;
}

export default Modal;
