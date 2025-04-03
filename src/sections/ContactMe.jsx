import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { ABOUT_ME } from "../utils/data";
import ContactInfoCard from "../components/ContactInfoCard";
import { MdOutlineWeb } from "react-icons/md";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store environment variables
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("Error: EmailJS environment variables are missing.");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Contact Me</h4>

          <p className="text-sm text-center mt-4 leading-6">
            Have a project in mind or just want to connect? Feel free to reach
            out! I'm always open to discussing new opportunities,
            collaborations, or any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.website} />
          </div>

          <div>
            <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
              Contact Form
            </h5>

            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                required
                value={formData.name}
                className="input-box"
                autoComplete="off"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
                value={formData.email}
                className="input-box"
                autoComplete="off"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <textarea
                name="message"
                placeholder="Message"
                id="message"
                rows={3}
                required
                value={formData.message}
                className="input-box"
                autoComplete="off"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <button
                type="submit"
                className="action-btn-outline btn-scale-anim cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
