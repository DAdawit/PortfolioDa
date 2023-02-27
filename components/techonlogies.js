import styles from "../src/styles/tech.module.css";
import { Nunito, Rokkitt, Open_Sans } from "next/font/google";
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
          <section className={styles.mernStack}>
            <div className={styles.framework}>
              <img src="/frameworks/next.png" alt="next" />
              <p className={open_sans.className}>Experiance whit Next.js</p>
            </div>
            <div className={styles.framework}>
              <img src="/frameworks/react.png" alt="react" />
              <p className={open_sans.className}>Experiance whit React.js</p>
            </div>
            <div className={styles.framework}>
              <img src="/frameworks/Vuetify.png" alt="vuetify" />
              <p className={open_sans.className}>Experiance whit React.js</p>
            </div>
            <div className={styles.framework}>
              <img src="/frameworks/vue.png" alt="vue" />
              <p className={open_sans.className}>Experiance whit vue.js</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
