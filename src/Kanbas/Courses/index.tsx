import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Quizzes from "./Quizzes";
import Grades from "./Grades";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234</h2>
      <hr />

      <div className="d-flex">
    <div className="d-none d-md-block">

            <CoursesNavigation />
            </div>
    <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Assignments"
                     element={<Assignments/>} />
              <Route path="Assignments/:id"
                     element={<AssignmentEditor/>} />
              <Route path="Grades" element={<Grades />} />     
              <Route path="Zoom" element={<Zoom />} /> 
              <Route path="Piazza" element={<Piazza />} /> 
              <Route path="Quizzes" element={<Quizzes />} />   
            </Routes>
            </div>
  </div>
  </div>

);
}
