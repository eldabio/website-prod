import Head from "next/head";
import styles from "../styles/Home.module.css";

import CtaButton from "./components/cta-button";
import Nav from "./components/nav";

import {
  ArrowRightIcon,
  CameraIcon,
  ChartBarIcon,
  ClockIcon,
  PuzzlePieceIcon,
  RectangleStackIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

function ProductCard({ name, heading, description, image, logo, cta }) {
  return (
    <div className={styles.productCard}>
      <h2>
        <img src={logo} />
        {name}
      </h2>
      <img src={image} />
      <div>
        <h3>{heading}</h3>
        <p>{description}</p>
        {cta}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Dermatology made more efficient</h1>
        <p>
          Elda empowers patients, general practitioners, and specialists to
          detect and track dermatological conditions from early stages.
        </p>
        <a href="#signup" className={styles.linkStyle}><CtaButton variant="purple" href="#signup" className={styles.newButton}>Start using Elda today</CtaButton></a>
      </div>
      <div>
        <img src="/svg/gradient-blur.svg" />
        <img src="/img/home.png" />
      </div>
    </section>
  );
}

function Subhero() {
  return (
    <section className={styles.subhero}>
      <h1>All the intuition of a human, all the objectivity of a computer.</h1>
      <p>
        Elda uses artificial intelligence to supercharge dermatology from any
        platform.
      </p>
    </section>
  );
}

function Products() {
  return (
    <section className={styles.products}>
      <h1>Making dermatology easier, one step at a time</h1>
      <div className={styles.productList}>
        <ProductCard
          name="scan"
          heading="Detect, track, and treat skin cancer easier than ever before."
          description="Elda Scan uses artificial intelligence to help you detect melanoma using just your phone with HIPAA compliance built in. Automatically upload results and comments to your favorite EMR software directly from the Scan app."
          image="/svg/scan-illustration.svg"
          logo="/svg/scan.svg"
          cta={<CtaButton variant="purple">Start using Scan</CtaButton>}
        />
        <ProductCard
          name="cosmetics"
          heading="Take before and after photos in five minutes instead of thirty-five."
          description="Elda Cosmetics leverages machine learning on your phone to make clinical photography simple, requiring far less time than before. Level up your workflow with integrations for all of the software you already use."
          image="/svg/cosmetics-illustration.svg"
          logo="/svg/cosmetics.svg"
          cta={<CtaButton variant="orange">Download Cosmetics</CtaButton>}
        />
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section className={styles.advantages}>
      <h1>With advantages for everyone</h1>
      <div className={styles.advantagesGrid}>
        <div>
          <CameraIcon />
          <span>
            <strong>Real-time photo assistant</strong> to ensure high quality
            photos
          </span>
        </div>
        <div>
          <ClockIcon />
          <span>
            <strong>See more patients</strong> and waste less time taking
            pictures
          </span>
        </div>
        <div>
          <PuzzlePieceIcon />
          <span>
            <strong>Works with your EMR software</strong> out of the box for
            ease of use
          </span>
        </div>
        <div>
          <ChartBarIcon />
          <span>
            <strong>Analyze treatment progress</strong> and quantify results
            instantly, from anywhere
          </span>
        </div>
        <div>
          <SparklesIcon />
          <span>
            <strong>Optimized for you</strong> with statistics and measurements
            you already use
          </span>
        </div>
        <div>
          <RectangleStackIcon />
          <span>
            <strong>Built on AI</strong> so that your practice works better,
            faster
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>elda</h1>
      <form>
        <div className={styles.formInput} id="signup">
          <input placeholder="join our email list today" />
          <button>
            <ArrowRightIcon />
          </button>
        </div>
      </form>
      <div className={styles.links}>
        <a>about</a>
        <a>copyright 2023 elda bio</a>
        <a>privacy policy</a>
        <a>contact us</a>
        <a>work with us</a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Elda Bio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Nav />
      </header>

      <main className={styles.body} >
        <Hero />
        <Subhero />
        <Products />
        <Advantages />
        <Footer />
      </main>
    </div>
  );
}
