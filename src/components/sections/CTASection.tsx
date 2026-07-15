"use client";

import { Button } from "../ui/Button";

export const CTASection = () => {
  return (
    <section className="py-24 px-4 text-center">

      <div className="max-w-2xl mx-auto">

        <h2 className="text-4xl font-semibold tracking-tight mb-8">
          Ready to operationalize your sustainability goals?
        </h2>

        <Button variant="primary">
          Request a demo
        </Button>

      </div>

    </section>
  );
};