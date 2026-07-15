"use client";

export const Testimonial = () => {
  return (
    <section className="max-w-5xl mx-auto py-24 px-4">

      <div className="bg-white overflow-hidden flex flex-col md:flex-row">

        <div className="w-full md:w-[45%] h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
            alt="Elliot Williams"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-[55%] p-10 md:p-16 flex flex-col justify-center">

          <div className="text-5xl text-blue-500 mb-6">“</div>

          <h3 className="text-[28px] leading-[1.2] font-medium mb-10">
            We finally moved past spreadsheets and guesswork. Now we have real data to guide real decisions.
          </h3>

          <div className="pt-6 border-t border-gray-100">
            <p className="font-bold text-lg">
              Elliot Williams
            </p>

            <p className="text-gray-500">
              Head of Sustainability, Flux Materials
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};