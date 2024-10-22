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
import { IoIosSend } from "react-icons/io";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-body-light px-5">
          <div className="container-fluid">
            <a className="navbar-brand fs-2 text-info" href="#">
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
                <li className="nav-item pe-5">
                  <a
                    className=" nav-link active text-dark text-danger-hover fs-4"
                    aria-current="page"
                    href="#"
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item pe-5">
                  <a className="nav-link link-danger fs-4" href="#">
                    <span className="me-1">
                      <TbSettingsCog />
                    </span>
                    Projects
                  </a>
                </li>
                <li className="nav-item pe-5">
                  <a className="nav-link text-dark fs-4" href="#">
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className=" w-100 px-3 vh-100 d-flex flex-sm-column-reverse align-items-lg-center flex-lg-row  bg-body-tertiary  border-top border-3 ">
          <div className=" w-50  d-flex justify-content-center align-items-center ">
            <div className="ms-5">
              <h2 className="fs-1 fw-bold" style={{ color: "rgb(36, 8, 102)" }}>
                Hi👋, I'm a<br /> Software Developer
              </h2>
              <p className="pt-3 pb-3 pe-5 fs-5">
                I'm <span className="fw-bold">Mohamed</span>, a developer
                dedicated to making the world a better place one line of code at
                a time.
              </p>
              <button className="btn btn-danger fs-4 shadow">Hire me</button>
            </div>
          </div>
          <div className="w-50 pe-5 d-flex justify-content-lg-end ">
            <img
              src={profilePic}
              className="img-fluid  border border-3 ms-5 "
              style={{ width: "50%" }}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-body-tertiary ">
        <h1 className=" h2 py-5 text-center text-danger">Skills</h1>
        <div className=" w-100 pt-sm-5 d-flex flex-sm-column-reverse  flex-lg-row vh-100   ">
          <div className="w-50 ">
            <div className="ms-5 " style={{ marginTop: "100px" }}>
              <p className="py-3 fs-5 ">
                I have a vast experience in the following web technologies.
              </p>
              <div className="w-75 d-flex ">
                <div className="w-25 px-3 me-3">
                  <div className="border border-3 rounded-5">
                    <img src={html5} className="img-fluid object-fit-fill" />
                  </div>
                  <p className="mt-2 text-center fw-bold">HTML5</p>
                </div>
                <div className="w-25 px-3 me-3">
                  <div className="border border-3 rounded-5">
                    <img src={css3} className="img-fluid object-fit-fill" />
                  </div>
                  <p className="mt-2 text-center fw-bold">CSS3</p>
                </div>
                <div className="w-25 px-3 me-3">
                  <div className="border border-3 rounded-5">
                    <img src={js} className="img-fluid object-fit-fill" />
                  </div>
                  <p className="mt-2 text-center fw-bold">JavaScript</p>
                </div>
                <div className="w-25 px-3 me-3">
                  <div className="border border-3 rounded-5">
                    <img
                      src={bootstrap5}
                      className="img-fluid object-fit-fill "
                    />
                  </div>
                  <p className="mt-2 text-center fw-bold">Bootstrap</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-50 ">
            <img src={courseimg} className="img-fluid" />
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
        <div className=" w-80 d-flex justify-content-center  py-5">
          <div className="card w-25 p-0 border border-4 border-primary-subtle rounded-0">
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
          {/* <div className="card col p-0 border border-4 border-primary-subtle rounded-0">
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
          </div> */}
        </div>
      </div>
      <div className="container-fluid bg-body-tertiary">
        <h1 className=" h2 py-5 text-center text-danger">Contact me</h1>
        <div className=" w-100  d-flex ">
          <div className="w-50 me-3 p-5 ">
            <img src={contact} className="img-fluid " />
          </div>
          <div className="w-50 p-5">
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
                Send Message
                <span className="ms-3 text-info">
                  <IoIosSend />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-body-tertiary px-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 319"
          className="d-block"
        >
          <path
            fill="rgb(36, 8, 102)"
            fill-opacity="1"
            d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,218.7C840,235,960,213,1080,181.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="container-fluid footer">
        <div
          className=" w-100 d-flex pt-3"
          style={{
            height: "300px",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          <div className="w-50  ms-5">
            <p className="fs-3 text-light">My social media links</p>
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
          <div className="w-50  ms-5 text-center">
            <p className="fs-3 text-light">More projects I've worked on</p>
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
