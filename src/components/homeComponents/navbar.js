import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navBg">
        <div className="container-fluid">
          <a className="navbar-brand text-light fw-bolder navLogo" href="/">
            Demo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light fw-bold navTabs"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-light fw-bold navTabs"
                  aria-current="page"
                  href="/newsMapping"
                >
                  Movie News
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link active text-light fw-bold navTabs"
                  aria-current="page"
                  href="/celebInfo"
                >
                  Celebrities
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link active text-light fw-bold navTabs"
                  aria-current="page"
                  href="/reviewArea"
                >
                  Reviews
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link active text-light fw-bold navTabs"
                  aria-current="page"
                  href="/trendsArea"
                >
                  Trends
                </a>
              </li> */}
              
              <li className="nav-item">
                <a
                  className="nav-link active text-light fw-bold navTabs"
                  aria-current="page"
                  href="/collectionMapping"
                >
                  Movie Collections
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-light fw-bold navTabs"
                  aria-current="page"
                  href="/ottInfo"
                >
                 OTT Info
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-light fw-bold navTabs"
                  aria-current="page"
                  href="/MovieSchedule"
                >
                  Movie Schedule
                </a>
              </li>
              <li class="nav-item dropdown dropTab">
                <a
                  class="nav-link dropdown-toggle fw-bolder text-light createTab"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Create
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item fw-bold" href="/reviewForm">
                      Write A Movie Review
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item fw-bold" href="/collectionForm">
                      Add Movie Collections
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item fw-bold " href="/newsForm">
                      Write News Articles
                    </a>
                  </li>
                  <hr class="dropdown-divider" />
                  <li>
                    <a class="dropdown-item fw-bold " href="/ScheduleForm">
                      Schedule A Movie
                    </a>
                  </li>
                  <hr class="dropdown-divider" />
                  <li>
                    <a class="dropdown-item fw-bold " href="/ottForm">
                      Add OTT Info
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ul className="d-flex">
              <li className="icon">
                <a href="#">
                  {" "}
                  <i className="bi bi-facebook faceIcon"> </i>{" "}
                </a>
              </li>
              <li className="icon">
                <a href="#">
                  {" "}
                  <i className="bi bi-twitter tweetrIcon"> </i>{" "}
                </a>
              </li>
              <li className="icon ">
                <a href="#">
                  {" "}
                  <i className="bi bi-youtube youtubeIcon"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
