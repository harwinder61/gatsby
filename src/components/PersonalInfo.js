import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { validateEmail } from "../api/users";
import getMonthAgeByBirthday from "../utils/getMonthAgeByBirthday";

const StyledFormLabel = styled(Form.Label)`
  font-size: 22px;
`;

const StyledFormControl = styled(Form.Control)`
  font-size: 18px;
  border-radius: 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
`;

const PersonalInfo = ({ onSubmit }) => {
  const [emailError, setEmailError] = useState(null);
  const [ageError, setAgeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handlePreSubmit = async info => {
    setLoading(true);
    const isValidEmail = await validateEmail({ email: info.email });
    setLoading(false);
    if (
      !(
        getMonthAgeByBirthday(info.childBirthday) >= 12 &&
        getMonthAgeByBirthday(info.childBirthday) <= 36
      )
    ) {
      setAgeError("Age is not between 12 months and 36 months");
    } else if (!isValidEmail) {
      setEmailError("Email is already registered.");
    } else {
      onSubmit(info);
    }
  };

  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });

  return (
    <Form onSubmit={handleSubmit(handlePreSubmit)}>
      <h5 className="mb-4">Welcome, please complete the form:</h5>
      <Form.Group className="mb-3">
        <StyledFormLabel>
          <b>1. What is your Email address</b>?
        </StyledFormLabel>
        <StyledFormControl
          type="email"
          ref={register({ required: true })}
          name="email"
        />
        {emailError && (
          <Form.Text className="text-danger">{emailError}</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <StyledFormLabel>
          <b>2. What is you Password</b>?
        </StyledFormLabel>
        <StyledFormControl
          type="password"
          ref={register({ required: true })}
          name="password"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <StyledFormLabel>
          <b>3. What is your Name?</b>
        </StyledFormLabel>
        <StyledFormControl ref={register({ required: true })} name="name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <StyledFormLabel>
          <b>4. What is your Child's name?</b>
        </StyledFormLabel>
        <StyledFormControl
          ref={register({ required: true })}
          name="childName"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <StyledFormLabel>
          <b>5. What is your Child's birthday?</b>
        </StyledFormLabel>
        <StyledFormControl
          ref={register({ required: true })}
          type="date"
          name="childBirthday"
        />
        {ageError && <Form.Text className="text-danger">{ageError}</Form.Text>}
      </Form.Group>
      <div className="text-right mt-5">
        <Button
          variant="warning"
          size="lg"
          type="submit"
          className="px-4"
          disabled={!formState.isValid || isLoading}
        >
          Next step
        </Button>
      </div>
    </Form>
  );
};

export default PersonalInfo;
