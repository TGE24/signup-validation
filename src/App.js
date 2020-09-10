import React from "react";
import { ReactComponent as Image } from "./img/login.svg";
import Login from "./styles/login";
import Input from "./components/Input";
import Button from "./components/Button";
import { useFormik } from "formik";
import axios from "axios";

export default function () {
  const [emailResponse, setEmailResponse] = React.useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "FirstName is required";
    }
    if (!values.lastName) {
      errors.lastName = "LastName is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (emailResponse?.status === "EXISTS") {
      errors.email = "Email is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };


  const validateEmail = (email) => {
    axios.post("https://api.raisely.com/v3/check-user",
      {
        "campaignUuid": process.env.REACT_APP_REQUEST_ID,
        "data": {
          "email": email
        }
      }).then((res) => {
        setEmailResponse(res?.data?.data)
      }).catch((err) => console.log(err))
  }

  const onSubmit = (values) => {
    axios.post(
      "https://api.raisely.com/v3/signup",
      {
        "campaignUuid": process.env.REACT_APP_REQUEST_ID,
        "data": values
      }).then((res) => {
        console.log(res)
      }).catch((err) => console.log(err))
  };

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validate,
    validateOnChange: false,
  });

  const onInputFocus = (name) => () => {
    form.setFieldError(name, undefined);
  };

  React.useEffect(() => {
    validateEmail(form.values.email)
  }, [form.values.email])


  return (
    <>
      <Login>
        <Login.Form>
          {/* <h2>Welcome Back</h2>
          <h1>Login to your Account</h1> */}
          <form onSubmit={form.handleSubmit}>
            <Input
              type="firstName"
              placeholder="First Name"
              id="firstName"
              name="firstName"
              label="firstName"
              fullWidth
              value={form.values.firstName}
              onChange={form.handleChange}
              errorText={form.errors.firstName}
              onFocus={onInputFocus("firstName")}
            />
            <Input
              type="lastName"
              placeholder="Last Name"
              id="lastName"
              name="lastName"
              label="lastName"
              fullWidth
              value={form.values.lastName}
              onChange={form.handleChange}
              errorText={form.errors.lastName}
              onFocus={onInputFocus("lastName")}
            />
            <Input
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
              label="email"
              fullWidth
              value={form.values.email}
              onChange={form.handleChange}
              errorText={form.errors.email}
              onFocus={onInputFocus("email")}
            />
            <Input
              placeholder="Password"
              name="password"
              label="password"
              id="password"
              type="password"
              passwordToggle
              value={form.values.password}
              onChange={form.handleChange}
              errorText={form.errors.password}
              onFocus={onInputFocus("password")}
            />
            <Button
              className="button"
              type="submit"
            // loading={loading}
            >
              Sign Up
              </Button>
          </form>
        </Login.Form>
        <div className="img">
          <Image className="image" />
        </div>
      </Login>
    </>
  );
}
