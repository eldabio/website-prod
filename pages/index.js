import Head from "next/head";
import styles from "../styles/Home.module.css";

import CtaButton from "./components/cta-button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elda Bio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Dermatology made more efficient</h1>
            <p>
              Elda empowers patients, general practitioners, and specialists to
              detect and track dermatological conditions from early stages.
            </p>
            <CtaButton>
              Start using Elda today{" "}
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
            </CtaButton>
          </div>
          <div>
            <img src="/img/home.png" />
          </div>
        </section>
        <section className={styles.subhero}>
          <h1>
            All the intuition of a human, all the objectivity of a computer.
          </h1>
          <p>
            Elda uses artificial intelligence to supercharge dermatology from
            any platform.
          </p>
        </section>
        <section className={styles.products}>
          <h1>Making dermatology easier, one step at a time</h1>
        </section>
        <section className={styles.advantages}>
          <h1>With advantages for everyone</h1>
        </section>
        <footer className={styles.footer}>
          elda
          <div className={styles.links}>
            <a href="#">about</a>
            <a href="#">copyright 2023 elda bio</a>
            <a>privacy policy</a>
            <a>contact us</a>
            <a>work with us</a>
          </div>
        </footer>
      </main>
    </>
  );
}
