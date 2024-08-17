import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';  // useLocation added to access state passed from QuizListScreen
import * as client from "./client";
import "./QuizDetailsScreen.css";

export default function QuizDetailsScreen({ userRole }) {  
  const [quiz, setQuiz] = useState(null);  // Set initial state for the quiz
  const navigate = useNavigate();
  const { cid, quizId } = useParams();  // Extract cid and quizId from URL params
  const location = useLocation();  // Access location to get passed state

  useEffect(() => {
    if (quizId === '0' && location.state?.quiz) {
      // Handle new quiz creation case
      setQuiz(location.state.quiz);  // Set default quiz data passed from QuizListScreen
    } else {
      fetchQuiz();  // Fetch existing quiz data if quizId is not '0'
    }
  }, [quizId]);

  const fetchQuiz = async () => {
    if (!quizId) return;
    try {
      const fetchedQuiz = await client.findQuizById(cid, quizId);  // Fetch quiz by cid and quizId
      setQuiz(fetchedQuiz);  // Update quiz state with fetched quiz data
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Edit`, { state: { quiz } });  // Navigate to Edit screen with quiz data
  };

  const handlePreview = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Preview`, { state: { quiz } });  // Navigate to Preview screen with quiz data
  };

  return (
    <div className="quiz-details-container">
      {quiz && (
        <div>
          <h1>{quiz.title}</h1>
          <p><b>Quiz Type:</b> {quiz.type}</p>
          <p><b>Points:</b> {quiz.points}</p>
          <p><b>Assignment Group:</b> {quiz.assignmentGroup}</p>
          <p><b>Shuffle Answers:</b> {quiz.shuffleAnswers ? 'Yes' : 'No'}</p>
          <p><b>Time Limit:</b> {quiz.timeLimit} minutes</p>
          <p><b>Multiple Attempts:</b> {quiz.multipleAttempts ? 'Yes' : 'No'}</p>
          {quiz.multipleAttempts && (
            <p><b>How Many Attempts:</b> {quiz.attemptsAllowed}</p>
          )}
          <p><b>Show Correct Answers:</b> {quiz.showCorrectAnswers ? 'Yes' : 'No'}</p>
          <p><b>Access Code:</b> {quiz.accessCode || 'None'}</p>
          <p><b>One Question at a Time:</b> {quiz.oneQuestionAtATime ? 'Yes' : 'No'}</p>
          <p><b>Webcam Required:</b> {quiz.webcamRequired ? 'Yes' : 'No'}</p>
          <p><b>Lock Questions After Answering:</b> {quiz.lockQuestions ? 'Yes' : 'No'}</p>
          <p><b>Due Date:</b> {quiz.dueDate ? new Date(quiz.dueDate).toLocaleDateString() : 'None'}</p>
          <p><b>Available Date:</b> {quiz.availableDate ? new Date(quiz.availableDate).toLocaleDateString() : 'None'}</p>
          <p><b>Until Date:</b> {quiz.untilDate ? new Date(quiz.untilDate).toLocaleDateString() : 'None'}</p>
          <p><b>Published:</b> {quiz.published ? 'Yes' : 'No'}</p>
          
          {userRole === 'Faculty' && (
            <div className="button-group">
              <button className="edit-button" onClick={handleEdit}>Edit</button>
              <button className="preview-button" onClick={handlePreview}>Preview</button>
            </div>
          )}

          {userRole === 'Student' && (
            <button className="start-quiz-button" onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/StartQuiz`)}>Start Quiz</button>
          )}
        </div>
      )}
    </div>
  );
}
