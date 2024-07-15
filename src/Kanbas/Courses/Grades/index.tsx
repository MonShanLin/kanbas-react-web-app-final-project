import { LiaFileImportSolid } from "react-icons/lia";
import { FaFileImport } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";

export default function Grades() {
  return (
    <div id="wd-grades-controls-container" className="container mt-4">
      <div className="row mb-3">
        <div className="col text-end">
          <button id="wd-add-grades-btn" className="btn btn-lg btn-secondary me-1 float-end ">
            <IoIosSettings className="position-relative me-2" style={{ bottom: "1px", fontSize: "1.5em" }} />
          </button>
          <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 dropdown-toggle float-end ">
            <LiaFileImportSolid className="position-relative me-2" style={{ bottom: "1px" }} />
            Export
          </button>
          <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end ">
            <FaFileImport className="position-relative me-2" style={{ bottom: "1px" }} />
            Import
          </button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label className="form-label"><b>Student Names</b></label>
        </div>
        <div className="col">
          <label className="form-label"><b>Assignment Names</b></label>
        </div>
      </div>


      <div className="row mb-3">
        <div className="col">
          <div className="input-group">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              id="wd-search-student"
              className="form-control search-input"
              placeholder="Search Students..."
              />

          </div>
        </div>
        </div>
        <div className="col">
          <div className="input-group">
          <div className="search-container">
          <FaSearch className="search-icon" />
            <input
              id="wd-search-assignments"
              className="form-control search-input"
              placeholder="Search Assignments..."
            />
          </div>
        </div>
      </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <button id="wd-add-filters-btn" className="btn btn-lg btn-secondary me-1">
            <CiFilter className="position-relative me-2" style={{ bottom: "1px", fontSize: "1.5em" }} />
            Apply Filters
          </button>
        </div>
      </div>

      <div id="wd-css-responsive-tables" className="table-responsive">
        <table className="table table-striped border-grey table-bordered">
      <thead>
        <tr><th>Student Name</th><th>A1 SETUP <br /> Out of 100</th><th>A2 HTML <br /> Out of 100</th><th>A3 CSS <br /> Out of 100</th><th>A4 BOOTSTRAP <br /> Out of 100</th>
        </tr>
      </thead>
      <tbody>
        <tr>
           <td>Jane Adams</td><td>100%</td><td>92.67%</td><td>92.18%</td><td>66.22</td>
        </tr>

        <tr>
        <td>Christina Allen</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
        </tr>

        <tr>
        <td>Samreen Ansari</td><td>100%</td><td>92.67%</td><td>92.18%</td><td>66.22</td>
        </tr>
 
        <tr>
        <td>Han Bao</td><td>100%</td><td>100%</td><td><div className="d-flex align-items-center">
                    <input type="text" className="form-control me-2" defaultValue="88.03%" />
                    <FaFileImport style={{ fontSize: "1.2em" }} />
                  </div></td><td>98.99%</td>
        </tr>
 
        <tr>
        <td>Mahi Sai Srinivas Bobbili</td><td>100%</td><td>96.67%</td><td>98.37%</td><td>100%</td>
        </tr>

        <tr>
        <td>Siran Cao</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
        </tr>
      </tbody>

    </table>
  </div>
</div>

  );
}