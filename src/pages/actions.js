import React, { useEffect, useState } from "react";
import QuizLayout from "../components/QuizLayout";
import LessonsSidebar from "../components/LessonsSidebar";
import Lesson from "../components/Lesson";
import Loading from "../components/Loading";
import Auth from "../components/Auth";
import { getUserQuiz } from "../api/quiz";
import { navigate } from "gatsby";

export const query = graphql`
  query {
    categories: allContentfulActionCategories {
      nodes {
        title
        questionIDs
        order
      }
    }
    lessons: allContentfulLessons {
      nodes {
        lessonId
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
  }
`;

const Lessons = ({ data }) => {
  const {
    categories: { nodes: categories },
    lessons: { nodes: lessons },
  } = data;

  const [watchedLessons, setWatchedLessons] = useState(
    JSON.parse(
      typeof window !== "undefined"
        ? localStorage.getItem("watchedLessons")
        : "[]"
    ) || []
  );

  const [userAnswers, setUserAnswers] = useState({});
  const [isLoading, setLoading] = useState(false);
  useEffect(async () => {
    try {
      setLoading(true);
      const { userAnswers } = await getUserQuiz();
      let newUserAnswers = {};
      userAnswers.forEach(answer => {
        newUserAnswers[answer.questionId] = {
          answers: answer.answers,
          result: answer.result,
        };
      });
      setUserAnswers(newUserAnswers);
      setLoading(false);
    } catch (err) {
      window.location.href = "/not-found";
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!watchedLessons.length) {
      const newWatchedLessons = [firstLesson.lessonId];
      setWatchedLessons(newWatchedLessons);
      localStorage.setItem("watchedLessons", JSON.stringify(newWatchedLessons));
    }
  }, []);

  const firstLesson =
    lessons.find(
      lesson => lesson.lessonId === watchedLessons[watchedLessons.length - 1]
    ) || lessons.find(lesson => lesson.lessonId === "F1");

  const [currentLesson, setCurrentLesson] = useState(firstLesson);

  const lessonCategories = categories
    .sort((a, b) => a.order - b.order)
    .map(category => ({
      title: category.title,
      order: category.order,
      lessons: category.questionIDs.map(
        questionId =>
          lessons.find(lesson => lesson.lessonId === questionId) || {}
      ),
    }));
  const sortedLessons = lessonCategories
    .map(item => item.lessons)
    .reduce((prev, next) => prev.concat(next));

  const handleClickLesson = lesson => {
    setCurrentLesson(lesson);
  };

  const handleWatchVideo = () => {
    const index = sortedLessons.findIndex(
      lesson => currentLesson.lessonId === lesson.lessonId
    );
    const nextLesson = sortedLessons[index + 1];

    if (nextLesson) {
      setCurrentLesson(nextLesson);
      const newWatchedLessons = [...watchedLessons, nextLesson.lessonId];
      setWatchedLessons(newWatchedLessons);
      localStorage.setItem("watchedLessons", JSON.stringify(newWatchedLessons));
    }
  };

  const renderActions = isLoading ? (
    <Loading />
  ) : (
    <QuizLayout>
      <LessonsSidebar
        lessonCategories={lessonCategories}
        watchedLessons={watchedLessons}
        userAnswers={userAnswers}
        onClickLesson={handleClickLesson}
      />
      <Lesson
        data={currentLesson}
        userAnswers={userAnswers}
        onClickNext={handleWatchVideo}
      />
    </QuizLayout>
  );

  return <Auth>{renderActions}</Auth>;
};

export default Lessons;
