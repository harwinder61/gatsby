import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import QuizLayout from "../components/QuizLayout";
import FindingsList from "../components/FindingsList";
import Video from "../components/Video";
import { getFindings } from "../api/findings";
import Loading from "../components/Loading";
import { getUserQuiz } from "../api/quiz";
import { navigate } from "gatsby";
import ageString from "../constants/age";
import getMonthAgeByBirthday from "../utils/getMonthAgeByBirthday";
import Auth from "../components/Auth";

export const query = graphql`
  query {
    generalFindings: allContentfulQuestionnaire {
      nodes {
        question {
          question
        }
        answers
        correctAnswers
        yesResponseByAge {
          twelve {
            sampleSize
            totalYes
          }
          thirteen {
            sampleSize
            totalYes
          }
          fourteen {
            sampleSize
            totalYes
          }
          fifteen {
            sampleSize
            totalYes
          }
          sixteen {
            sampleSize
            totalYes
          }
          seventeen {
            sampleSize
            totalYes
          }
          eighteen {
            sampleSize
            totalYes
          }
          nineteen {
            sampleSize
            totalYes
          }
          twenty {
            sampleSize
            totalYes
          }
          twentyOne {
            sampleSize
            totalYes
          }
          twentyTwo {
            sampleSize
            totalYes
          }
          twentyThree {
            sampleSize
            totalYes
          }
          twentyFour {
            sampleSize
            totalYes
          }
          twentyFive {
            sampleSize
            totalYes
          }
          twentySix {
            sampleSize
            totalYes
          }
          twentySeven {
            sampleSize
            totalYes
          }
          twentyEight {
            sampleSize
            totalYes
          }
          twentyNine {
            sampleSize
            totalYes
          }
          thirty {
            sampleSize
            totalYes
          }
          thirtyOne {
            sampleSize
            totalYes
          }
          thirtyTwo {
            sampleSize
            totalYes
          }
          thirtyThree {
            sampleSize
            totalYes
          }
          thirtyFour {
            sampleSize
            totalYes
          }
          thirtyFive {
            sampleSize
            totalYes
          }
          thirtySix {
            sampleSize
            totalYes
          }
        }
        contentfulid
      }
    }
    findingsMedia: allContentfulFindings {
      nodes {
        id
        video {
          secure_url
        }
        title
      }
    }
  }
`;

const GetStartedButton = styled(Button)`
  position: fixed;
  bottom: 100px;
  right: 200px;
  @media (max-width: 575px) {
    bottom: 20px;
    right: 20px;
  }
`;

const Findings = ({ data }) => {
  const [userFindings, setUserFindings] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [personalInfo, setPersonalInfo] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      setUserFindings(await getFindings());
      setLoading(false);
    } catch (err) {
      window.location.href = "/not-found";
      setLoading(false);
    }
  }, []);

  useEffect(async () => {
    try {
      setLoading(true);
      const quiz = await getUserQuiz();
      let newUserAnswers = {};
      quiz.userAnswers.forEach(answer => {
        newUserAnswers[answer.questionId] = {
          answers: answer.answers,
          result: answer.result,
        };
      });
      setPersonalInfo({
        name: quiz.name,
        email: quiz.email,
        childName: quiz.childName,
        childBirthday: quiz.childBirthday,
      });
      setUserAnswers(newUserAnswers);
      setLoading(false);
    } catch (err) {
      window.location.href = "/not-found";
      setLoading(false);
    }
  }, []);

  const {
    findingsMedia: {
      nodes: [findingsMedia],
    },
    generalFindings: { nodes: generalFindingNodes },
  } = data;

  const videoSrcURL = findingsMedia.video[0].secure_url;

  const monthAge = getMonthAgeByBirthday(personalInfo.childBirthday);

  const findingsList = generalFindingNodes.map(findingNode => {
    const findings = findingNode.yesResponseByAge[
      ageString[monthAge] || "zero"
    ] || {
      sampleSize: 0,
      totalYes: 0,
    };

    const userAnswer = userAnswers[findingNode.contentfulid];

    const userFinding = userFindings.find(
      item => item.questionid === findingNode.contentfulid
    ) || { childInfo: [] };

    const userChildInfo = userFinding.childInfo.find(
      child => child.age === monthAge
    ) || { sampleSize: 0, yesResponse: 0 };

    return {
      questionId: findingNode.contentfulid,
      question: findingNode.question.question,
      sampleSize: Number(findings.sampleSize) + userChildInfo.sampleSize,
      yesResponse: Number(findings.totalYes) + userChildInfo.yesResponse,
      userAnswer: userAnswer ? userAnswer.answers : [],
      result: userAnswer ? userAnswer.result : false,
    };
  });

  const handleGetStarted = () => {
    localStorage.removeItem("userAnswers");
    localStorage.removeItem("personalInfo");
    localStorage.removeItem("watchedLessons");
    window.location.href = "/actions";
  };

  const renderFindings = isLoading ? (
    <Loading />
  ) : (
    <QuizLayout>
      <div className="page-section">
        <Container>
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-9">
              <h3 className="mb-1">Our Findings</h3>
              <p className="mb-4">
                The score below shows where your child stands amongs 16 months
              </p>
              <div className="mb-4">
                <Video videoSrcURL={videoSrcURL} />
              </div>
              <p className="text-center mb-3">
                Watch video then review your results below
              </p>
              <FindingsList findingsList={findingsList} />
            </div>
          </div>
        </Container>
        <GetStartedButton
          className="px-4"
          variant="success"
          size="lg"
          onClick={handleGetStarted}
        >
          Get Started
        </GetStartedButton>
      </div>
    </QuizLayout>
  );

  return <Auth>{renderFindings}</Auth>;
};

export default Findings;
