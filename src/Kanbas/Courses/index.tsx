import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Quizzes from "./Quizzes";
import Grades from "./Grades";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import { Navigate, Route, Routes, useParams, useLocation, useNavigate } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import PeopleDetails from "./People/Details";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  const fetchUsers = async () => {
  };

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="Zoom" element={<Zoom />} />
            <Route path="Piazza" element={<Piazza />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="People/:uid" element={<PeopleTable />} />
            <Route path="People/Details/:uid" element={<PeopleDetailsWrapper fetchUsers={fetchUsers} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}


function PeopleDetailsWrapper({ fetchUsers }: { fetchUsers: () => void }) {
  const { uid, cid } = useParams<{ uid: string; cid: string }>();
  const navigate = useNavigate();


  const onClose = () => {
    navigate(`/Kanbas/Courses/${cid}/People`);
  };

  if (!uid) {
    return <div>Error: No user selected.</div>;
  }

  return (
    <PeopleDetails 
      selectedUserId={uid} 
      fetchUsers={fetchUsers} 
      onClose={onClose}
    />
  );
}