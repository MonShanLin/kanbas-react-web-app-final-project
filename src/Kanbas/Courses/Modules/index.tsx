export default function Modules() {
    return (
      <div>
        <button>Collapse All</button><button>View Progress</button><button>Publish All</button><button>+ Module</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - CH 1</li>
                  <li className="wd-content-item">Full Stack Developer - CH 2</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Formulate User Interface with HTML</li>
                  <li className="wd-content-item">Learn how to create user interface with HTML</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - CH 3</li>
                  <li className="wd-content-item">Full Stack Developer - CH 4</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  