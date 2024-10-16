import profilePic from "./assets/profile-pic.webp";
import { TbSettingsCog } from "react-icons/tb";
import html5 from "./assets/html5.webp";
import css3 from "./assets/css3.webp";
import js from "./assets/js.webp";
import bootstrap5 from "./assets/bootstrap.webp";
import courseimg from "./assets/course.webp";
import contact from "./assets/contact.png";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import project1 from "./assets/project1.webp";
import { FaArrowRight } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
          <div className="container-fluid">
            <a className="navbar-brand fs-2 " href="#">
              Mohamed Said
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav w-100 fs-3 me-auto mb-2 mb-lg-0 d-flex justify-content-end">
                <li className="nav-item">
                  <a
                    className="nav-link active text-dark menu"
                    aria-current="page"
                    id="menu1"
                    href="#"
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    <span className="me-1">
                      <TbSettingsCog />
                    </span>
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className=" w-100 pt-sm-5 d-flex flex-sm-column-reverse align-items-center flex-lg-row vh-100 bg-body-tertiary  border-top border-3 ">
          <div className="w-50 pt-5 d-flex justify-content-center align-items-center ">
            <div className="ms-5">
              <h2 className="fs-1 fw-bold">
                Hi👋, I'm a<br /> Software Developer
              </h2>
              <p className="pt-3 pb-3 ">
                I'm <span className="fw-bold">Mohamed</span>, a developer
                dedicated to making the world a better place one line of code at
                a time.
              </p>
              <button className="btn btn-danger shadow">Hire me</button>
            </div>
          </div>
          <div className="w-50 d-flex justify-content-center align-items-center">
            <div>
              <img src={profilePic} className="border border-3 w-60" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-body-tertiary ">
        <h1 className=" h2 py-5 text-center text-danger">Skills</h1>
        <div className=" w-100 pt-sm-5 d-flex flex-sm-column-reverse align-items-center flex-lg-row vh-100   ">
          <div className="w-50 pt-5  d-flex justify-content-center align-items-center ml-5">
            <div className="ms-5 ">
              <p className="py-3 ">
                I have a vast experience in the following web technologies.
              </p>
              <div className="row w-100 column-gap-2 ms-2">
                <div className="col-2 ">
                  <div className="polygon">
                    <img src={html5} className="img-fluid object-fit-fill" />
                  </div>

                  <p className="mt-2">HTML5</p>
                </div>
                <div className="col-2  ">
                  <div className="polygon">
                    <img src={css3} className="img-fluid object-fit-fill" />
                  </div>
                  <p className="mt-2">CSS3</p>
                </div>
                <div className="col-2  ">
                  <div className="polygon">
                    <img src={js} className="img-fluid object-fit-fill" />
                  </div>
                  <p className="mt-2">JavaScript</p>
                </div>
                <div className="col-2">
                  <div className="polygon">
                    <img
                      src={bootstrap5}
                      className="img-fluid object-fit-fill "
                    />
                  </div>
                  <p className="mt-2">Bootstrap</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-30 d-flex justify-content-center align-items-center">
            <div>
              <img src={courseimg} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer w-100 ">
        <h1 className="fs-3 text-light text-center pt-5 pt-1 ">
          <span className="me-2">
            <TbSettingsCog />
          </span>
          Projects
        </h1>
        <p className="text-center fs-5 text-light">
          A select number of projects
        </p>
        <div className=" w-80 row gap-5 ms-5 me-5 py-5 ">
          <div className="card col p-0 border border-4 border-primary-subtle rounded-0">
            <img src={project1} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Cross fitness club site</h5>
              <p className="card-text">
                This is single page application for a cross fitness club site. I
                developed it using Reactjs , typescript and chakraUI
              </p>
              <button
                type="button"
                className="btn btn-success fs-4  formButton"
                style={{ width: "60%" }}
              >
                Learn more
                <span className="ms-3">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="card col p-0 border border-4 border-primary-subtle rounded-0">
            <img src={project1} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Cross fitness club site</h5>
              <p className="card-text">
                This is single page application for a cross fitness club site. I
                developed it using Reactjs , typescript and chakraUI
              </p>
              <button
                type="button"
                className="btn btn-success fs-4  formButton"
                style={{ width: "60%" }}
              >
                Learn more
                <span className="ms-3">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="card col p-0 border border-4 border-primary-subtle rounded-0">
            <img src={project1} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Cross fitness club site</h5>
              <p className="card-text">
                This is single page application for a cross fitness club site. I
                developed it using Reactjs , typescript and chakraUI
              </p>
              <button
                type="button"
                className="btn btn-success fs-4  formButton"
                style={{ width: "60%" }}
              >
                Learn more
                <span className="ms-3">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-body-tertiary ">
        <h1 className=" h2 py-5 text-center text-danger">Contact me</h1>
        <div className=" w-100 pt-sm-5 d-flex flex-sm-column-reverse align-items-center flex-lg-row vh-100   ">
          <div className="w-50 pt-5  d-flex justify-content-center align-items-center ml-5">
            <div className="d-flex flex-column align-items-center p-5">
              <img src={contact} className="img-fluid " />
            </div>
          </div>
          <div className="w-50 p-5">
            <div>
              <div className="mb-5">
                <input
                  type="email"
                  className="form-control py-2 py-3 fs-3"
                  placeholder="Enter email address"
                />
              </div>
              <div className="mb-5">
                <textarea
                  className="form-control fs-3"
                  placeholder="Enter message "
                  rows={10}
                ></textarea>
              </div>
              <div className="mb-3 text-center">
                <button
                  type="button"
                  className="btn btn-success fs-3  formButton"
                  style={{ width: "40%" }}
                >
                  Learn more
                  <span className="ms-3">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid   footer ">
        <div className=" w-100 pt-sm-5 d-flex flex-sm-column-reverse align-items-center flex-lg-row   ">
          <div className="w-50 p-5 ms-5">
            <p className="fs-5 text-light">My social media links</p>
            <a href="#" className="me-5">
              <FaLinkedin className="text-light fs-1 " />
            </a>
            <a href="#" className="me-5">
              <FaWhatsappSquare className="text-light fs-1" />
            </a>
            <a href="#" className="me-5">
              <FaTwitter className="text-light fs-1" />
            </a>
            <a href="#" className="me-5">
              <CgMail className="text-light fs-1" />
            </a>
          </div>
          <div className="w-50 p-5 ms-5">
            <p className="fs-5 text-light">More projects I've worked on</p>
            <a href="#">
              <FaGithub className="text-light fs-1 me-3 " />
            </a>
            <span className="text-light fs-5">
              <a href="#" className="text-success text-decoration-none">
                @Mohamed-sudo323
              </a>{" "}
              on github
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
