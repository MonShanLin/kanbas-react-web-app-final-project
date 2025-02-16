import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import * as client from "./client";
import "./QuizDetailsScreen.css";

export default function QuizDetailsScreen({ userRole }) {  
  const [quiz, setQuiz] = useState(null);
  const navigate = useNavigate();
  const { cid, quizId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (quizId === '0' && location.state?.quiz) {
      setQuiz(location.state.quiz);
    } else {
      fetchQuiz();
    }
  }, [quizId]);

  const fetchQuiz = async () => {
    if (!quizId) return;
    try {
      const fetchedQuiz = await client.findQuizById(cid, quizId);
      setQuiz(fetchedQuiz);
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Edit`, { state: { quiz } });
  };

  const handlePreview = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Preview`, { state: { quiz } });
  };

  return (
    <div className="quiz-details-container">
      {quiz && (
        <div className="quiz-details-content">
          <div className="button-group">
            {userRole === 'FACULTY' && (
              <>
                <button className="btn light-grey-button" onClick={handlePreview}>Preview</button>
                <button className="btn light-grey-button" onClick={handleEdit}>Edit</button>
              </>
            )}
            {userRole === 'STUDENT' && (
              <button className="btn light-grey-button" onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/StartQuiz`)}>Start Quiz</button>
            )}
          </div>
          
          <h1>{quiz.title}</h1>
          <div className="quiz-info">
            <p><b>Quiz Type:</b> {quiz.type}</p>
            <p><b>Points:</b> {quiz.points}</p>
            <p><b>Assignment Group:</b> {quiz.assignmentGroup}</p>
            <p><b>Shuffle Answers:</b> {quiz.shuffleAnswers ? 'Yes' : 'No'}</p>
            <p><b>Time Limit:</b> {quiz.timeLimit} minutes</p>
            <p><b>Multiple Attempts:</b> {quiz.multipleAttempts ? 'Yes' : 'No'}</p>
            {quiz.multipleAttempts && <p><b>How Many Attempts:</b> {quiz.attemptsAllowed}</p>}
            <p><b>Show Correct Answers:</b> {quiz.showCorrectAnswers ? 'Yes' : 'No'}</p>
            <p><b>Access Code:</b> {quiz.accessCode || 'None'}</p>
            <p><b>One Question at a Time:</b> {quiz.oneQuestionAtATime ? 'Yes' : 'No'}</p>
            <p><b>Webcam Required:</b> {quiz.webcamRequired ? 'Yes' : 'No'}</p>
            <p><b>Lock Questions After Answering:</b> {quiz.lockQuestions ? 'Yes' : 'No'}</p>
            <p><b>Due Date:</b> {quiz.dueDate ? new Date(quiz.dueDate).toLocaleDateString() : 'None'}</p>
            <p><b>Available Date:</b> {quiz.availableDate ? new Date(quiz.availableDate).toLocaleDateString() : 'None'}</p>
            <p><b>Until Date:</b> {quiz.untilDate ? new Date(quiz.untilDate).toLocaleDateString() : 'None'}</p>
            <p><b>Published:</b> {quiz.published ? 'Yes' : 'No'}</p>
          </div>
        </div>
      )}
    </div>
  );
}
