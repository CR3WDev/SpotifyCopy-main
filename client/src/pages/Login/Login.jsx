import React, { useEffect, useState } from "react";
import LogoVerde from "../../images/logoVerde.png";
import { Formik, Form } from "formik";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import * as Yup from "yup";
import "./Login.scss";
import api from "../../services/api";
const Login = () => {
  const [users, setUsers] = useState([]);
  const validationLogin = Yup.object().shape({
    email: Yup.string()
      .email("invalid field")
      .required("email is a required field"),
    password: Yup.string()
      .min(8, "password must be at least 8 characters")
      .required("password is a required field"),
  });
  useEffect(()=> {
    api.get("/api/user").then(({data}) => {
      setUsers(data)
    })
  }, [])
  const handleClickLogin = () => {
    console.log(users)
  }
  return (
    <div className="loginContainer">
      <div className="content">
        <div className="logo">
          <img src={LogoVerde} alt="logo" />
        </div>
        <Formik
          onSubmit={handleClickLogin}
          validationSchema={validationLogin}
          initialValues={{
            email: "",
            password: "",
          }}
        >
          <Form className="loginForm">
            <Input
              name="email"
              type="text"
              title="Email"
              placeholder="Enter your email"
            ></Input>
            <Input
              name="password"
              placeholder="Enter your password"
              type="password"
              title="Password"
            />
            <div className="buttonBox">
              <Button type="submit" text="log in" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
