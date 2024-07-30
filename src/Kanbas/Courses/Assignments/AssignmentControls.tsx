import React from "react";
import { FaPlus } from "react-icons/fa6";

interface AssignmentControlsProps {
  assignmentTitle: string;
  setAssignmentTitle: (title: string) => void;
  addAssignment: () => void;
}

const AssignmentControls: React.FC<AssignmentControlsProps> = ({ assignmentTitle, setAssignmentTitle, addAssignment }) => {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end"
        data-bs-toggle="modal" data-bs-target="#wd-add-assignment-dialog">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <div className="modal fade" id="wd-add-assignment-dialog" tabIndex={-1} aria-labelledby="wd-add-assignment-dialog-label" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="wd-add-assignment-dialog-label">Add Assignment</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Assignment Title"
                value={assignmentTitle}
                onChange={(e) => setAssignmentTitle(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={addAssignment} data-bs-dismiss="modal">Add Assignment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentControls;


