import { HiArrowNarrowRight } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "rounded-md bg-primary px-12 py-3 max-w-max hover:bg-primary/90 transition-colors",
        className
      )}
    >
      <span className="text-white text-base flex items-center gap-2">
        {children}
        <HiArrowNarrowRight />
      </span>
    </button>
  );
}
