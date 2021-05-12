import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import PersonalInfo from "../components/PersonalInfo";
import QuizLayout from "../components/QuizLayout";
import QuizSidebar from "../components/QuizSidebar";
import Video from "../components/Video";
import questionFlow from "../config/questionFlow";
import { takeQuiz } from "../api/quiz";
import { navigate } from "gatsby";

export const query = graphql`
  query {
    questionnaire: allContentfulQuestionnaire {
      nodes {
        contentfulid
        question {
          question
        }
        answers
        correctAnswers
      }
    }
    categories: allContentfulQuestionnaireCategories {
      nodes {
        categoryId
        title
        video {
          secure_url
        }
      }
    }
    sidebarImg: file(relativePath: { eq: "sidebar-bottom-icon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Quiz = ({ data }) => {
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({});
  const [isPersonalInfo, setIsPersonalInfo] = useState(true);
  const [userAnswers, setUserAnswers] = useState({});
  const [questionFlowIndex, setQuestionFlowIndex] = useState(0);
  const [currentGroupIndex, setcurrentGroupIndex] = useState(
    questionFlow[questionFlowIndex].currentGroupIndex
  );

  const handleSubmitPersonalInfo = newPersonalInfo => {
    setPersonalInfo(newPersonalInfo);
    setIsPersonalInfo(false);
  };

  const getContentfulQuestion = questionId => {
    return data.questionnaire.nodes.find(
      question => question.contentfulid === questionId
    );
  };

  const getContentfulCategory = categoryId => {
    return data.categories.nodes.find(
      category => category.categoryId === categoryId
    );
  };

  const handleChange = questionId => e => {
    const { value } = e.target;
    const { correctAnswers } = getContentfulQuestion(questionId);

    setUserAnswers({
      ...userAnswers,
      [questionId]: value
        ? {
            result: correctAnswers.some(
              correctAnswer => correctAnswer === value
            ),
            answers: [value],
          }
        : undefined,
    });
  };

  const handleCheck = questionId => e => {
    const { value } = e.target;
    const { correctAnswers } = getContentfulQuestion(questionId);

    const currentUserAnswers = userAnswers[questionId]
      ? userAnswers[questionId].answers
      : [];

    let newUserAnswers;
    if (currentUserAnswers.find(answer => answer === value)) {
      newUserAnswers = currentUserAnswers.filter(answer => answer !== value);
    } else {
      newUserAnswers = [...currentUserAnswers, value];
    }

    setUserAnswers({
      ...userAnswers,
      [questionId]: {
        result: correctAnswers.some(
          correctAnswer =>
            correctAnswer === newUserAnswers.includes(correctAnswer)
        ),
        answers: newUserAnswers,
      },
    });
  };

  const isQuestionsCorrect = (questionNeedsCorrect, userAnswers) =>
    questionNeedsCorrect.length &&
    questionNeedsCorrect.every(
      questionCorrect =>
        userAnswers[questionCorrect] && userAnswers[questionCorrect].result
    );

  const currentCategory = questionFlow[questionFlowIndex];
  const currentGroup = currentCategory.groups[currentGroupIndex];

  useEffect(() => {
    if (
      currentCategory.questionsCorrect &&
      !isQuestionsCorrect(currentCategory.questionsCorrect, userAnswers)
    ) {
      const newFlowIndex = questionFlowIndex + 1;
      setQuestionFlowIndex(newFlowIndex);
      setcurrentGroupIndex(questionFlow[newFlowIndex].currentGroupIndex);
    }
  }, [questionFlowIndex]);

  const handleNextQuestions = async e => {
    e.preventDefault();
    const questionsCorrect = currentGroup.questionsCorrect;
    if (
      isQuestionsCorrect(questionsCorrect, userAnswers) &&
      currentGroupIndex <= currentCategory.groups.length
    ) {
      setcurrentGroupIndex(currentGroupIndex + 1);
    } else if (currentGroup.isEndWhenWrong) {
      const newFlowIndex = questionFlowIndex + 1;
      if (newFlowIndex < questionFlow.length) {
        setQuestionFlowIndex(newFlowIndex);
        setcurrentGroupIndex(questionFlow[newFlowIndex].currentGroupIndex);
      } else {
        try {
          setIsSubmitting(true);
          const { token } = await takeQuiz({
            ...personalInfo,
            userAnswers: Object.keys(userAnswers).map(key => ({
              questionId: key,
              ...userAnswers[key],
            })),
          });
          setIsSubmitting(false);
          localStorage.setItem("token", token);
          localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
          localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
          window.location.href = "/findings";
        } catch (err) {
          setError(err.toString());
          setIsSubmitting(false);
        }
      }
    } else {
      setcurrentGroupIndex(currentGroupIndex - 1);
    }
  };

  const renderPersonalInfo = (
    <PersonalInfo onSubmit={handleSubmitPersonalInfo} />
  );

  const isNextButtonDisabled = !currentGroup.questions.every(
    questionId => !!userAnswers[questionId]
  );

  const videoSrcURL = getContentfulCategory(currentCategory.categoryId).video[0]
    .secure_url;

  const categoryTitle = getContentfulCategory(currentCategory.categoryId).title;

  const renderQuestionnaire = (
    <Form onSubmit={handleNextQuestions}>
      <h3 className="mb-3  font-weight-light suhead-text">{categoryTitle}</h3>
      <p>Watch the video below for an introduction</p>
      <Video videoSrcURL={videoSrcURL} />

      <p className="text-center mb-3">Answers the questions below:</p>
      {currentGroup.questions.map((questionId, key) => {
        const { question, answers } = getContentfulQuestion(questionId);
        console.log(question, answers, questionId);
        if (currentGroup.isMultipleAnswers) {
          return (
            <Form.Group>
              <Form.Label>
                {key + 1}. {question.question}
              </Form.Label>
              {answers.map(answer => (
                <Form.Group controlId={answer} className="mb-0">
                  <Form.Check
                    type="checkbox"
                    value={answer}
                    label={answer}
                    onChange={handleCheck(questionId)}
                  />
                </Form.Group>
              ))}
            </Form.Group>
          );
        }
        return (
          <Form.Group key={questionId} className="mb-4">
            <Form.Label>
              {key + 1}. {question.question}
            </Form.Label>
            <Form.Control
              as="select"
              className="form-control"
              onChange={handleChange(questionId)}
              required
            >
              <option value="">Select one</option>
              {answers.map(answer => (
                <option key={answer}>{answer}</option>
              ))}
            </Form.Control>
          </Form.Group>
        );
      })}

      <div className="mt-5 text-right">
        <Button
          type="submit"
          variant="warning"
          size="lg"
          className="px-5"
          disabled={isNextButtonDisabled || isSubmitting}
        >
          Next
        </Button>
      </div>
    </Form>
  );

  const sidebarImg = data.sidebarImg.childImageSharp.fluid;

  return (
    <QuizLayout>
      <QuizSidebar
        sidebarImg={sidebarImg}
        currentStep={isPersonalInfo ? 1 : currentCategory.step}
      />
      <div className="page-section mt-100">
        <Container>
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-9">
              {error && <Alert variant="danger">{error}</Alert>}
              {isPersonalInfo ? renderPersonalInfo : renderQuestionnaire}
            </div>
          </div>
        </Container>
      </div>
    </QuizLayout>
  );
};

export default Quiz;
