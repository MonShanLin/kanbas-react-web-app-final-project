// /Users/phoebelin/2024/summer/webdev/kanbas-react-web-app/src/Kanbas/Courses/Quizzes/client.ts

import axios from 'axios';

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const QUIZZES_API = (courseId: string) => `${COURSES_API}/${courseId}/quizzes`;
const QUIZ_API = (quizId: string) => `${QUIZZES_API}/${quizId}`;
const QUESTIONS_API = (quizId: string) => `${QUIZ_API(quizId)}/questions`;
const QUESTION_API = (quizId: string, questionId: string) => `${QUIZ_API(quizId)}/questions/${questionId}`;

// Fetch all quizzes for a course
export const findAllQuizzes = async (courseId: string) => {
    try {
        const { data } = await axios.get(QUIZZES_API(courseId));
        return data;
    } catch (error) {
        console.error("Error fetching quizzes:", error);
        throw error;
    }
};

// Fetch a single quiz by ID
export const findQuizById = async (quizId: string) => {
    try {
        const { data } = await axios.get(QUIZ_API(quizId));
        return data;
    } catch (error) {
        console.error("Error fetching quiz by ID:", error);
        throw error;
    }
};

// Create a new quiz
export const createQuiz = async (courseId: string, quizData: any) => {
    try {
        const { data } = await axios.post(QUIZZES_API(courseId), quizData);
        return data;
    } catch (error) {
        console.error("Error creating quiz:", error);
        throw error;
    }
};

// Update a quiz
export const updateQuiz = async (quizId: string, quizData: any) => {
    try {
        const { data } = await axios.put(QUIZ_API(quizId), quizData);
        return data;
    } catch (error) {
        console.error("Error updating quiz:", error);
        throw error;
    }
};

// Delete a quiz
export const deleteQuiz = async (quizId: string) => {
    try {
        const { data } = await axios.delete(QUIZ_API(quizId));
        return data;
    } catch (error) {
        console.error("Error deleting quiz:", error);
        throw error;
    }
};

// Fetch all questions for a quiz
export const findAllQuestions = async (quizId: string) => {
    try {
        const { data } = await axios.get(QUESTIONS_API(quizId));
        return data;
    } catch (error) {
        console.error("Error fetching questions:", error);
        throw error;
    }
};

// Create a new question for a quiz
export const createQuestion = async (quizId: string, questionData: any) => {
    try {
        const { data } = await axios.post(QUESTIONS_API(quizId), questionData);
        return data;
    } catch (error) {
        console.error("Error creating question:", error);
        throw error;
    }
};

// Update a question
export const updateQuestion = async (quizId: string, questionId: string, questionData: any) => {
    try {
        const { data } = await axios.put(QUESTION_API(quizId, questionId), questionData);
        return data;
    } catch (error) {
        console.error("Error updating question:", error);
        throw error;
    }
};

// Delete a question
export const deleteQuestion = async (quizId: string, questionId: string) => {
    try {
        const { data } = await axios.delete(QUESTION_API(quizId, questionId));
        return data;
    } catch (error) {
        console.error("Error deleting question:", error);
        throw error;
    }
};