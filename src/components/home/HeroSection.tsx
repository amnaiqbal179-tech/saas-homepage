export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center pt-24 pb-32 px-6">
      <h1 className="text-[72px] font-bold tracking-tighter leading-[0.9] text-center max-w-4xl text-[#1A1A1A]">
        Sustainability insights,<br /> built for business
      </h1>
      
      <p className="mt-8 text-xl text-gray-700 text-center max-w-lg">
        Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
      </p>
      
      <div className="mt-12 flex gap-4">
        {/* Buttons with square icon */}
        <button className="bg-black text-white px-8 py-4 flex items-center gap-3 hover:bg-gray-800 transition">
          <div className="w-2 h-2 bg-white"></div> Request a demo
        </button>
        <button className="bg-black text-white px-8 py-4 flex items-center gap-3 hover:bg-gray-800 transition">
          <div className="w-2 h-2 bg-white"></div> Explore the platform
        </button>
      </div>
    </section>
  );
}