import React, { useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/LessonsLayout";
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

const NavBreakLine = styled.hr`
  height: 3px;
  border-width: 0;
  color: #e7e7e7;
  background-color: #e7e7e7;
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

const LessonWrapper = styled.div`
  margin: auto;
`;

const Container = styled.div`
  background-color: #fff;
  max-width: 832px;
  margin: auto;
  padding: 0 60px;
  border-radius: 5px;
  /* @media (max-width: 530px) {
    width: 80px;
    font-size: 17px;
  } */
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

const ActiveTipVideoBlock = styled.div`
  margin: 60px 0;
  width: 100%;
  background-color: grey;
  min-height: 399px;
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
  width: 160px;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  height: 50px;
  color: #ffffff;
`;

const FlatButton = styled.button`
  margin: auto;
  background: #fff;
  width: 160px;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  height: 50px;
  color: #000;
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

export const query = graphql`
  query($slug: String) {
    contentfulLessons(slug: { eq: $slug }) {
      lessonName
      lessonDescription {
        lessonDescription
      }
      tip1Title
      tip1Description {
        tip1Description
      }
      tip2Title {
        tip2Title
      }
      tip2Description {
        tip2Description
      }
      tip3Title
      tip3Description {
        tip3Description
      }
      videoName
      cloudinaryVideo {
        secure_url
      }
      practiceChild
      correctPracticeLevels
      failedMessage {
        failedMessage
      }
    }
  }
`;

const LessonTemplate = ({ data }) => {
  const [activeTip, setActiveTip] = useState(0);
  const [choosedPracticeLevels, setChoosedPracticeLevels] = useState([]);
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
  } = data.contentfulLessons;
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

  const videoUrl =
    cloudinaryVideo && cloudinaryVideo.length
      ? cloudinaryVideo[0].secure_url
      : null;

  const failedMessage =
    (failedMessageObj && failedMessageObj.failedMessage) || null;

  const handleActiveTip = index => {
    setActiveTip(index);
  };

  const handleChangePracticeLevels = e => {
    const { value } = e.target;
    if (!choosedPracticeLevels.includes(value))
      setChoosedPracticeLevels([...choosedPracticeLevels, value]);
    else {
      setChoosedPracticeLevels([
        ...choosedPracticeLevels.filter(item => item !== value),
      ]);
    }
  };

  const handleSubmitPracticeLevels = () => {
    setIsFailedMessage(
      choosedPracticeLevels.every(choosedPracticeLevel =>
        correctPracticeLevels.includes(choosedPracticeLevel)
      )
    );
  };

  const handleCloseModal = () => {
    setIsFailedMessage(false);
  };

  return (
    <header className="lessons">
      <div className="container mt-mobile">
        <div className="row h-100  align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h1 className="text-white">Communication plan.</h1>
          </div>
          <div className="col-lg-8 align-self-baseline">
            <h2 className="text-white-75 mb-35  font-weight-light suhead-text">
              Follow our tips below to master each skill.
            </h2>
          </div>
        </div>
      </div>
      <Layout>
        <LessonWrapper>
          <Container>
            <NavLessonTitle>{lessonName}</NavLessonTitle>
            <NavBreakLine />
            <NavLessonDescription>{lessonDescription}</NavLessonDescription>
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
            <Video
              videoSrcURL={videoUrl}
              videoTitle="Official Music Video on YouTube"
            />
            <SectionTitle>How did it go today?</SectionTitle>
            <OptionsText>Select an option below:</OptionsText>
            <AnswerWrapper>
              <Ul>
                {practiceChild.map((practice, key) => (
                  <Li>
                    <Label>
                      <Input
                        name="practice"
                        type="radio"
                        value={practice}
                        onChange={handleChangePracticeLevels}
                      />{" "}
                      Answer {key + 1} - {practice}
                    </Label>
                  </Li>
                ))}
              </Ul>
            </AnswerWrapper>
            <SectionNavWrapper>
              <PrimaryButton onClick={handleSubmitPracticeLevels}>
                Next skill
              </PrimaryButton>
            </SectionNavWrapper>
            <SectionNavWrapper>
              <FlatButton>See all skills.</FlatButton>
            </SectionNavWrapper>
          </Container>
        </LessonWrapper>
      </Layout>
      {isFailedMessage && (
        <Modal
          show
          size="lg"
          contentLabel="Minimal Modal Example"
          onHide={handleCloseModal}
        >
          {failedMessage}
        </Modal>
      )}
    </header>
  );
};

export default LessonTemplate;
