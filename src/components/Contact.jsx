import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Menggunakan efek scroll yang halus
    });
  };

  return (
    <div id="Contact" className="border-b border-neutral-900 pb-5">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact Me
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <a href="#" className="my-4">
            {CONTACT.email}
          </a>
        </motion.p>
        <div className="flex items-center justify-center gap-4 text-4xl my-4">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4 flex gap-4 "
          >
            <a href="https://linkedin.com/in/muhammad-ilham-314233256">
              <FaLinkedin />
            </a>
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4 flex gap-4 "
          >
            <a href="https://github.com/MuhammadIlham202310021">
              <FaGithub />
            </a>
          </motion.p>
          {/* Tombol Kembali ke Atas */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 text-2xl border border-slate-300 bg-neutral-950 text-slate-300 rounded-full p-3 shadow-lg hover:text-neutral-950 hover:bg-slate-300 hover:border hover:border-neutral-300 transition duration-300"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
