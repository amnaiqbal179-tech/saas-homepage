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
    <nav className="w-full px-5 md:px-8 lg:px-12 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight">
          Aetherfield
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.url}
              className="text-sm font-medium hover:text-gray-500 transition"
            >
              {item.label}
            </a>
          ))}

          <Button variant="primary">
            Get Started
          </Button>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <Button variant="primary">
            Menu
          </Button>
        </div>

      </div>
    </nav>
  );
};