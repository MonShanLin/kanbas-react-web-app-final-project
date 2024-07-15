import EditorButtons from "./EditorButtons";
import './Assignments.css';
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" value="A1" className="form-control" />
      </div>
      
      <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea id="wd-description" className="form-control" rows={5} defaultValue="The assignment is available online
                 Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page." />
            </div>

      <div className="row mb-3 text-end">
                <div className="col-md-4">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                    </div>
                    <div className="col-md-4 flex-grow-1">
                    <input id="wd-points" value={100} className="form-control" />
                    </div>
                </div>

                <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                </div>
                <div className="col-md-4 flex-grow-1">
                    <select id="wd-group" className="form-select">
                        <option value="ASSIGNMENTS">Assignments</option>
                    </select>
                </div>
            </div>
            
            <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                </div>
                <div className="col-md-4 flex-grow-1">
                    <select id="wd-display-grade-as" className="form-select">
                        <option value="Percentage">Percentage</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                </div>
                <div className="col-md-4 flex-grow-1">
                    <select id="wd-submission-type" className="form-select">
                        <option value="Online">Online</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label htmlFor="wd-submission-type" className="form-label"> </label>
                </div>
                <div className="col-md-4 flex-grow-1">
                <label className="form-label"><b>Online Entry Options</b></label>
                </div>
            </div>


            <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label className="form-label"> </label>
                </div>
                <div className="col-md-4 wd-margin-bottom">
                    <div className="form-check wd-margin-bottom">
                        <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                    </div>
                    <div className="form-check wd-margin-bottom">
                        <input type="checkbox" className="form-check-input" id="wd-website-url" checked />
                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                    </div>
                    <div className="form-check wd-margin-bottom">
                        <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                    </div>
                    <div className="form-check wd-margin-bottom">
                        <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                    </div>
                    <div className="form-check wd-margin-bottom">
                        <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                        <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
                    </div>
                </div>
            </div>
            
            
            <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label htmlFor="wd-display-grade-as" className="form-label">Assign</label>
                </div>
                <div className="col-md-4 flex-grow-1">
                <label className="form-label"><b>Assign to</b></label>
                </div>
            </div> 

            <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label className="form-label"> </label>
                </div>

                <div className="col-md-4 flex-grow-1">
                    <input id="wd-assign" value="Everyone" className="form-control" />
                </div>
            </div>
            
            <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label className="form-label"> </label>
                </div>
            
                <div className="col-md-4 flex-grow-1">
                  <label className="form-label"><b>Due</b></label>
                </div>
            </div> 

            <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label className="form-label"> </label>
                </div>

                <div className="col-md-4 flex-grow-1">
                <input type="date" id="wd-due-date" value="2024-05-13" className="form-control" />
                </div>
            </div> 

            <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label className="form-label"> </label>
                </div>

                <div className="col-md-4 ">
                  <label className="form-label"><b>Available from</b></label>
                </div>

                <div className="col-md-4 ">
                  <label className="form-label"><b>Until</b></label>
                </div>

            </div> 
                    
            <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label className="form-label"> </label>
                </div>

                <div className="col-md-4 flex-grow-1">
                <input type="date" id="wd-due-date" value="2024-05-06" className="form-control" />
                </div>

                <div className="col-md-4">
                    <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
                </div>
            </div> 

            <br></br>
            <div className="mt-3">
                <EditorButtons />
            </div>

            </div>

  );
}

