// src/components/home/Hero.tsx
import { Button } from "../common/Button";

export const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto pt-32 pb-20 px-6 text-center flex flex-col items-center">
      <h1 className="text-[60px] md:text-[80px] font-black tracking-tighter leading-[0.9] mb-8 text-black">
        Sustainability insights,<br /> built for business
      </h1>
      <p className="text-xl text-gray-600 max-w-lg mb-12">
        Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
      </p>
      <div className="flex gap-4">
        <Button variant="primary">Request a demo</Button>
        <Button variant="secondary">Explore the platform</Button>
      </div>
    </section>
  );
};