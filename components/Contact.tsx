import React, { useState, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

function Contact() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!fields.name || !fields.email || !fields.phone || !fields.message) {
      setError("Please fill out all fields.");
      return;
    }
    if (!executeRecaptcha) {
      setError("Could not load reCAPTCHA.");
      return;
    }
    setSubmitting(true);
    const token = await executeRecaptcha("contact");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
        message: fields.message,
        token,
      }),
    });
    const data = await response.json();
    setSubmitting(false);
    if (data.success) {
      setSuccess(true);
      setFields({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setError("Failed to send message.");
    }
  };

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  return (
    <section id="contact">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.3,
        }}
        className="pageInfo-container"
      >
        {success && (
          <div className="mt-16">
            <h1>Message Sent Successfully</h1>
            <p>
              Thank you for reaching out. I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
        )}
        {!success && (
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <h1>Contact</h1>
            <div className="mx-auto mb-4">
              <label htmlFor="name" className="block mb-2 font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={fields.name}
                onChange={handleFieldChange}
                className="w-full rounded-sm max-w-s input input-bordered input-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-bold ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={fields.email}
                onChange={handleFieldChange}
                className="w-full rounded-sm max-w-s input input-bordered input-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 font-bold ">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={fields.phone}
                onChange={handleFieldChange}
                className="w-full rounded-sm max-w-s input input-bordered input-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-bold ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={fields.message}
                onChange={handleFieldChange}
                className="w-full h-24 rounded-sm max-w-s input input-bordered input-primary"
                required
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <input
                type="hidden"
                name="recaptcha"
                id="recaptcha"
                data-callback="onSubmit"
                data-action="contact"
              />
              {error && <div className="text-red-500">{error}</div>}
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white rounded bg-primary hover:bg-primary-focus focus:outline-none focus:shadow-outline"
                disabled={submitting || success}
              >
                {submitting ? "Submitting..." : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}

export default Contact;
