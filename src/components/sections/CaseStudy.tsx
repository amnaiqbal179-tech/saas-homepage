"use client";

import { Button } from "../ui/Button";

export const CaseStudy = () => {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4">

      <div className="bg-[#EAEAEA] p-8 md:p-15 rounded-[80px] flex flex-col md:flex-row gap-10 items-center border border-gray-200">

        {/* Image */}

        <div className="w-full md:w-1/2 h-[250px] bg-blue-500 rounded-4xl overflow-hidden shadow-lg">

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            alt="Team Collaboration"
            className="w-full h-full object-cover mix-blend-multiply opacity-90"
          />

        </div>

        {/* Text */}

        <div className="w-full md:w-1/2">

          <h3 className="text-2xl font-semibold mb-4">
            Why Acme Inc chose Aetherfield
          </h3>

          <p className="text-black-600 mb-8 leading-relaxed">
            With fragmented data and growing reporting pressure, Acme turned
            to Aetherfield to streamline their ESG workflows. The result?
            Faster decisions, fewer spreadsheets, and 34% more coverage.
          </p>

          <Button variant="primary">
            Read case study
          </Button>

        </div>

      </div>

    </section>
  );
};