import { BsTelephoneFill } from "react-icons/bs";
import room from "../../../assets/room.jpg";
import Button from "../../button";

export default function DesignSection() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 justify-items-center sm:justify-items-start text-center sm:text-start lg:grid-cols-2 gap-14 sm:gap-28">
        <div>
          <img src={room} alt="Design de um quarto" />
        </div>
        <div className="max-w-[704px] flex flex-col items-center sm:items-start gap-12">
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
        </div>
      </div>
    </section>
  );
}
