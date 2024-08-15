import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuestionsForQuiz, createQuestion, updateQuestion, deleteQuestion, findAllQuestions } from './client';

const QuizQuestionsEditorScreen = ({ userRole }) => {
  const { quizId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [newQuestionTitle, setNewQuestionTitle] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  const fetchQuestions = async () => {
    const fetchedQuestions = await findAllQuestions(quizId);
    setQuestions(fetchedQuestions);
  };

  const handleAddQuestion = async () => {
    const newQuestion = await createQuestion(quizId);
    setQuestions([...questions, newQuestion]);
  };

  const handleEditQuestion = async (questionId, updatedData) => {
    const updatedQuestion = await updateQuestion(questionId, updatedData);
    setQuestions(questions.map(q => q._id === questionId ? updatedQuestion : q));
  };

  const handleDeleteQuestion = async (questionId) => {
    await deleteQuestion(questionId);
    setQuestions(questions.filter(q => q._id !== questionId));
  };

  return (
    <div>
      <h1>Edit Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>
            <input
              type="text"
              value={question.title}
              onChange={(e) => handleEditQuestion(question._id, { title: e.target.value })}
            />
            <button onClick={() => handleDeleteQuestion(question._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddQuestion}>+ Add Question</button>
    </div>
  );
};

export default QuizQuestionsEditorScreen;
