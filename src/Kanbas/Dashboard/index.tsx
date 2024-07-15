export default function Dashboard() {
    return (
<div id="wd-dashboard">
  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
  <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
  <div id="wd-dashboard-courses" className="row">
    <div className="row row-cols-1 row-cols-md-5 g-4">
      <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px"  }}>
        <div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width="100%"/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
              </h5>
               <p className="card-text">
                  Full Stack software developer
                </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </a>
        </div>
      </div>

        
        <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px" }}>
        <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">            
                 <img src="/images/reactjs.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS5001 Intensive Foundations of CS
              </h5>
              <p className="card-text">
              CS foundation
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
            </a>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px" }}>
        <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">            
                 <img src="/images/reactjs.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS5002 Discrete Structures
              </h5>
              <p className="card-text">
              Math
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
            </a>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px" }}>
        <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">            
                 <img src="/images/reactjs.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS5004 Object Oriented Design
              </h5>
              <p className="card-text">
              JAVA
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
            </a>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px" }}>
        <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">            
                 <img src="/images/reactjs.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS5610 Web Development
              </h5>
              <p className="card-text">
              Web
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
            </a>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" , marginBottom: "30px"}}>
        <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">            
                 <img src="/images/reactjs.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS5800 Fundamental of Algorithms 
              </h5>
              <p className="card-text">
              Algorithms
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
            </a>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px" }}>
        <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">            
                 <img src="/images/reactjs.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS6620 Cloud Computing 
              </h5>
              <p className="card-text">
              AMS
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
            </a>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" , marginBottom: "30px"}}>
        <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">            
                 <img src="/images/reactjs.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    CS5008 Data Structure  
              </h5>
              <p className="card-text">
              Data
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
            </a>
          </div>
        </div>

          </div>
        </div>
      </div>
  );
}
  