// /Users/phoebelin/2024/summer/webdev/kanbas-react-web-app/src/Kanbas/Courses/Quizzes/QuizzesList.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  findAllQuizzes,
  createQuiz,
  deleteQuiz,
  updateQuiz,
} from './client';
import { FaPlus } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const QuizListScreen = ({ userRole }) => {
  const { courseId } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (courseId) {
      fetchQuizzes();
    } else {
      console.error("courseId is undefined");
    }
  }, [courseId]);

  const fetchQuizzes = async () => {
    try {
      const fetchedQuizzes = await findAllQuizzes(courseId);
      setQuizzes(fetchedQuizzes);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  };

  const handleAddQuiz = async () => {
    try {
      const newQuiz = await createQuiz(courseId, {
        title: 'New Quiz 123',
        description: 'Test',
        type: 'Graded Quiz',
        points: 100,
        assignmentGroup: 'Quizzes',
        shuffleAnswers: true,
        timeLimit: 20,
        multipleAttempts: false,
        attemptsAllowed: 1,
        showCorrectAnswers: true,
        accessCode: '',
        oneQuestionAtATime: true,
        webcamRequired: false,
        lockQuestions: false,
        dueDate: new Date('2024-12-31'),
        availableDate: new Date('2024-12-01'),
        untilDate: new Date('2025-01-01'),
        published: false,
        course: courseId,
        questions: [],
      });

      if (newQuiz && newQuiz._id) {
        navigate(`/courses/${courseId}/quizzes/${newQuiz._id}/edit`);
      } else {
        console.error("Error: New quiz creation failed.");
      }
    } catch (error) {
      console.error("Error creating new quiz:", error);
    }
  };

  const handleEditQuiz = (quizId) => {
    navigate(`/courses/${courseId}/quizzes/${quizId}/edit`);
  };

  const handleDeleteQuiz = async (quizId) => {
    try {
      await deleteQuiz(quizId);
      fetchQuizzes();
    } catch (error) {
      console.error("Error deleting quiz:", error);
    }
  };

  const handlePublishQuiz = async (quizId, published) => {
    try {
      const updatedQuiz = await updateQuiz(quizId, { published: !published });
      setQuizzes(quizzes.map(q => q._id === quizId ? updatedQuiz : q));
    } catch (error) {
      console.error("Error updating quiz publish status:", error);
    }
  };

  const handleQuizClick = (quizId) => {
    navigate(`/courses/${courseId}/quizzes/${quizId}`);
  };

  const calculateAvailability = (quiz) => {
    const now = new Date();
    if (quiz.availableDate && now < new Date(quiz.availableDate)) {
      return `Not available until ${new Date(quiz.availableDate).toLocaleDateString()}`;
    } else if (quiz.untilDate && now > new Date(quiz.untilDate)) {
      return 'Closed';
    } else {
      return 'Available';
    }
  };

  return (
    <div>
      <div className="quiz-list-header">
        <button className="add-quiz-btn" onClick={handleAddQuiz}>
          <FaPlus /> Quiz
        </button>
      </div>
      {quizzes.length === 0 ? (
        <p>No quizzes available. Click the "+ Quiz" button to create a new quiz.</p>
      ) : (
        <ul className="quiz-list">
          {quizzes.map(quiz => (
            <li key={quiz._id} className="quiz-item">
              <div onClick={() => handleQuizClick(quiz._id)} className="quiz-title">
                {quiz.title}
              </div>
              <div className="quiz-details">
                <p>Availability: {calculateAvailability(quiz)}</p>
                <p>Due Date: {quiz.dueDate ? new Date(quiz.dueDate).toLocaleDateString() : 'N/A'}</p>
                <p>Points: {quiz.points}</p>
                <p>Number of Questions: {quiz.questions.length}</p>
              </div>
              <div className="quiz-status">
                {quiz.published ? <FaCheckCircle /> : <FaTimes />}
              </div>
              <div className="quiz-actions">
                <button onClick={() => handleEditQuiz(quiz._id)}>Edit</button>
                <button onClick={() => handleDeleteQuiz(quiz._id)}>Delete</button>
                <button onClick={() => handlePublishQuiz(quiz._id, quiz.published)}>
                  {quiz.published ? 'Unpublish' : 'Publish'}
                </button>
                <FaEllipsisV />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuizListScreen;
