import { twMerge } from "tailwind-merge";

const NAV_LINKS = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/",
    name: "Services",
  },
  {
    href: "/",
    name: "Designing",
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

export default function Nav({ mobile }: { mobile: boolean }) {
  return (
    <div
      className={twMerge(
        mobile
          ? "block lg:hidden absolute top-16 w-full left-0 right-0 bg-white shadow-xl"
          : "hidden lg:flex items-center gap-4"
      )}
    >
      <nav
        className={twMerge(
          mobile
            ? "flex flex-col items-center gap-8 py-6"
            : "flex items-center gap-5"
        )}
      >
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
  );
}
