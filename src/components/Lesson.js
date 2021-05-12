import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Video from "../components/Video";
import Modal from "../components/Modal";
import styled from "styled-components";

const NavLessonTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-top: 30px;
`;

const NavLessonDescription = styled.h3`
  font-size: 20px;
  line-height: 34px;
`;

const NavTipNavigator = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const NavTipButton = styled.button`
  background: #fbc735;
  /* width: 160px; */
  border: none;
  border-radius: 50px;
  font-size: 20px;
  height: 50px;
  color: #ffffff;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  @media (max-width: 530px) {
    margin: 0 5px;
  }
`;

const LessonWrapper = styled.div``;

const Container = styled.div`
  background-color: #fff;
  max-width: 832px;
  margin: auto;
  padding: 0 60px;
  border-radius: 5px;
  @media (max-width: 530px) {
    padding: 0 20px;
  }
`;

const ActiveTipTitle = styled.h1`
  padding: 20px 0 10px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const ActiveTipInstructions = styled.h3`
  font-size: 20px;
  line-height: 34px;
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const SectionNavWrapper = styled.div`
  display: flex;
`;

const PrimaryButton = styled.button`
  margin: auto;
  background: #fbc735;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  padding: 0 30px;
  height: 50px;
  color: #ffffff;
`;

const AnswerWrapper = styled.div``;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li``;

const Label = styled.label`
  padding-left: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const Input = styled.input``;

const OptionsText = styled.p`
  color: #000 !important;
`;

const Lesson = ({ data, userAnswers, onClickNext }) => {
  const [activeTip, setActiveTip] = useState(0);
  const [choosedPracticeLevel, setChoosedPracticeLevel] = useState("");
  const [isFailedMessage, setIsFailedMessage] = useState(false);

  const {
    lessonName,
    lessonDescription: { lessonDescription },
    tip1Title,
    tip2Title: { tip2Title },
    tip2Description: { tip2Description },
    tip1Description: { tip1Description },
    tip3Title,
    tip3Description: { tip3Description },
    cloudinaryVideo,
    practiceChild,
    correctPracticeLevels,
    failedMessage: failedMessageObj,
  } = data;

  const tips = [
    {
      title: tip1Title,
      description: tip1Description,
    },
    {
      title: tip2Title,
      description: tip2Description,
    },
    {
      title: tip3Title,
      description: tip3Description,
    },
  ];

  useEffect(() => {
    setChoosedPracticeLevel("");
  }, [data]);
  const videoUrl =
    cloudinaryVideo && cloudinaryVideo.length
      ? cloudinaryVideo[0].secure_url
      : null;

  const failedMessage =
    (failedMessageObj && failedMessageObj.failedMessage) || null;

  const handleActiveTip = index => {
    setActiveTip(index);
  };

  const handleChangePracticeLevel = e => {
    const { value } = e.target;
    setChoosedPracticeLevel(value);
  };

  const isAlreadyCorrect = userAnswers[data.lessonId]
    ? userAnswers[data.lessonId].result
    : false;

  const handleSubmitPracticeLevels = () => {
    const isCorrect = correctPracticeLevels
      ? correctPracticeLevels.includes(choosedPracticeLevel)
      : false;
    if (isCorrect || isAlreadyCorrect) {
      setIsFailedMessage(false);
      onClickNext();
    } else {
      setIsFailedMessage(true);
    }
  };

  const handleCloseModal = () => {
    setIsFailedMessage(false);
  };

  return (
    <>
      <LessonWrapper>
        <Container>
          <NavLessonTitle className="mb-4">{lessonName}</NavLessonTitle>
          <NavLessonDescription className="mb-5">
            {lessonDescription}
          </NavLessonDescription>
          <Video
            videoSrcURL={videoUrl}
            videoTitle="Official Music Video on YouTube"
          />
          <NavTipNavigator>
            {tips.map((_, key) => (
              <NavTipButton onClick={() => handleActiveTip(key)}>
                Tip {key + 1}
              </NavTipButton>
            ))}
          </NavTipNavigator>
          <ActiveTipTitle>
            Tip {activeTip + 1} - {tips[activeTip].title}
          </ActiveTipTitle>
          <ActiveTipInstructions>
            {tips[activeTip].description}
          </ActiveTipInstructions>

          <SectionTitle>How did it go today?</SectionTitle>

          {isAlreadyCorrect ? (
            <>
              <OptionsText>Your answer is correct:</OptionsText>
              <AnswerWrapper className="mb-5">
                <b>{userAnswers[data.lessonId].answers.join(", ")}</b>
              </AnswerWrapper>
            </>
          ) : (
            <>
              <OptionsText>Select an option below:</OptionsText>
              <AnswerWrapper>
                <Form.Group className="mb-4">
                  <Form.Control
                    as="select"
                    className="form-control"
                    onChange={handleChangePracticeLevel}
                    value={choosedPracticeLevel}
                    required
                  >
                    <option value="">Select one</option>
                    {practiceChild.map(practice => (
                      <option key={practice} value={practice}>
                        {practice}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </AnswerWrapper>
            </>
          )}
          <SectionNavWrapper className="pb-5">
            <PrimaryButton onClick={handleSubmitPracticeLevels}>
              {isAlreadyCorrect ? "Next lesson" : "Submit Answer"}
            </PrimaryButton>
          </SectionNavWrapper>
        </Container>
      </LessonWrapper>
      {isFailedMessage && (
        <Modal
          show
          size="lg"
          contentLabel="Sorry!"
          onHide={handleCloseModal}
          footer={
            <>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </>
          }
        >
          {failedMessage}
        </Modal>
      )}
    </>
  );
};

export default Lesson;
