import React from "react";
import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className=" text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:shaikhmohdnoman612@gmail.com">
          shaikhmohdnoman612@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col">
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </section>
  );
};

export default Contact;
