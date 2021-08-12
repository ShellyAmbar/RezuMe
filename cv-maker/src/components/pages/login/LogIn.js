import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handelSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      console.log(currentUser);
      setSuccess("Login with success!");
      // setStatus("Log Out");
      history.push("/");
    } catch {
      setError("Failed to login");
      setSuccess("");
    }
    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Card className="w-100" style={{ maxWidth: "400px" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handelSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required ref={emailRef} />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required ref={passwordRef} />
              </Form.Group>

              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 mt-2 text-center">
              Don't have an account? <Link to="/SignUp">Sign UP</Link>.
            </div>
            <div className="w-100 mt-2 text-center">
              <Link to="/ResetPassword">Forgot password?</Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default LogIn;
