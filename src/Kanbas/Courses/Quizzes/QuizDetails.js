///Users/phoebelin/2024/summer/webdev/kanbas-react-web-app/src/Kanbas/Courses/Quizzes/QuizDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { findQuizById, getQuizById, updateQuiz } from './client';

const QuizDetailsScreen = ({ userRole }) => {
  const { courseId, quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const navigate = useNavigate();

  const fetchQuiz = async () => {
    const fetchedQuiz = await findQuizById(quizId);
    setQuiz(fetchedQuiz);
  };

  useEffect(() => {
    fetchQuiz();
  }, [quizId]);

  const handleEdit = () => {
    navigate(`/courses/${courseId}/quizzes/${quizId}/edit`);
  };

  const handlePreview = () => {
    navigate(`/courses/${courseId}/quizzes/${quizId}/preview`);
  };

  return (
    <div>
      {quiz && (
        <div>
          <h1>{quiz.title}</h1>
          <p>{quiz.description}</p>
          <p>Points: {quiz.points}</p>
          <p>Time Limit: {quiz.timeLimit} minutes</p>
          <p>Due Date: {new Date(quiz.dueDate).toLocaleDateString()}</p>

          {userRole === 'Faculty' && (
            <>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handlePreview}>Preview</button>
            </>
          )}

          {userRole === 'Student' && (
            <button onClick={() => navigate(`/courses/${courseId}/quizzes/${quizId}/start`)}>Start Quiz</button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizDetailsScreen;
