"use client";

import { Button } from "../ui/Button";

export const Features = () => {
  return (
    <section className="max-w-5xl mx-auto mt-20 px-4 pb-20">
      <h3 className="text-4xl font-semibold tracking-tight mb-16 text-center">
        Everything you need to measure,
        <br />
        model, and act on sustainability
      </h3>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative w-full h-[400px] rounded-[32px] overflow-hidden shadow-2xl border-2 border-black">

          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
            alt="Sustainability"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-3xl border-2 border-black">

            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
              Energy consumption
            </p>

            <div className="flex justify-between items-end mt-2">

              <p className="text-3xl font-bold">
                583.7
                <span className="text-sm font-normal text-gray-400">
                  MWh
                </span>
              </p>

              <p className="text-blue-500 text-xs font-bold">
                ↓ 12.4%
              </p>

            </div>

          </div>

        </div>

        {/* Features */}

        <div className="flex flex-col gap-8">

          {[
            {
              id: "001",
              title: "Track",
              desc: "Emissions, energy, and waste across your value chain",
            },
            {
              id: "002",
              title: "Model",
              desc: "Forecast performance and goal alignment",
            },
            {
              id: "003",
              title: "Report",
              desc: "Generate ESG disclosures, automate frameworks",
            },
            {
              id: "004",
              title: "Act",
              desc: "Surface insights and operational next steps",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="border-b border-black-200 pb-6 flex justify-between items-start group"
            >
              <div className="max-w-[80%]">

                <h4 className="text-lg font-semibold">
                  {item.title}
                </h4>

                <p className="text-black-500 mt-1 text-sm">
                  {item.desc}
                </p>

              </div>

              <span className="text-xs font-mono text-gray-400 group-hover:text-black">
                {item.id}
              </span>

            </div>
          ))}

          <Button variant="primary">
            Explore features
          </Button>

        </div>

      </div>
    </section>
  );
};