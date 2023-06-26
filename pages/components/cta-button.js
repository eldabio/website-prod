import styles from "./CtaButton.module.css";

export default function CtaButton(props) {
  return <button className={styles.ctaButton}>{props.children}</button>;
}
