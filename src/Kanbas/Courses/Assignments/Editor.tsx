import './Assignments.css';
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignment = useSelector((state: RootState) =>
    state.assignments.assignments.find((assignment) => assignment.course === cid && assignment._id === id)
  );

  const [assignmentDetails, setAssignmentDetails] = useState({
    title: assignment ? assignment.title : "",
    description: assignment ? assignment.description : "",
    points: assignment ? assignment.points : 100,
    due: assignment ? assignment.due : "",
    available: assignment ? assignment.available : "",
    until: assignment ? assignment.until : ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setAssignmentDetails({ ...assignmentDetails, [id]: value });
  };

  const handleSave = () => {
    if (assignment) {
      dispatch(updateAssignment({ ...assignment, ...assignmentDetails }));
    } else {
      dispatch(addAssignment({ ...assignmentDetails, course: cid }));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Assignment Name</label>
        <input id="title" value={assignmentDetails.title} onChange={handleInputChange} className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea id="description" className="form-control" rows={5} value={assignmentDetails.description} onChange={handleInputChange} />
      </div>

      <div className="row mb-3 text-end">
        <div className="col-md-4">
          <label htmlFor="points" className="form-label">Points</label>
        </div>
        <div className="col-md-4 flex-grow-1">
          <input id="points" value={assignmentDetails.points} onChange={handleInputChange} className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4 text-end">
          <label htmlFor="due" className="form-label">Due</label>
        </div>
        <div className="col-md-4 flex-grow-1">
          <input type="date" id="due" value={assignmentDetails.due} onChange={handleInputChange} className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4 text-end">
          <label htmlFor="available" className="form-label"></label>
        </div>

        <div className="col-md-4">
          <label htmlFor="available" className="form-label">Available from</label>
        </div>

        <div className="col-md-4">
          <input type="date" id="available" value={assignmentDetails.available} onChange={handleInputChange} className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4 text-end">
          <label htmlFor="available" className="form-label"></label>
        </div>

        <div className="col-md-4 flex-grow-1">
          <label htmlFor="until" className="form-label">Until</label>
        </div>

        <div className="col-md-4 ">
          <input type="date" id="until" value={assignmentDetails.until} onChange={handleInputChange} className="form-control" />
        </div>   
      </div>

      <div id="wd-editor-controls" className="text-nowrap">
        <button id="wd-editor-btn" className="btn btn-sm btn-danger me-1 float-end" onClick={handleSave}>
          Save
        </button>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button id="wd-group" className="btn btn-sm btn-secondary float-end wd-margin-right" type="button">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
}
