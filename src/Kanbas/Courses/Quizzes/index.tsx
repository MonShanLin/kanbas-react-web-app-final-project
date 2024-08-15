// /Users/phoebelin/2024/summer/webdev/kanbas-react-web-app/src/Kanbas/Courses/Quizzes/index.tsx
import QuizListScreen from "./QuizzesList";
import { useSelector } from "react-redux";
import QuizEditorScreen from "./QuizEditor";

export default function Quizzes() {
  const userRole = useSelector((state: any) => state.accountReducer.userRole);

  return (
    <>
      <h1>Quizzes</h1>
      <QuizListScreen userRole={userRole} />
    </>
  );
}