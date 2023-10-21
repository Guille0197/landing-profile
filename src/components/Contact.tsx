"use client";

import { FaRegEnvelopeOpen as EmailIcon } from "react-icons/fa";
import { PiChatsDuotone as ContactIcon } from "react-icons/pi";

const Contact = () => {
  const handleEmailClick = () => {
    const email = "gnavarro0197@gmail.com";
    window.open(`mailto:${email}`, "_blank");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 px-3">
        <ContactIcon size={24} />
        <h2 className="font-medium text-lg md:text-xl">Get in Touch</h2>
      </div>
      <div
        className="bg-[#94d7c5] text-neutral-900 p-8 rounded-2xl cursor-pointer space-y-5 bg-right"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <EmailIcon size={24} className="text-neutral-800" />
        <div className="space-y-3">
          <div className="font-medium text-lg md:text-xl">Drop me an Email</div>
          <div
            className="hover:underline text-neutral-800 text-lg md:text-lg "
            onClick={() => handleEmailClick()}
          >
            info@gnavarro.com
          </div>
        </div>
        <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
          Expect my rapid and eager reply - your message won't be kept waiting!
        </p>
      </div>
    </div>
  );
};

export default Contact;
