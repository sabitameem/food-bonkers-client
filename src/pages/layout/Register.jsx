import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { AuthContext } from '../../../providers/AuthProvider';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLoginBtn from "./SocialLoginBtn/SocialLoginBtn";

const Register = () => {
 
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const navigate =useNavigate()
  
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(name, photo, email, password);
    console.log(photo)

      if (password.length < 7) {
        setError('Password must have at least 7 characters.');
        return;
      }
      else{
        createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);
          navigate('/')
          setSuccess('Registration successful!');
          setError(null);
        
        })
        .catch((error) => {
            setError(error.message);
            setSuccess(null);
        });
      }
 
}

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Container className="lg:w-25 mx-auto">
      <h3 className="mt-3">Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
          />
        </Form.Group>
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

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">Terms and Conditions</Link>{" "}
              </>
            }
          />
        </Form.Group>
        <Button variant="primary" disabled={!accepted} type="submit">
          Register
        </Button>
        <br />
        <br />
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}
        <Form.Text className="text-secondary">
          Already Have an Account? <Link to="/login">Login</Link>
        </Form.Text>
      </Form>
      <SocialLoginBtn></SocialLoginBtn>
    </Container>
  );
};

export default Register;
