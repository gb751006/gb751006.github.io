import "../styles/about.css";
import resume from "../docs/Ganesh_Behera_Resume.pdf";
function About() {
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
    <div className="container" data-aos={"fade-right"}>
      <div className="container__image home-img">
        <div className="container__info container__author">Hi There!,</div>
        <div className="container__info container__location">
          <p id="user-detail-intro">
            I am <em></em>
            <a href="https://www.instagram.com/_.innocent__devil._/">
              Ganesh Behera
            </a>{" "}
            , Innovative Full-Stack Developer, Designer in a single package.
            Currently I am persuing my bachelors with good academics. I am
            proficient in HTML, CSS, JavaScript, Node-js, Next-js, Rest Api,
            Frameworks which I often used Bootstrap, Tailwind-Css. With a Good
            knowledge of React Js. As a web developer, I love to build websites
            and applications that serve the world and always look for new ways
            to enhance my knowledge and gain exposure to new technologies.
          </p>
          <button id="resume-link-2" className="cv" onClick={handleClick}>
            {/* <a
            href="https://drive.google.com/file/d/1eqa_H_1lpNAyD8WjEhq8qy8NxcnGklWT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000" }}
            
            
          >
            Resume
          </a> */}
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
