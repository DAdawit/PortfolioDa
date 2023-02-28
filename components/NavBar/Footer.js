import styles from "../../src/styles/footer.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <div className={styles.footerContainer}>
      <hr></hr>
      <h3>@{year} dawitccnt@gmail.com</h3>

      <div className={styles.socialmediaContainer}>
        <div className={styles.mediaIcons}>
          <Link
            href="https://www.linkedin.com/in/dawit-diriba-73371a1a4/"
            target="_blank"
          >
            <Image
              src="/linkedin.png"
              width="25"
              height="25"
              alt="facebook icon"
            />
          </Link>
        </div>
        <div className={styles.mediaIcons}>
          <Link href="https://github.com/DAdawit" target="_blank">
            <Image
              src="/github.png"
              width="25"
              height="25"
              alt="facebook icon"
            />
          </Link>
        </div>
        <div className={styles.mediaIcons}>
          <Link href="https://t.me/@Da_W_iT" target="_blank">
            <Image
              src="/telegram.png"
              width="25"
              height="25"
              alt="facebook icon"
            />
          </Link>
        </div>
        <div className={styles.mediaIcons}>
          <Link href="https://www.facebook.com/dawit.love.33" target="_blank">
            <Image
              src="/facebook.png"
              width="25"
              height="25"
              alt="facebook icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
