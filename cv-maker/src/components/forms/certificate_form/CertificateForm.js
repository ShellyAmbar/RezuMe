import React, { useRef, useState } from "react";

import { Form, Card, Button, Alert, Container } from "react-bootstrap";

export default function CertificateForm(props) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();

  const siteLinkRef = useRef();

  const [loading, setLoading] = useState(false);

  async function handelSubmit(e) {
    e.preventDefault();
    const certificate = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      startTime: startTimeRef.current.value,
      endTime: endTimeRef.current.value,
      siteLink: siteLinkRef.current.value,
    };
    props.add(certificate);
    setLoading(false);
  }

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center">
        <Card className="w-100">
          <Card.Body>
            <Form onSubmit={handelSubmit}>
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control required ref={nameRef} />
              </Form.Group>
              <Form.Group id="startTime">
                <Form.Label>Start time</Form.Label>
                <Form.Control required ref={startTimeRef} />
              </Form.Group>
              <Form.Group id="endTime">
                <Form.Label>End time</Form.Label>
                <Form.Control required ref={endTimeRef} />
              </Form.Group>

              <Form.Group id="description">
                <Form.Label>Description</Form.Label>
                <Form.Control required ref={descriptionRef} />
              </Form.Group>

              <Form.Group id="siteLink">
                <Form.Label>Site link</Form.Label>
                <Form.Control ref={siteLinkRef} />
              </Form.Group>

              <Button disabled={loading} className="w-100" type="submit">
                Add Certificate
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
