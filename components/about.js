import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const About = () => {
  const [about, setAbout] = useState({
    title: "I'am Dawit Diriba and Freelancer, web Developer",
    description:
      "Hi! My name is Albert Walkers. I am a Web Developer, and I'm very passionate and dedicated to my work. With 3+ years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.",
  });
  return (
    <div className="about">
      <h3>BIOGRAPHY</h3>
      <h1>About Me</h1>
      <section>
        <bold>{about.title}</bold>
        <p>{about.description}</p>
      </section>
      <section className="infos">
        <div className="info-detail">
          <span className="material-icons icons">person</span>
          <span className="title">Name</span>
          <span>Dawit D.</span>
        </div>
        <div className="info-detail">
          <span className="material-icons icons">calendar_month</span>
          <span className="title">Birth-Date</span>
          <span>01-25-1996</span>
        </div>
        <div className="info-detail">
          <span className="material-icons icons">call</span>
          <span className="title">Phone</span>
          <span>+251936207512</span>
        </div>
        <div className="info-detail">
          <span className="material-icons icons">location_on</span>
          <span className="title">Address</span>
          <span>Addis Ababa Ethiopia</span>
        </div>

        <div className="info-detail">
          <span className="material-icons icons">email</span>
          <span className="title">Email</span>
          <span>dawitccnt@gmail.com</span>
        </div>
        <div className="info-detail">
          <span className="material-icons icons">school</span>{" "}
          <span className="title">Study</span>
          <span>Degree Haramay Uninversity</span>
        </div>
        <div className="info-detail">
          <a href="/Dawit+Diriba_N.pdf" download className="download-cv">
            DOWNLOAD CV
          </a>
        </div>
      </section>
    </div>
  );
};
export default About;
