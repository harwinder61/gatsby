import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { authenticate } from "../api/users";
import "../components/layout.scss";

const StyledContainer = styled(Container)`
  padding-top: 150px;
  padding-bottom: 150px;
`;

const Signin = () => {
  const [error, setError] = useState(null);
  const onSubmit = async info => {
    try {
      const { token } = await authenticate(info);
      localStorage.setItem("token", token);
      window.location.href = "/actions";
    } catch (err) {
      setError(err.toString());
    }
  };
  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
  return (
    <div>
      <NavigationBar />
      <StyledContainer>
        <Row className="justify-content-center">
          <Col md="4">
            <h4>Signin</h4>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  placeholder="Enter email"
                  type="email"
                  ref={register({ required: true })}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={register({ required: true })}
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                block
                size="lg"
                variant="primary"
                type="submit"
                disabled={!formState.isValid}
              >
                Signin
              </Button>
            </Form>
          </Col>
        </Row>
      </StyledContainer>
    </div>
  );
};

export default Signin;
