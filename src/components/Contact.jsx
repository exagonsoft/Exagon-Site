import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { emailService, notificationType } from "../settings/generalSettings";
import { notify } from "../messages/notificationsHandler";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .send(
        emailService.serviceId,
        emailService.templateId,
        {
          from_name: form.name,
          to_name: "Alvaro R Martin",
          from_email: form.email,
          to_email: "exagonsoft@gmail.com",
          message: form.message,
        },
        emailService.publicKey
      )
      .then(() => {
        setLoading(false);
        notify("Thank you. I will get back to you as soon as possible", notificationType.success);
        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (err) => {
            console.log(err);
            notify("Something went wrong", notificationType.error);
          }
        );
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              placeholder="Please... enter your name"
              required
              autoComplete="name"
            />
          </label>
          <label htmlFor="email" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              placeholder="Please... enter your email address"
              required
              autoComplete="email"
            />
          </label>
          <label htmlFor="message" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              id="message"
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              placeholder="Please... enter your message"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-10 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Loading..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
