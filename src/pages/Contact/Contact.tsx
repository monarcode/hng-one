import Checkbox from "@components/Checkbox";
import { Textarea } from "@components/Textarea";
import Textinput from "@components/Textinput";
import { user } from "@constants/index";
import styles from "./Contact.module.scss";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import React from "react";

export default function Contact() {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    toast.success("Thank you, we will get back to you");
  };
  return (
    <>
      <Helmet>
        <title>MONACODE - Get in touch</title>
      </Helmet>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.subtitle}>
          Hi there, contact me to ask me about anything you have in mind.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.name_wrap}>
            <Textinput
              placeholder="Enter first name"
              label="First name"
              id="first_name"
            />
            <Textinput
              placeholder="Enter last name"
              label="Last name"
              id="last_name"
            />
          </div>
          <Textinput
            placeholder="yourname@email.com"
            label="Email"
            id="email"
          />
          <Textarea
            label="Message"
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
          <Checkbox
            label={`You agree to providing your data to ${user.name} who may contact you.`}
          />
          <button id="btn__submit" type="submit" className={styles.cta}>
            Send message
          </button>
        </form>
      </div>
    </>
  );
}
