"use client";

import { Button } from "../ui/Button";

export const HeroSection = () => {
  return (
    <section className="text-center pt-16 pb-20 px-4">
      <h1 className="text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 max-w-4xl mx-auto">
        Sustainability insights, built for business
      </h1>

      <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto">
        Track impact, reduce emissions, and accelerate progress—with clarity
        and confidence.
      </p>

      <div className="flex gap-4 justify-center">
        <Button variant="primary">
          Request a demo
        </Button>

        <Button variant="primary">
          Explore the platform
        </Button>
      </div>
    </section>
  );
};