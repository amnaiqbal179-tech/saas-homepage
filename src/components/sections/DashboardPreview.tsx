"use client";

export const DashboardPreview = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-24">
      <div className="bg-white rounded-[40px] border border-gray-200 shadow-2xl p-8">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Good morning, Acme Inc
          </h2>

          <p className="text-gray-500">
            Your daily impact metrics are ready to review.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

          {/* Card 1 */}
          <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6 flex justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-400">
                192,000 tCO₂e
              </p>

              <h3 className="text-4xl font-bold mt-2">
                56%
              </h3>
            </div>

            <div className="w-16 h-12 rounded-xl bg-yellow-300"></div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6">
            <p className="text-[10px] uppercase tracking-wider text-gray-400">
              Energy consumption
            </p>

            <div className="flex justify-between items-end mt-3">
              <h3 className="text-3xl font-bold">
                583.7
                <span className="text-sm text-gray-400 font-normal">
                  {" "}
                  MWh
                </span>
              </h3>

              <span className="text-blue-500 text-sm font-semibold">
                +12.4%
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6 flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                alt="Forest"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="bg-yellow-200 rounded px-2 py-1 text-[9px] uppercase font-bold">
                Forecast
              </span>

              <p className="text-xs mt-2">
                You are 16% off your 2027 emissions goal
              </p>
            </div>

          </div>

        </div>

        {/* Graph */}
        <div className="border-t pt-8">

          <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">
            Carbon emissions trend
          </p>

          <div className="relative h-48 flex items-end justify-between">
            {[10,12,15,18,20,25,30,35,45,55,70,85,95,80,70,60,50,45,40,35].map((height,index)=>(
              <div
                key={index}
                className={`w-[6px] rounded-t ${
                  index===13 ? "bg-black":"bg-gray-300"
                }`}
                style={{height:`${height*1.5}px`}}
              />
            ))}
          </div>

          <div className="flex justify-between mt-5 text-xs text-gray-400 uppercase">
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>

        </div>

      </div>
    </section>
  );
};