import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Form, Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
export default function ResetPassword() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const history = useHistory();

  async function handelSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      await resetPassword(emailRef.current.value);
      setSuccess("Thats it, check your email to finish the process.");
    } catch {
      setError("Failed to reset password.");
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
            <h2 className="text-center mb-4">Reset Password</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handelSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required ref={emailRef} />
              </Form.Group>

              <Button disabled={loading} className="w-100" type="submit">
                Reset Password
              </Button>
              <div className="w-100 mt-2 text-center">
                <Link to="/LogIn">Login</Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
