import styles from "../src/styles/expriance.module.css";
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
const Expriance = () => {
  return (
    <div className={styles.container}>
      <h1>Work Experience</h1>
      <section className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <h3>SEP 2021 - JAN 2023</h3>
            <h1>Freelance | Elihu IT Solution Addis Ababa Ethiopia</h1>
          </div>
          <div className={styles.lists}>
            <ul>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                It is a system of making money based on recruiting an
                ever-increasing number of investors.
              </li>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                Designed user-friendly software to improve accessibility and
                responsiveness.
              </li>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                Developed web applications using Agile and continuous delivery
                processes to refine the quality and improve output.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.heading}>
            <h3>SEP 2021 - JAN 2023</h3>
            <h1>
              Front-end Developer Ecommerce-website | Ashewa Technologies Addis
              Ababa.
            </h1>
          </div>
          <div className={styles.lists}>
            <ul>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>I was
                responsible to develop an attractive user interface using Vuejs
                and vuetify.
              </li>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                developed both buyers, suppliers, and bloggers pages.
              </li>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                developed the products widget developed the product detail page.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.heading}>
            <h3>jun 2020 -Feb 2021</h3>
            <h1>Full-stack web developer | Online Auction</h1>
          </div>
          <div className={styles.lists}>
            <ul>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                This system focuses on bidding/Auctioning of electronic devices,
                furniture, and stationery material and the system has its own
                simulation banking system for payment.
              </li>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                Analyzed project requirements, translating specifications into
                functional application components.
              </li>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                Validated the structure, security, and compliance of website
                code.
              </li>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                Build different components of the website
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.heading}>
            <h3>Dec 2020 - Feb 2021</h3>
            <h1>Full-stack web developer | online voting system</h1>
          </div>
          <div className={styles.lists}>
            <ul>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                Worked on both the front-end pages and backend logic, developed
                different forms for admin to create new elections, and set the
                election time.
              </li>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                Develop page registration page for candidate.
              </li>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                Developed pages for candidates to do their campaign.
              </li>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                created voting page for students to choose their representative.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.heading}>
            <h3> Jul 2020 - Sep 2020</h3>
            <h1>Ethiopian Youth Sport Acadamy | Addis Ababa Ethiopia</h1>
            <h2>
              Full-stack web developer | Student registration and Management
              system
            </h2>
          </div>
          <div className={styles.lists}>
            <ul>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                Developed student registration, student performance progress
                entering, and student grade result entering forms.
              </li>
              <li className={styles.flex}>
                <span className="material-icons icons">star_border</span>
                Developed a page that displays students performance progress
                with a chart using chart.js
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expriance;
