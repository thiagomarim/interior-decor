import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "rounded-lg bg-primary px-12 py-3 max-w-max",
        className
      )}
    >
      <span className="text-white text-base">{children}</span>
    </button>
  );
}
