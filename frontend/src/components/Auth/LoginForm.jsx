import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { BASE_URL } from "./../../config/API";

const initialValues = { email: "", password: "" };

function LoginForm() {
  const navigate = useNavigate();
  const { loginUser } = useContext(ShopContext);

  const handleSubmit = (values) => {
    // e.preventDefault();
    console.log(values);
    loginUser({ userData: values, navigate });
  };

  // const user = localStorage.getItem("jwt");
  // useEffect(() => {
  //   if (user) {
  //     navigate(-1);
  //   }
  // }, [user, navigate]);

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="Password"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Button
            sx={{ mt: 2, padding: "1rem" }}
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
          >
            Login
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Don't have an Acccount
        <Button size="small" onClick={() => navigate("/account/register")}>
          Register
        </Button>
      </Typography>
    </div>
  );
}

export default LoginForm;
