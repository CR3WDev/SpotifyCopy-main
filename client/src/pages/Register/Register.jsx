import React from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import LogoVerde from "../../images/logoVerde.png";
import "./Register.scss";
const Register = () => {
  const validationRegister = Yup.object().shape({
    email: Yup.string()
      .email("invalid field")
      .required("email is a required field"),
    confirmEmail: Yup.string()
      .email("invalid field")
      .required("email is a required field")
      .oneOf([Yup.ref("email"), null], "the emails must be the same "),
    password: Yup.string()
      .min(8, "password must be at least 8 characters")
      .required(),
    profileName: Yup.string().required("profile name is a required field"),
  });
  const handleClickRegister = (values) => {
    Axios.post("https://localhost:3001/register", {
      email: values.email,
      password: values.password,
      profileName: values.profileName,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="register">
      <div className="content">
        <div className="logo">
          <img src={LogoVerde} alt="logo" />
        </div>
        <h1>Sing up for free to start listening.</h1>
        <Formik
          onSubmit={handleClickRegister}
          validationSchema={validationRegister}
          initialValues={{
            email: "",
            confirmEmail: "",
            password: "",
            profileName: "",
          }}
        >
          <Form className="registerForm">
            <Input
              name="email"
              placeholder="Enter your email"
              type="text"
              title="What's your email?"
            />
            <Input
              name="confirmEmail"
              type="text"
              title="Confirm your email"
              placeholder="Enter your email again"
            />
            <Input
              name="password"
              placeholder="Create a password"
              type="text"
              title="Create a password"
            />
            <Input
              name="profileName"
              type="text"
              placeholder="Enter a profile name."
              title="What should we call you?"
            />
            <div className="buttonBox">
              <Button type="submit" text="sign up" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
