import React from "react";
import { Field, ErrorMessage } from "formik";
import "./Input.scss";
const Input = (props) => {
  return (
    <div className="inputContainer">
      <label htmlFor={props.name}>{props.title}</label>
      <Field
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
      ></Field>
      <ErrorMessage component="span" name={props.name} />
    </div>
  );
};

export default Input;
