import "../App.css";
import { useState } from "react";
function Navbar() {
  const [toggle, settoggle] = useState(false);
  const [small, setsmall] = useState("");
  return (
    <div className="navbar" id="nav-menu">
      <div className="logo">
        <img
          src="https://pngpress.com/wp-content/uploads/2020/09/uploads_letter_g_letter_g_PNG59.png"
          width="50px"
          height="50px"
          alt=""
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div
        className="menu_toggle"
        onClick={() => {
          settoggle(!toggle);
          setsmall("small");
        }}
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/flat-and-simple-part-2/128/menu-512.png"
          width="50px"
          height="50px"
          alt=""
        />
      </div>
      <div
        className={
          toggle && small === "small" ? "small_nav right--nav" : "right--nav"
        }
      >
        <div
          className="active"
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#top" className="nav-link home">Home</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#about" className="nav-link about">About</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#tech" className="nav-link skills">Skills</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#projects" className="nav-link projects">Project</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#contact" className="nav-link contact">Contact Me</a>
        </div>
        <div className="cv">
          <a
            href="https://drive.google.com/file/d/1eqa_H_1lpNAyD8WjEhq8qy8NxcnGklWT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000" }}
            className="nav-link resume"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
