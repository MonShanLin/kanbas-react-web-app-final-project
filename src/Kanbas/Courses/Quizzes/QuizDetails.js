import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as client from "./client";
import "./QuizDetailsScreen.css";

export default function QuizDetailsScreen({ userRole }) {  
  const [quiz, setQuiz] = useState(null);  // Set initial state for the quiz
  const navigate = useNavigate();
  const { cid, quizId } = useParams();  // Extract cid and quizId from URL params

  const fetchQuiz = async () => {
    if (!quizId) return;  // Ensure quizId exists before making API call
    try {
      const fetchedQuiz = await client.findQuizById(cid, quizId);  // Fetch quiz by cid and quizId
      setQuiz(fetchedQuiz);  // Update quiz state with fetched quiz data
    } catch (error) {
      console.error("Error fetching quiz:", error);  // Handle errors
    }
  };

  useEffect(() => {
    fetchQuiz();  // Fetch quiz data when component mounts or quizId changes
  }, [quizId]);

  const handleEdit = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Edit`);  // Navigate to Edit screen
  };

  const handlePreview = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Preview`);  // Navigate to Preview screen
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

          {userRole === 'Faculty' && (
            <div className="button-group">
              <button className="edit-button" onClick={handleEdit}>Edit</button>
              <button className="preview-button" onClick={handlePreview}>Preview</button>
            </div>
          )}

          {userRole === 'Student' && (
            <button className="start-quiz-button" onClick={() => navigate(`/courses/${cid}/quizzes/${quizId}/start`)}>Start Quiz</button>
          )}
        </div>
      )}
    </div>
  );
} 