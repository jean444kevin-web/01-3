import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  const variants = {
    primary:
      "bg-accent-violet text-white hover:shadow-glow hover:-translate-y-0.5 border border-accent-violet/70",
    ghost:
      "bg-white/5 text-foreground border border-white/20 hover:border-accent-cyan/60 hover:shadow-cyan",
  } as const;

  return (
    <button
      className={`rounded-xl px-5 py-3 text-sm font-medium transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
