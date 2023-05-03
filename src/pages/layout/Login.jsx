import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLoginBtn from "./SocialLoginBtn/SocialLoginBtn";

const Login = () => {
  return (
    <Form className="col-md-6 mx-auto mt-3 w-25">
      <h3>Please Login.</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </Form.Group>

      <Button className="" variant="warning" type="submit">
        Login
      </Button>
      <Form.Text className="text-success"></Form.Text>
      <Form.Text className="text-danger"></Form.Text>
      <p className="text-secondary">
        <small>
          New to Food Bonkers Website ?
          <span>
            <Link to="/register">Go to Register</Link>
          </span>{" "}
        </small>
      </p>
      <SocialLoginBtn></SocialLoginBtn>  
    </Form>
  );
};

export default Login;
