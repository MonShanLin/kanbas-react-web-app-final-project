export default function Editorbuttons() {
  return (
    <div id="wd-editor-controls" className="text-nowrap">

        <button id="wd-editor-btn" className="btn btn-sm btn-danger me-1 float-end">
          Save
        </button> 

        <button id="wd-group" className="btn btn-sm btn-secondary float-end wd-margin-right"
          type="button">
          Cancel
        </button>

      </div>
  );
}