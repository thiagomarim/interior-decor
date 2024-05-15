import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiHouseLineFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="container">
      <div className="grid text-center sm:text-start justify-items-center lg:justify-items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 sm:gap-16 mb-16">
        <div className="flex col-span-1 lg:col-span-2 flex-col gap-3 sm:gap-6 items-center sm:items-start max-w-[440px]">
          <a
            href="/"
            className="font-title text-2xl flex items-center gap-2 max-w-min"
          >
            <PiHouseLineFill size={24} color="#fdba74" />
            InteriorDecor
          </a>
          <span className="text-xl text-secondary">
            InteriorDecor your premier destination for luxury and modern
            interior design
          </span>
          <div className="flex items-center gap-6">
            <a href="/">
              <FaLinkedinIn size={20} />
            </a>
            <a href="/">
              <FaGithub size={20} />
            </a>
            <a href="/">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-title">Our service</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-secondary text-lg">Interior design</li>
            <li className="text-secondary text-lg">Outdoor design</li>
            <li className="text-secondary text-lg">Lightning design</li>
            <li className="text-secondary text-lg">Office design</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-title">Pages</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-secondary hover:text-secondary/80 text-lg">
              <a href="#home">Home</a>
            </li>
            <li className="text-secondary hover:text-secondary/80 text-lg">
              <a href="#home">Services</a>
            </li>
            <li className="text-secondary hover:text-secondary/80 text-lg">
              <a href="#home">Designing</a>
            </li>
            <li className="text-secondary hover:text-secondary/80 text-lg">
              <a href="#home">About</a>
            </li>
            <li className="text-secondary hover:text-secondary/80 text-lg">
              <a href="#home">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-title">Contact</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-secondary text-lg">
              Design Avenue Cityville, CA 90210 United States
            </li>
            <li className="text-secondary">
              <a href="mailto:contact@interdecor.com" className="text-lg">
                contact@interdecor.com
              </a>
            </li>
            <a href="tel:0946967032" className="text-secondary text-lg">
              0946 967 032
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
