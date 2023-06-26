import styles from "./CtaButton.module.css";

export default function CtaButton({ children, variant, showArrow = true }) {
  return (
    <button className={[styles.ctaButton, styles[variant]].join(" ")}>
      {children}
      {showArrow && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3887 8L7.3887 16L5.10299 13.6877L9.22259 9.701L0 9.72757V6.32558H9.19601L5.10299 2.33887L7.3887 0L15.3887 8Z"
            fill="black"
          />
        </svg>
      )}
    </button>
  );
}
