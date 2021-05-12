import React from "react";
import { Container } from "react-bootstrap";
import QuizNavigationBar from "./QuizNavigationBar";
import PropTypes from "prop-types";

import styled from "styled-components";
import "./layout.scss";

const QuizContainer = styled(Container)`
  margin-top: 114px;
`;

const QuizLayout = ({ children }) => {
  return (
    <>
      <QuizNavigationBar />
      <QuizContainer fluid>{children}</QuizContainer>
    </>
  );
};

QuizLayout.propTypes = {
  children: PropTypes.node,
};

export default QuizLayout;
