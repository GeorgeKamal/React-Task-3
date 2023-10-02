import React from "react";
import classes from "./TableHeader.module.css";

function TableHeader(props) {
  const headers = props.headers.map((header, index) => (
    <th key={`header${index}`} className={classes["header-item"]}>
      {header}
    </th>
  ));
  return (
    <thead>
      <tr className={classes["header-row"]}>{headers}</tr>
    </thead>
  );
}

export default React.memo(TableHeader);
