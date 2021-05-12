import React from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Loading = () => {
  return (
    <Container>
      <Spinner animation="border" />
    </Container>
  );
};

export default Loading;
