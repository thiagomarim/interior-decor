import Button from "../../button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="bg-hero-image bg-center bg-cover lg:bg-cover bg-no-repeat w-full h-[640px] xl:h-[840px]"
      id="home"
    >
      <div className="container flex items-center justify-center text-center 2xl:text-start 2xl:justify-start h-full">
        <motion.div
          className="flex flex-col gap-5 max-w-[640px] items-center 2xl:items-start"
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -150 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h1 className="font-title text-5xl lg:text-7xl">Interior Design</h1>
          <p className="text-lg lg:text-xl text-secondary">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            Innovation, Allowing you to transform your living spaces into the
            epitome of luxury and sophistication
          </p>
          <Button className="mt-2">Start Project</Button>
        </motion.div>
      </div>
    </section>
  );
}
