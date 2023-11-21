import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./animation.css";
import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about";
import TechStack from "./components/techstack";
import Toproject from "./components/topProject";

import Footer from "./components/footer";
import GitHub from "./components/Github";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    setTimeout(function () {
      AOS.refresh();
    }, 500);
  }, []);
  return (
    <div id="top">
      <Navbar />
      <Header />

      <div
        id="about"
        className="about section"
        data-aos={"fade-left"}
        style={{ height: "15vh" }}
      >
        <div className="stack-header">
          <p className="highlight">To Know</p>
          <h2 className="head">About me</h2>
        </div>
      </div>
      <About />

      <div id="tech" style={{ height: "15vh" }}></div>
      <TechStack />

      <div id="projects" style={{ height: "15vh" }}></div>
      <div>
        <div className="stack-header" data-aos={"zoom-in"}>
          <p className="highlight">My projects</p>
          <h2 className="head">Top Project</h2>
        </div>
        <div className="top_right mt project-card" data-aos={"zoom-in-down"}>
          <Toproject
            projectdata={"DonateForChange"}
            description={
              "Welcome to DonateForChange, where technology meets philanthropy! Our dynamic Donate Page, crafted by our dedicated team using React, Chakra UI, React-Router-Dom, Express, MongoDB, and Node, empowers users to make a real impact. Sign up and log in securely to unleash the potential of collaborative giving, creating and contributing to fundraising projects that resonate with your passion. With seamless navigation and a visually stunning interface, DonateForChange ensures a transparent and user-friendly experience, allowing you to explore ongoing projects, donate effortlessly, and be a part of positive change. Join us on DonateForChange and be a catalyst for a brighter, better world! 🌐✨"
            }
            techStack={[
              // "tech/html5.svg", "tech/css3.svg", "tech/js.svg"
              "tech/react-logo.svg",
              "tech/express.png",
              "tech/mongo.png",
              "tech/node.webp",
              "tech/chakra.png",
            ]}
            imges={[
              "donate1.png",
              "donate2.png",
              "donate3.png",
              "donate4.png",
              "donate5.png",
            ]}
            links={[
              "https://donateforchanges.netlify.app/",
              "https://github.com/gb751006/bouncy-invention-713",
              // "https://player.vimeo.com/video/689858253?h=1744dc5262",
            ]}
          />
        </div>
        <div className="top_left" data-aos={"zoom-in-up"}>
          <Toproject
            projectdata={"Zara Clone"}
            description={
              "Welcome to our online fashion destination, a meticulously crafted replica of the renowned Zara brand. Our homepage beckons with an enticing display of featured products and carefully curated categories, inviting you to explore the latest trends and timeless styles. Dive deeper into our product listings, equipped with intuitive search and filtering options, ensuring a seamless browsing experience. Each product page boasts detailed descriptions, pricing, and a user-friendly 'Add to Cart' feature, putting fashion at your fingertips. Navigate through a smooth shopping journey, from a dynamically updating cart to a secure checkout page collecting billing and shipping details. Your style adventure concludes with an order confirmation page, offering a comprehensive summary of your selections. Embrace the world of fashion with ease and elegance on our Zara-inspired platform."
            }
            techStack={[
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
              // "tech/express.png",
              // "tech/node.webp",
              // "tech/mongo.png",
              // "tech/postman.png",
            ]}
            imges={["zara1.png", "zara2.png", "zara3.png", "zara4.png"]}
            links={[
              "https://jimmy-sharma.github.io/beneficial-jelly-4258/",
              "https://github.com/gb751006/beneficial-jelly-4258",
              // "https://player.vimeo.com/video/689858338?h=1e538fdf27",
            ]}
          />
        </div>
        <div className="top_right mt project-card" data-aos={"zoom-in-down"}>
          <Toproject
            projectdata={"Briks99"}
            description={
              "Briks99.com, developed by a talented four-member team, is a sleek real estate website built on MongoDB Atlas, Express, and Mongoose. The frontend, powered by React, Redux, and React-Redux, ensures a responsive and interactive user interface. The CHAKRA UI Library and Styled-components contribute to its modern aesthetic, while Leaflet and React-leaflet provide an engaging map feature. Property showcases are dynamic with React-multi-carousel, React-Responsive Carousel, and React-Carousel-Elasticss. The website's efficiency is further enhanced by React-router-dom, axios, and Thunk Middleware, offering users a seamless and visually captivating real estate browsing experience."
            }
            techStack={[
              // "tech/html5.svg", "tech/css3.svg", "tech/js.svg"
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
            ]}
            imges={[
              "briks1.png",
              "briks2.png",
              "briks3.png",
              "briks4.png",
              "briks5.png",
            ]}
            links={[
              "https://briks99.netlify.app/",
              "https://github.com/gb751006/Briks99",
              // "https://player.vimeo.com/video/689858253?h=1744dc5262",
            ]}
          />
        </div>
        <div className="top_left" data-aos={"zoom-in-up"}>
          <Toproject
            projectdata={"SpendWiser"}
            description={
              "SpendWiser is a powerful web application designed to revolutionize personal finance management, developed collaboratively by a skilled team of four using a tech stack that includes Javascript, HTML, CSS, React.js, Redux, and ChakraUI. This comprehensive money management tool empowers users to take control of their finances seamlessly. The intuitive user interface, crafted with HTML and CSS, ensures a smooth and visually appealing experience. Leveraging React.js and Redux, SpendWiser provides dynamic and responsive features, enhancing the overall user interaction. The application's data management is facilitated by a Local Storage and JSON Server-based API, ensuring data security and accessibility. SpendWiser is not just a financial assistant; it's a collaborative effort to empower individuals in making informed and strategic decisions for their financial well-being."
            }
            techStack={[
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
              // "tech/express.png",
              // "tech/node.webp",
              // "tech/mongo.png",
              // "tech/postman.png",
            ]}
            imges={["spend1.png", "spend2.png", "spend3.png"]}
            links={[
              "https://hilarious-wood-568-fw21-0275-updated1.vercel.app/",
              "https://github.com/gb751006/SpendWiser",
              // "https://player.vimeo.com/video/689858338?h=1e538fdf27",
            ]}
          />
        </div>
        <GitHub />

        {/* <div
          className="stack-header"
          style={{ marginBottom: "45px" }}
          data-aos={"fade-right"}
        >
          <p className="highlight">Mini Project's</p>
        </div>
        <div className="project_div">
          <Projects />
        </div> */}
      </div>
      <div id="contact" style={{ height: "15vh" }}></div>
      <Footer />
    </div>
  );
}

export default App;
