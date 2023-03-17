import styles from "../src/styles/tech.module.css";
import { Nunito, Rokkitt, Open_Sans } from "next/font/google";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
const nunito = Nunito({
  subsets: ["cyrillic"],
});
const rokkitt = Rokkitt({
  subsets: ["latin"],
});
const open_sans = Open_Sans({
  subsets: ["latin"],
});
const Technologies = () => {
  return (
    <div className={styles.techContainer}>
      <div className={styles.technologies}>
        <div className={styles.heading}>
          <h1 className={nunito.className}>Technologies</h1>
          <p>
            I have workend with a range of Technologies in the web development
            world.From Front-to-Back end.
          </p>
        </div>
        <div className={styles.container}>
          <AnimationOnScroll
            animateOnce
            animateIn="animate__animated  animate__fadeIn animate__delay-0.5s animate__slow	0.5s"
          >
            <section className={styles.mernStack}>
              <div className={styles.framework}>
                <img src="/frameworks/atomreact.png" alt="react" />
                <p className={open_sans.className}>React.js</p>
              </div>
              <div className={styles.framework}>
                <img src="/frameworks/next.png" alt="next" />
                <p className={open_sans.className}>Next.js</p>
              </div>

              <div className={styles.framework}>
                <img src="/frameworks/express-js.png" alt="vuetify" />
                <p className={open_sans.className}>Express-Js</p>
              </div>

              <div className={styles.framework}>
                <img src="/frameworks/mongodb.png" alt="vue" />
                <p className={open_sans.className}>Mongodb</p>
              </div>
            </section>
            <br></br>
            <br></br>
            <section className={styles.mernStack}>
              <div className={styles.framework}>
                <img src="/frameworks/vue.png" alt="vue" />
                <p className={open_sans.className}>vue.js</p>
              </div>
              <div className={styles.framework}>
                <img src="/frameworks/Vuetify.png" alt="vuetify" />
                <p className={open_sans.className}>vuetify</p>
              </div>
              <div className={styles.framework}>
                <img src="/frameworks/laravel.png" alt="next" />
                <p className={open_sans.className}>Laravel</p>
              </div>

              <div className={styles.framework}>
                <img src="/frameworks/node-js.png" alt="react" />
                <p className={open_sans.className}>Node.js</p>
              </div>
            </section>
            <br></br>
            <br></br>
            <section className={styles.mernStack}>
              <div className={styles.framework}>
                <img src="/frameworks/css.png" alt="vue" />
                <p className={open_sans.className}>Css</p>
              </div>
              <div className={styles.framework}>
                <img src="/frameworks/sass.png" alt="vuetify" />
                <p className={open_sans.className}>Sass</p>
              </div>
              <div className={styles.framework}>
                <img src="/frameworks/tailwind.png" alt="react" />
                <p className={open_sans.className}>Tailwind Css</p>
              </div>
              <div className={styles.framework}>
                <img src="/frameworks/bootstrap.png" alt="next" />
                <p className={open_sans.className}>Bootstrap</p>
              </div>
            </section>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
