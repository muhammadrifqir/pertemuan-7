/**
 * import css module footer
 * disimpan di object styles
 */
import styles from "./Footer.module.css";

function Footer() {
  /**
   * menggunakan styles yang sudah diimport
   * memanggilnya menggunakan expression
   */
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h2 className={styles.footer__title}>Movie App</h2>
        <p className={styles.footer__author}>Created by aufaroot18</p>
      </footer>
    </div>
  );
}

export default Footer;
