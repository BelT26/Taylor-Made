import Container from "react-bootstrap/Container";
import Head from "next/head";
import ContactPageContent from "@/components/contact/ContactPageContent";

function Contact() {
  return (
    <>
      <Head>
        <title>Taylor-Made WD - Contact</title>
      </Head>
      <ContactPageContent />
    </>
  );
}

export default Contact;
