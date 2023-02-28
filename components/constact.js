import styles from "../src/styles/contact.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <AnimationOnScroll
        animateOnce
        animateIn="about animate__animated  animate__fadeInUp animate__delay-0.8s animate__slow	0.8s"
      >
        <h1>Get in Touch</h1>

        <section>
          <div>
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 8:00 a.m. and 9:00 p.m. ET, Monday through Friday
            </p>
          </div>
          <div>
            <form className={styles.form}>
              <div className={styles.formcontrol}>
                <input
                  type="Name"
                  placeholder="Name"
                  className={styles.input}
                ></input>
              </div>
              <div className={styles.formcontrol}>
                <input
                  type="eamil"
                  placeholder="Email"
                  className={styles.input}
                ></input>
              </div>
              <div className={styles.formcontrol}>
                <textarea
                  placeholder="Message"
                  className={styles.textarea}
                ></textarea>
              </div>

              <button className={styles.submitbutton}>submit</button>
            </form>
          </div>
        </section>
      </AnimationOnScroll>
    </div>
  );
};

export default Contact;
