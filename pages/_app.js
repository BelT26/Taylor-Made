import Layout from "@/components/page_layout/Layout";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Head>
          <meta
            name="description"
            content="Professional Freelance Web Developer, London. I specialize in creating stunning, fully responsive website designs that place emphasis on modern user experience"
          />
          <meta name="author" content="Helen Taylor" />
          <meta
            name="keywords"
            content="freelance web designer, freelance software developer, professional web developer, london, affordable website, website design, experienced web developer, responsive design, user experience, javasript, reactjs, nextjs, html, css, python, django, personalised quiz, educational games, interactive "
          />
          <meta
            name="viewport"
            content="initial-scale=1.0"
            width="device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}
