import React, { useRef, useState } from "react";
import "./ProjectForm.css";
import { Form, Card, Button, Alert, Container } from "react-bootstrap";

export default function ProjectForm(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const nameRef = useRef();
  const descriptionRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();
  const skillsRef = useRef();
  const youtubeLinkRef = useRef();
  const gitLinkRef = useRef();
  const siteLinkRef = useRef();

  const [loading, setLoading] = useState(false);

  async function handelSubmit(e) {
    e.preventDefault();
    const project = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      startTime: startTimeRef.current.value,
      endTime: endTimeRef.current.value,
      siteLink: siteLinkRef.current.value,
      skills: skillsRef.current.value,
      youtubeLink: youtubeLinkRef.current.value,
      gitLink: gitLinkRef.current.value,
    };
    props.add(project);
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

              <Form.Group id="skills">
                <Form.Label>Skills</Form.Label>
                <Form.Control ref={skillsRef} />
              </Form.Group>

              <Form.Group id="link">
                <Form.Label>Youtube Link</Form.Label>
                <Form.Control ref={youtubeLinkRef} />
              </Form.Group>
              <Form.Group id="link">
                <Form.Label>Git Link</Form.Label>
                <Form.Control ref={gitLinkRef} />
              </Form.Group>
              <Form.Group id="link">
                <Form.Label>Site Link</Form.Label>
                <Form.Control ref={siteLinkRef} />
              </Form.Group>

              <Button disabled={loading} className="w-100" type="submit">
                Add Project
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
