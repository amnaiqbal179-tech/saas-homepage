"use client";

export const ClaritySection = () => {
  return (
    <section className="bg-[#E3DCD1] max-w-7xl mx-auto mt-24 px-4 pb-20">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold tracking-tighter mb-4">
          Built for clarity
        </h2>

        <h2 className="text-5xl font-semibold tracking-tighter">
          Designed for action
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {[
          {
            icon: "⊘",
            title: "Clarity drives action",
            desc: "We believe better decisions start with better data—measured, visible, and trusted.",
          },
          {
            icon: "⊕",
            title: "Sustainability is a systems problem",
            desc: "We build tools that help teams connect the dots between operations, impact, and accountability.",
          },
          {
            icon: "↗",
            title: "Progress over perfection",
            desc: "We support real-world momentum—helping organizations move from ambition to measurable change.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl border-2 border-black shadow-lg"
          >
            <div className="text-7xl mb-12 font-bold">
              {card.icon}
            </div>

            <h4 className="text-lg font-bold mb-3">
              {card.title}
            </h4>

            <p className="text-black-300 text-sm leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};