import Container from "react-bootstrap/Container";
import Head from "next/head";
import ContactForm from "@/components/contact/ContactForm";

function Contact() {
  return (
    <>
      <Head>
        <title>Taylor-Made WD</title>
        <meta
          name="description"
          content="Professional Freelance Web Developer, London. I specialize in creating stunning, fully responsive website designs that place emphasis on modern user experience"
        />
        <meta name="author" content="Helen Taylor" />
        <meta
          name="keywords"
          content="freelance web designer, freelance software developer, professional web developer, london, affordable website, website design, experienced web developer, responsive design, user experience, javasript, reactjs, nextjs, html, css, python, django, personalised quiz, educational games, interactive "
        />
      </Head>
      <Container>
        <h1>Contact</h1>
        <ContactForm />
      </Container>
    </>
  );
}

export default Contact;
