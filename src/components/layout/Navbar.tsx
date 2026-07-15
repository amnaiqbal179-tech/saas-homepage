"use client";

import { Button } from "../ui/Button";

interface NavigationItem {
  label: string;
  url: string;
}

const navItems: NavigationItem[] = [
  { label: "Product", url: "#" },
  { label: "Journal", url: "#" },
  { label: "About", url: "#" },
  { label: "Careers", url: "#" },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-8 max-w-[1280px] mx-auto">
      {/* Logo */}
      <div className="text-xl font-bold tracking-tighter">
        Aetherfield
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.url}
            className="hover:text-black transition"
          >
            {item.label}
          </a>
        ))}

        <Button variant="primary">
          Get started →
        </Button>
      </div>
    </nav>
  );
};