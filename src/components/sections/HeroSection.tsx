"use client";

import { Button } from "../ui/Button";

export const HeroSection = () => {
  return (
    <section className="w-full">

      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">

        <div className="flex flex-col items-center text-center pt-16 md:pt-24 lg:pt-28">

          {/* Heading */}

          <h1 className="font-bold tracking-tight leading-none
          text-[48px]
          sm:text-[60px]
          md:text-[72px]
          lg:text-[88px]
          xl:text-[96px]">

            Sustainability insights,
            <br />
            built for business

          </h1>

          {/* Paragraph */}

          <p className="mt-8 max-w-xl text-gray-600
          text-base
          sm:text-lg
          leading-8">

            Track impact, reduce emissions, and accelerate
            progress—with clarity and confidence.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <Button variant="primary">
              Request a demo
            </Button>

            <Button variant="outline">
              Explore the platform
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
};