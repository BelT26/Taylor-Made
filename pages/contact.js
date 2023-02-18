import Container from "react-bootstrap/Container";
import Head from "next/head";
import ContactForm from "@/components/contact/ContactForm";

function Contact() {
  return (
    <>
      <Head>
        <title>Taylor-Made WD - Contact</title>
      </Head>
      <Container>
        <h1>Contact</h1>
        <ContactForm />
      </Container>
    </>
  );
}

export default Contact;
