import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { PiHouseLineFill } from "react-icons/pi";
import { RiMenu3Line } from "react-icons/ri";
import Nav from "./nav";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white">
      <div className="container flex items-center justify-between h-full">
        <a href="/" className="font-title text-2xl flex items-center gap-2">
          <PiHouseLineFill size={24} color="#fdba74" />
          InteriorDecor
        </a>
        <Nav mobile={false} />
        <button onClick={() => setMenu(!menu)} className="block lg:hidden">
          {menu ? <IoCloseOutline size={24} /> : <RiMenu3Line size={24} />}
        </button>
        {menu && <Nav mobile={true} />}
      </div>
    </header>
  );
}
