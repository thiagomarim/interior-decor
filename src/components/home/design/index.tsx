import { BsTelephoneFill } from "react-icons/bs";
import room from "../../../assets/room.jpg";
import Button from "../../button";
import { motion } from "framer-motion";

export default function DesignSection() {
  return (
    <section className="container" id="designing">
      <div className="grid grid-cols-1 justify-items-center sm:justify-items-start text-center sm:text-start lg:grid-cols-2 gap-14 sm:gap-28">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ ease: "easeOut", duration: 2 }}
          viewport={{ once: true }}
        >
          <img src={room} alt="Design de um quarto" />
        </motion.div>
        <motion.div
          className="max-w-[704px] flex flex-col items-center sm:items-start gap-12"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 150 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl font-title">
            Designing Your Dream With Brilliance
          </h1>
          <p className="text-secondary text-xl">
            Elevate your spaces with bespoke interior designs that reflect your
            unique style and aspirations, crafted with precision and brilliance
            for an unforgettable living experience
          </p>
          <div className="flex items-center gap-6">
            <span className="size-14 rounded-full bg-terceary/40 flex items-center justify-center">
              <BsTelephoneFill size={20} color="#fdba74" />
            </span>
            <div className="flex flex-col gap-1">
              <a
                href="tel:0946967032"
                className="text-lg font-bold hover:text-secondary transition-colors"
              >
                0946 967 032
              </a>
              <span className="text-xl text-secondary">Call us any time</span>
            </div>
          </div>
          <Button>See more designs</Button>
        </motion.div>
      </div>
    </section>
  );
}
