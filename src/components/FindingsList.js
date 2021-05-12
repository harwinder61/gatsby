import React from "react";
import { ListGroup } from "react-bootstrap";
import QuizNavigationBar from "./QuizNavigationBar";
import PropTypes from "prop-types";
import styled from "styled-components";

const ListGroupItem = styled(ListGroup.Item)`
  border: 1px solid #fbc736;
  border-radius: 4px;
  margin-bottom: 30px;
  + .list-group-item {
    border-top-width: 1px;
  }
`;

const LinkQuestion = styled.a`
  font-size: 12px;
  font-weight: bold;
`;

const Question = styled.div`
  flex: 1 1 30%;
`;

const Answer = styled.div`
  display: flex;
  font-weight: bold;
  .span {
    display: none;
  }
  @media (max-width: 575px) {
    border-right: 0 !important;
    .span {
      display: inline;
    }
  }
`;

const Container = styled.div`
  display: flex;
  @media (max-width: 575px) {
    display: block;
  }
`;

const FindingsList = ({ findingsList }) => {
  return (
    <ListGroup>
      {findingsList.map((item, key) => {
        const yesPercentage = (item.yesResponse / item.sampleSize) * 100;
        const noPercentage = 100 - yesPercentage;
        return (
          <ListGroupItem className="px-4 pt-4" key={key}>
            <Container className="mb-3">
              <div className="mr-3 d-flex align-items-center">{key + 1}. </div>
              <Question>{item.question}</Question>
              <Answer className="p-3 border-right d-flex align-items-center justify-content-center flex-column">
                {item.result ? "YES" : "NO"}
              </Answer>
              <Answer className="p-3 d-flex align-items-center flex-column justify-content-center">
                {Math.floor(yesPercentage)}% Yes
              </Answer>
              <Answer className="p-3 d-flex align-items-center flex-column justify-content-center">
                {Math.floor(noPercentage)}% No
              </Answer>
            </Container>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

FindingsList.propTypes = {
  findingsList: PropTypes.array,
};

export default FindingsList;
