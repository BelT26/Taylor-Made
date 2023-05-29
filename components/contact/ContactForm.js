import classes from "./ContactForm.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    if (
      !formState.name.trim() ||
      !formState.email.trim() ||
      !formState.message.trim()
    ) {
      setStatusMessage("Please fill out all fields");
      setShowModal(true);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      setStatusMessage(data.message);
      setShowModal(true);
    } catch (error) {
      setStatusMessage(
        "There was an error sending your message. Please try again later."
      );
      setShowModal(true);
    }

    setSubmitting(false);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3 mx-5">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            style={{ borderRadius: 0 }}
            required
          />
        </div>

        <div className="row mb-3 mx-5">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            style={{ borderRadius: 0 }}
            required
          />
        </div>

        <div className="mb-3 mx-5">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            style={{ borderRadius: 0 }}
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className={classes.form_btn}
            disabled={submitting}
          >
            Send Message
          </button>
        </div>
      </form>

      {showModal && (
        <div>
          <h2>{statusMessage}</h2>
          <p>
            <Link href="/">Home</Link>
          </p>
        </div>
      )}
    </div>
  );
}
