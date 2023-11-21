import "../App.css";
import { useState } from "react";
import resume from "../docs/Ganesh_Behera_Resume.pdf";
function Navbar() {
  const [toggle, settoggle] = useState(false);
  const [small, setsmall] = useState("");

  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/19pNz5cbPygTln74ct5di86Csf8j3-Ft8/view?usp=sharing"
    );
    const link = document.createElement("a");
    link.href = resume;
    link.target = "_blank";
    link.download = "Ganesh_Beher_Resume.pdf";
    link.click();
  };

  return (
    <div className="navbar" id="nav-menu">
      <div className="logo">
        <img
          src="gb2.png"
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
          <a href="#top" className="nav-link home">
            Home
          </a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#about" className="nav-link about">
            About
          </a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#tech" className="nav-link skills">
            Skills
          </a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#projects" className="nav-link projects">
            Project
          </a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#contact" className="nav-link contact">
            Contact Me
          </a>
        </div>
        <button className="cv" onClick={handleClick}>
          Resume
        </button>
      </div>
    </div>
  );
}

export default Navbar;
