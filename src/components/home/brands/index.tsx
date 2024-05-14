import modern from "../../../assets/brands/01.svg";
import style from "../../../assets/brands/02.svg";
import brand from "../../../assets/brands/03.svg";
import nature from "../../../assets/brands/04.svg";
import classic from "../../../assets/brands/05.svg";

export default function Brands() {
  return (
    <section className="container grid items-center grid-cols-1 justify-items-center md:justify-items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex-wrap gap-8">
      <img src={modern} alt="Logo da empresa Mordern Home" />
      <img src={style} alt="Logo da empresa Style Vintage" />
      <img src={brand} alt="Logo da empresa Brand" />
      <img src={nature} alt="Logo da empresa Nature Home" />
      <img src={classic} alt="Logo da empresa Classic Design Studio" />
    </section>
  );
}
