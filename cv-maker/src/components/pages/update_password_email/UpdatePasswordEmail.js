import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function UpdatePasswordEmail() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { changePassword, changeEmail, currentUser } = useAuth();
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successEmail, setSuccessEmail] = useState("");
  const [successPassword, setSuccessPassword] = useState("");
  const history = useHistory();

  async function handelSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setErrorPassword("Passwords must be matched");
    }

    try {
      setLoading(true);
      setErrorEmail("");
      await changeEmail(emailRef.current.value);
      setSuccessEmail("changed email with success!");
    } catch {
      setErrorEmail("Failed to update email");
      setSuccessEmail("");
    }

    try {
      setLoading(true);
      setErrorPassword("");

      await changePassword(passwordRef.current.value);
      setSuccessPassword("changed password with success!");
    } catch {
      setErrorPassword("Failed to update password");
      setSuccessPassword("");
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
            <h2 className="text-center mb-4">Update Registeration details</h2>
            {errorEmail && <Alert variant="danger">{errorEmail}</Alert>}
            {successEmail && <Alert variant="success">{successEmail}</Alert>}
            {errorPassword && <Alert variant="danger">{errorPassword}</Alert>}
            {successPassword && (
              <Alert variant="success">{successPassword}</Alert>
            )}
            <Form onSubmit={handelSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required ref={emailRef} />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required ref={passwordRef} />
              </Form.Group>

              <Form.Group id="password-confirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  required
                  ref={passwordConfirmationRef}
                />
              </Form.Group>

              <Button disabled={loading} className="w-100" type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
