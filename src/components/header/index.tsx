import { PiHouseLineFill } from "react-icons/pi";

const NAV_LINKS = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/",
    name: "About",
  },
  {
    href: "/",
    name: "Contact",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white">
      <div className="container flex items-center justify-between h-full">
        <a href="/" className="font-title text-2xl flex items-center gap-2">
          <PiHouseLineFill size={24} color="#fdba74" />
          InteriorDecor
        </a>

        <nav className="flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <ul key={link.name}>
              <li>
                <a href={link.href} className="text-lg px-2 py-1">
                  {link.name}
                </a>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </header>
  );
}
