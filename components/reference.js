import Image from "next/image";
import styles from "../src/styles/reference.module.css";
const Referances = () => {
  return (
    <div className={styles.referancesContainer}>
      <h1>Referances</h1>
      <div className={styles.referances}>
        <section className={styles.section}>
          <div className={styles.imageContainer}>
            <Image
              src="/avatar1.png"
              width={250}
              height={250}
              alt="referance"
              className={styles.image}
            />
          </div>
          <h3>Girum Kedese</h3>
          <p>Full-stack developer, Eda transport Tec</p>
          <p>Email, +251921064879</p>
          <p>Phone, girumkedese@gmail.com</p>
        </section>
        <section className={styles.section}>
          <div className={styles.imageContainer}>
            <Image
              src="/avatar1.png"
              width={250}
              height={250}
              alt="referance"
              className={styles.image}
            />
          </div>
          <h3>Haymanot Getu</h3>
          <p>Full-stack developer, Excellerent solutions</p>
          <p>Email: +251937398859</p>
          <p>Phone: haimanotgetu18@gmail.com</p>
        </section>
      </div>
    </div>
  );
};

export default Referances;
