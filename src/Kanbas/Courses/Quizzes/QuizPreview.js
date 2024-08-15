import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizById, getQuestionsForQuiz } from './client';

const QuizPreviewScreen = ({ userRole }) => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuizAndQuestions();
  }, [quizId]);

  const fetchQuizAndQuestions = async () => {
    const fetchedQuiz = await getQuizById(quizId);
    const fetchedQuestions = await getQuestionsForQuiz(quizId);
    setQuiz(fetchedQuiz);
    setQuestions(fetchedQuestions);
  };

  return (
    <div>
      {quiz && (
        <div>
          <h1>{quiz.title}</h1>
          <p>{quiz.description}</p>
          <ul>
            {questions.map((question) => (
              <li key={question._id}>
                <p>{question.title}</p>
                {/* Render the question based on its type */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizPreviewScreen;
