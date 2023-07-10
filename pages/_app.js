import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <meta name="viewport" content="width=device-width,inital-scale=1" />
      </Head>
    </>
  );
}

export default MyApp;
