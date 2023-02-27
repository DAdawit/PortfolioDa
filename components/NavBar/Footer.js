import styles from "../../src/styles/footer.module.css";
import { useState } from "react";
const Footer = () => {
  const [year, setYear] = useState(
    new Date().getMonth() + `-` + new Date().getFullYear()
  );
  return (
    <div className={styles.footerContainer}>
      <h3>{year}</h3>
    </div>
  );
};
export default Footer;
