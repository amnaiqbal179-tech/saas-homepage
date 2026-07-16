// src/components/common/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, variant = 'primary' }: ButtonProps) => {
  const base = "px-6 py-3 rounded-full font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "border-2 border-black text-black hover:bg-black hover:text-white"
  };
  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
};