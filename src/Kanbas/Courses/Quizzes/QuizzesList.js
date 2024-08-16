import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaPlus, FaEllipsisV, FaCheckCircle, FaTimes } from "react-icons/fa";
import { findAllQuizzes, createQuiz, deleteQuiz, updateQuiz } from './client';
import "./QuizListScreen.css"; // Assume this file contains the relevant CSS

export default function QuizListScreen({ userRole }) {
  const { cid } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuizId, setSelectedQuizId] = useState(null); // To track which quiz's context menu is open
  const navigate = useNavigate();

  useEffect(() => {
    if (cid) {
      fetchQuizzes();
    } else {
      console.error("cid is undefined");
    }
  }, [cid]);

  const fetchQuizzes = async () => {
    try {
      const fetchedQuizzes = await findAllQuizzes(cid);
      setQuizzes(fetchedQuizzes);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  };

  const handleAddQuiz = async () => {
    try {
      const newQuiz = await createQuiz(cid, {
        title: 'New Quiz',
        description: 'Test Description',
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
        courseId: cid,
        questions: [],
      });

      if (newQuiz && newQuiz._id) {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${newQuiz._id}/Edit`);
      } else {
        console.error("Error: New quiz creation failed.");
      }
    } catch (error) {
      console.error("Error creating new quiz:", error);
    }
  };

  const handleEditQuiz = (quizId) => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Edit`);
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
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}`);
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

  const toggleContextMenu = (quizId) => {
    setSelectedQuizId(selectedQuizId === quizId ? null : quizId);
  };

  return (
    <div id="wd-quizzes">
      <div className="header-row">
        <button className="add-quiz-btn" onClick={handleAddQuiz}>
          <FaPlus /> Quiz
        </button>
      </div>

      <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div className="me-2 fs-3" />
          ASSIGNMENT QUIZZES
        </div>
      </div>

      <ul className="wd-quiz list-group rounded-0">
        {quizzes.map((quiz) => (
          <li key={quiz._id} className="wd-quiz-item list-group-item p-3 ps-1 d-flex align-items-center green-border-left">
            <div className="flex-grow-1" onClick={() => handleQuizClick(quiz._id)}>
              <div className="quiz-title">
                <b>{quiz.title}</b>
              </div>
              <div className="smaller-text">
                <span className="text-muted">
                  Availability: {calculateAvailability(quiz)} | Due: {new Date(quiz.dueDate).toLocaleDateString()} | {quiz.points} pts | {quiz.questions.length} Questions
                  {userRole === 'student' && quiz.score && <span> | Score: {quiz.score}</span>}
                </span>
              </div>
            </div>

            <div className="quiz-status">
              {quiz.published ? (
                <FaCheckCircle className="icon-published" onClick={() => handlePublishQuiz(quiz._id, quiz.published)} />
              ) : (
                <FaTimes className="icon-unpublished" onClick={() => handlePublishQuiz(quiz._id, quiz.published)} />
              )}
            </div>

            <div className="quiz-actions">
              <FaEllipsisV onClick={() => toggleContextMenu(quiz._id)} />
              {selectedQuizId === quiz._id && (
                <div className="context-menu">
                  <button onClick={() => handleEditQuiz(quiz._id)}>Edit</button>
                  <button onClick={() => handleDeleteQuiz(quiz._id)}>Delete</button>
                  <button onClick={() => handlePublishQuiz(quiz._id, quiz.published)}>
                    {quiz.published ? 'Unpublish' : 'Publish'}
                  </button>
                </div>
              )}
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}