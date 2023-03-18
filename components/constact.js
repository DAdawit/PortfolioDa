import styles from "../src/styles/contact.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const notify = () => toast("Message sent !");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u4scq7v",
        "template_gzufint",
        form.current,
        "tDlTnMWqKKBX7adeO"
      )
      .then(
        (result) => {
          notify();
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.contact}>
      <ToastContainer />
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
              {/* <form className={styles.form}> */}
              <form className={styles.form} ref={form} onSubmit={sendEmail}>
                <div className={styles.formcontrol}>
                  <input
                    type="Name"
                    placeholder="Name"
                    className={styles.input}
                    name="user_name"
                  ></input>
                </div>
                <div className={styles.formcontrol}>
                  <input
                    type="eamil"
                    placeholder="Email"
                    className={styles.input}
                    name="user_email"
                  ></input>
                </div>
                <div className={styles.formcontrol}>
                  <textarea
                    placeholder="Message"
                    name="message"
                    className={styles.textarea}
                  ></textarea>
                </div>

                <button className={styles.submitbutton}>submit</button>
              </form>
            </div>
          </section>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Contact;
