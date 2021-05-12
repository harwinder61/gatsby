import React from "react";
import styled from "styled-components";
import { Accordion, Card, Button, ListGroup, NavLink } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Sidebar = styled.div`
  position: fixed;
  top: 114px;
  left: 0;
  bottom: 0;
  width: 350px;
  background: #fff;
  border-right: 1px solid #cecece;
  z-index: 1;
  overflow-y: auto;
  @media (max-width: 1199px) {
    display: none;
  }
`;

const LessonCard = styled(Card)`
  border-color: #cecece;
`;

const IconContainer = styled.div`
  height: 24px;
  width: 24px;
  margin-right: 10px;
`;

const LessonsSidebar = ({
  lessonCategories,
  watchedLessons,
  onClickLesson,
  userAnswers,
}) => {
  const handleClick = lesson => event => {
    event.preventDefault();
    onClickLesson(lesson);
  };

  const defaultLessonCategory =
    lessonCategories.find(lessonCategory =>
      lessonCategory.lessons.includes(
        lesson => lesson.lessonId === watchedLessons[watchedLessons.length - 1]
      )
    ) || lessonCategories[0];

  return (
    <Sidebar>
      <Accordion defaultActiveKey={defaultLessonCategory.order}>
        {lessonCategories.map(lessonCategory => (
          <LessonCard
            key={lessonCategory.order}
            className="border-bottom border-top-0 border-left-0 border-right-0 rounded-0"
          >
            <Card.Header className="bg-warning text-center">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={lessonCategory.order}
                className="text-uppercase"
                disabled={
                  !lessonCategory.lessons.some(lesson =>
                    watchedLessons.includes(lesson.lessonId)
                  )
                }
              >
                <b>{lessonCategory.title}</b>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={lessonCategory.order}>
              <Card.Body className="b-0 p-0">
                <ListGroup className="rounded-0">
                  {lessonCategory.lessons.map(lesson => (
                    <ListGroup.Item
                      className="border-left-0 border-right-0 "
                      key={lesson.lessonId}
                      as={NavLink}
                      onClick={handleClick(lesson)}
                      disabled={!watchedLessons.includes(lesson.lessonId)}
                    >
                      <div className="d-flex align-items-center">
                        <IconContainer>
                          {userAnswers[lesson.lessonId] &&
                            userAnswers[lesson.lessonId].result && (
                              <FontAwesomeIcon
                                icon={faCheckCircle}
                                size="lg"
                                className="text-success"
                              />
                            )}
                        </IconContainer>
                        <div>{lesson.lessonName}</div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </LessonCard>
        ))}
      </Accordion>
    </Sidebar>
  );
};

LessonsSidebar.propTypes = {
  lessonCategories: PropTypes.array,
  watchedLessons: PropTypes.array,
  onClickLesson: PropTypes.func,
  userAnswers: PropTypes.object,
};

export default LessonsSidebar;
