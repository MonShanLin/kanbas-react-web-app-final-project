import { FaPlus } from "react-icons/fa6";
export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">

        <button id="wd-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button> 

        <button id="wd-group" className="btn btn-lg btn-secondary float-end wd-margin-right"
          type="button">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>


      
      </div>
  );
}

