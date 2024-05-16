import modern from "../../../assets/brands/01.svg";
import style from "../../../assets/brands/02.svg";
import brand from "../../../assets/brands/03.svg";
import nature from "../../../assets/brands/04.svg";
import classic from "../../../assets/brands/05.svg";

import { motion } from "framer-motion";

const BRANDS = [
  {
    name: "Mordern Home",
    src: modern,
  },
  {
    name: "Style Vintage",
    src: style,
  },
  {
    name: "Brand",
    src: brand,
  },
  {
    name: "Nature Home",
    src: nature,
  },
  {
    name: "Classic Design Studio",
    src: classic,
  },
];

export default function Brands() {
  return (
    <section className="container grid items-center grid-cols-1 justify-items-center lg:justify-items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex-wrap gap-16 lg:gap-32">
      {BRANDS.map((brand, i) => (
        <motion.img
          src={brand.src}
          alt={`Logo da empresa ${brand.name}`}
          key={i}
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 150 }}
          transition={{ duration: 1.2, delay: i * 0.3 }}
          viewport={{ once: true }}
        />
      ))}
    </section>
  );
}
