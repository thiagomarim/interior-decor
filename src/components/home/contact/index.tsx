import Button from "../../button";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="container flex flex-col items-center gap-4"
      id="contact"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 150 }}
      transition={{ ease: "easeOut", duration: 2 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl sm:text-5xl font-title">
        Do you want to join us
      </h1>
      <p className="text-secondary text-xl text-center max-w-[770px]">
        Be the first to discover trends, inspirations, and special offers as we
        bring the world of design.
      </p>
      <Button>Connect with us</Button>
    </motion.section>
  );
}
