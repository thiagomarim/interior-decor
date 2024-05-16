import { PiLightbulb } from "react-icons/pi";
import room2 from "../../../assets/room2.png";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { BsCheckCircle } from "react-icons/bs";

import { motion } from "framer-motion";

const DATA_STEPS = [
  {
    icon: <HiOutlineRocketLaunch size={28} color="#fff" />,
    name: "Start Project",
    desc: " Embark on your design adventure by initiating your project.Share your vision and set the stage for a bespoke design experience",
  },
  {
    icon: <PiLightbulb size={28} color="#fff" />,
    name: "Craft",
    desc: "Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space",
  },
  {
    icon: <BsCheckCircle size={28} color="#fff" />,
    name: "Execute",
    desc: " Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space",
    last: true,
  },
];

export default function Steps() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-16 sm:gap-32">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ ease: "easeOut", duration: 2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl font-title mb-16 text-center sm:text-start">
            Designing Your Dream in Three Simple Steps
          </h1>
          {DATA_STEPS.map((step) => (
            <div
              className="flex items-start mt-7 gap-8 sm:gap-16"
              key={step.name}
            >
              <div className="flex flex-col items-center">
                <span className="bg-primary size-14 sm:size-[72px] rounded-full flex items-center justify-center">
                  {step.icon}
                </span>
                {step.last ? (
                  <span></span>
                ) : (
                  <span className="bg-primary w-px h-[80px] block mt-6"></span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <span className=" text-2xl sm:text-3xl font-semibold">
                  {step.name}
                </span>
                <span className="text-secondary text-xl">{step.desc}</span>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 150 }}
          transition={{ ease: "easeOut", duration: 2 }}
          viewport={{ once: true }}
        >
          <img src={room2} alt="Imagem de uma sala de estar" />
        </motion.div>
      </div>
    </section>
  );
}
