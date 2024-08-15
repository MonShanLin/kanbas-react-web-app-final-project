import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { findQuizById, updateQuiz } from './client';
import * as client from "./client";
    
    const QuizEditorScreen = ({ userRole }) => {
      const { quizId, courseId } = useParams();

      console.log('courseId:', courseId, 'quizId:', quizId);

      const [quiz, setQuiz] = useState(null);
      const [activeTab, setActiveTab] = useState('details');
      const navigate = useNavigate();
    
      const fetchQuiz = async () => {
        if (!quizId) return;
        const fetchedQuiz = await client.findQuizById(quizId);
        setQuiz(fetchedQuiz);
      };
    
      useEffect(() => {
        if (quizId && courseId ) fetchQuiz();
      }, [quizId, courseId]);
      if (!quizId, !courseId ) return null;
 

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQuiz({ ...quiz, [name]: value });
      };
    
      const handleSave = async (publish = false) => {
        const updatedQuiz = { ...quiz, published: publish };
        await updateQuiz(quizId, updatedQuiz);
        if (publish) {
          navigate(`/courses/${courseId}/quizzes`);
        } else {
          navigate(`/courses/${courseId}/quizzes/${quizId}`);
        }
      };
    
      const handleCancel = () => {
        navigate(`/courses/${courseId}/quizzes`);
      };
    
      if (!quiz) return <div>Loading...</div>;
    
      return (
        <div>
          <h1>Edit Quiz: {quiz.title}</h1>
    
          {/* Tab Navigation */}
          <div>
            <button onClick={() => setActiveTab('details')}>Details</button>
            <button onClick={() => setActiveTab('questions')}>Questions</button>
          </div>
    
          {/* Tab Content */}
          {activeTab === 'details' && (
            <div>
              <div>
                <label>Title</label>
                <input type="text" name="title" value={quiz.title} onChange={handleInputChange} />
              </div>
    
              <div>
                <label>Description</label>
                <textarea name="description" value={quiz.description} onChange={handleInputChange}></textarea>
              </div>
    
              <div>
                <label>Quiz Type</label>
                <select name="type" value={quiz.type} onChange={handleInputChange}>
                  <option value="Graded Quiz">Graded Quiz</option>
                  <option value="Practice Quiz">Practice Quiz</option>
                  <option value="Graded Survey">Graded Survey</option>
                  <option value="Ungraded Survey">Ungraded Survey</option>
                </select>
              </div>
    
              <div>
                <label>Assignment Group</label>
                <select name="assignmentGroup" value={quiz.assignmentGroup} onChange={handleInputChange}>
                  <option value="Quizzes">Quizzes</option>
                  <option value="Exams">Exams</option>
                  <option value="Assignments">Assignments</option>
                  <option value="Project">Project</option>
                </select>
              </div>
    
              <div>
                <label>Shuffle Answers</label>
                <select name="shuffleAnswers" value={quiz.shuffleAnswers} onChange={handleInputChange}>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
    
              <div>
                <label>Time Limit</label>
                <input type="number" name="timeLimit" value={quiz.timeLimit} onChange={handleInputChange} />
              </div>
    
              <div>
                <label>Multiple Attempts</label>
                <select name="multipleAttempts" value={quiz.multipleAttempts} onChange={handleInputChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
    
              <div>
                <label>Show Correct Answers</label>
                <input type="checkbox" name="showCorrectAnswers" checked={quiz.showCorrectAnswers} onChange={(e) => handleInputChange({ target: { name: 'showCorrectAnswers', value: e.target.checked } })} />
              </div>
    
              <div>
                <label>Access Code</label>
                <input type="text" name="accessCode" value={quiz.accessCode} onChange={handleInputChange} />
              </div>
    
              <div>
                <label>One Question at a Time</label>
                <select name="oneQuestionAtATime" value={quiz.oneQuestionAtATime} onChange={handleInputChange}>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
    
              <div>
                <label>Webcam Required</label>
                <select name="webcamRequired" value={quiz.webcamRequired} onChange={handleInputChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
    
              <div>
                <label>Lock Questions After Answering</label>
                <select name="lockQuestions" value={quiz.lockQuestions} onChange={handleInputChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
    
              <div>
                <label>Due Date</label>
                <input type="date" name="dueDate" value={quiz.dueDate.slice(0, 10)} onChange={handleInputChange} />
              </div>
    
              <div>
                <label>Available Date</label>
                <input type="date" name="availableDate" value={quiz.availableDate.slice(0, 10)} onChange={handleInputChange} />
              </div>
    
              <div>
                <label>Until Date</label>
                <input type="date" name="untilDate" value={quiz.untilDate.slice(0, 10)} onChange={handleInputChange} />
              </div>
    
              <div>
                <button onClick={() => handleSave(false)}>Save</button>
                <button onClick={() => handleSave(true)}>Save and Publish</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          )}
    
          {activeTab === 'questions' && (
            <div>
              {/* Questions tab content would go here */}
            </div>
          )}
        </div>
      );
    };
    
    export default QuizEditorScreen;    