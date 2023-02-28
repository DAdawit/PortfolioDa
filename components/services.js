import styles from "../src/styles/Services.module.css";
import { Nunito, Rokkitt, Open_Sans } from "next/font/google";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
const roboto = Nunito({
  subsets: ["cyrillic"],
});

const rokkitt = Rokkitt({
  subsets: ["latin"],
});
const open_sans = Open_Sans({
  subsets: ["latin-ext"],
  weight: ["500"],
});
const Services = () => {
  return (
    <div className={styles.container}>
      <AnimationOnScroll
        animateOnce
        animateIn="about animate__animated  animate__backInLeft animate__delay-0.8s animate__slow	0.8s"
      >
        <h1>My Services</h1>
      </AnimationOnScroll>
      <div className={styles.services}>
        <AnimationOnScroll
          animateOnce
          animateIn="about animate__animated  animate__fadeInLeft animate__delay-0.9s animate__slow	0.9s"
        >
          <div className={styles.card}>
            <img src="/service1.png" alt="servic 1" />
            <h2 className={roboto.className}>Website Design</h2>
            <p className={open_sans.className}>
              Provides a comprehensive suite of services including web design,
              content creation, coding, and development.
            </p>
            <div className={styles.moreinfoContainer}>
              <a href="#contact" className={styles.moreinfo}>
                <span className={rokkitt.className}>MORE INFO</span>
              </a>
            </div>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateOnce
          animateIn="about animate__animated  animate__fadeIn animate__delay-0.9s animate__slow	0.9s"
        >
          <div className={styles.card}>
            <img src="/service2.png" alt="servic 1" />
            <h2>Responsive Design</h2>
            <p className={open_sans.className}>
              A service that helps websites look and function optimally on all
              devices and platforms.
            </p>
            <div className={styles.moreinfoContainer}>
              <a href="#contact" className={styles.moreinfo}>
                <span className={rokkitt.className}>MORE INFO</span>
              </a>
            </div>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateOnce
          animateIn="about animate__animated  animate__fadeInRight animate__delay-9s animate__slow	9s"
        >
          <div className={styles.card}>
            <img src="/service3.png" alt="servic 1" />
            <h2>SEO Optimization</h2>
            <p className={open_sans.className}>
              Web design is a similar process of creation, with the intention of
              presenting
            </p>
            <div className={styles.moreinfoContainer}>
              <a href="#contact" className={styles.moreinfo}>
                <span className={rokkitt.className}>MORE INFO</span>
              </a>
            </div>
          </div>
        </AnimationOnScroll>
        {/* <div className={styles.card}>
          <img src="/service4.jpg" alt="servic 1" />
          <h2>SEO Optimization</h2>
          <p className={open_sans.className}>
            Enhances websites to ensure they are easily found on search engine
            results, increasing website visibility and traffic.
          </p>
          <div className={styles.moreinfoContainer}>
            <a href="#contact" className={styles.moreinfo}>
              <span className={rokkitt.className}>MORE INFO</span>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/service5.jpg" alt="servic 1" />
          <h2>Brand Identity</h2>
          <p className={open_sans.className}>
            Web design is a similar process of creation, with the intention of
            presenting
          </p>
          <div className={styles.moreinfoContainer}>
            <a href="#contact" className={styles.moreinfo}>
              <span className={rokkitt.className}>MORE INFO</span>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/service6.jpg" alt="servic 1" />
          <h2>Social Media</h2>
          <p className={open_sans.className}>
            Web design is a similar process of creation, with the intention of
            presenting
          </p>
          <div className={styles.moreinfoContainer}>
            <a href="#contact" className={styles.moreinfo}>
              <span className={rokkitt.className}>MORE INFO</span>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
