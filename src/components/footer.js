import Form from "./from";
import "../styles/footer.css";
// import icon from "../img/cssbattle.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="stack-header">
        <p className="highlight">To connect with me</p>
        <h2 className="head">Contact me</h2>
      </div>
      <Form />
      <div className="credit my-details">
        <p id="contact-email"><b>Email</b> - gb751006@gmail.com</p>
        <p id="contact-phone"><b>Phone no.</b> - 9090358909</p>
      </div>
      <div className="footer__div">
        <div>
          <span id="contact-linkedin">
            <a
              href="https://www.linkedin.com/in/ganesh-behera-937264227/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="change-my-color"
                src="https://www.svgrepo.com/show/128403/linkedin.svg"
                width="30px"
                height="30px"
                alt=""
              />
              <p>Linkedin</p>
            </a>
          </span>
          <span id="contact-github">
            <a
              href="https://github.com/gb751006"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/325236/github.svg"
                width="30px"
                height="30px"
                alt=""
                className="change-my-color"
              />
              <p>Github</p>
            </a>
          </span>
          {/* <span>
            <a
              href="https://www.hackerrank.com/shingnapureshil1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="change-my-color"
                // src="https://www.svgrepo.com/show/314107/hackerrank.svg"
                src="https://www.svgrepo.com/show/341892/hackerrank.svg"
                width="30px"
                height="30px"
                alt=""
              />
              <p>Hackerrank</p>
            </a>
          </span>
          <span>
            <a
              href="https://leetcode.com/shingnapure_shilpa17/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="change-my-color"
                src="https://www.svgrepo.com/show/341985/leetcode.svg"
                width="30px"
                height="30px"
                alt=""
              />
              <p>Leetcode</p>
            </a>
          </span>

          <span>
            <a
              href="https://cssbattle.dev/player/shilpa17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="change-my-color"
                src={icon}
                width="30px"
                height="30px"
                alt=""
              />
              <p>Css Battle</p>
            </a>
          </span> */}
          <span>
            <a
              href="https://twitter.com/naruto_ganesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="change-my-color"
                src="https://www.svgrepo.com/show/201339/twitter.svg"
                width="30px"
                height="30px"
                alt=""
              />
              <p>Twitter</p>
            </a>
          </span>
        </div>
        <div className="credit">
          <span>Designed & Built by</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
            alt=""
            width="25px"
            height="25px"
          />
          <span>Ganesh Behera</span>
        </div>
        <div className="credit" style={{ color: "#00ffbb" }}>
          <span>&copy; 2023</span>
        </div>
        <div className="topDiv">
          <a href="#top">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXP_IqIxI2RoBhbIlY7GnRRE6h64Wv2MrjVVWYJGQYIoh0rjT1mGeEixSHQ9pKPkJtY8U&usqp=CAU"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
