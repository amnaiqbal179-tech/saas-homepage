// src/components/home/FeatureSection.tsx

export default function FeatureSection() {
  const features = [
    { id: '001', title: 'Track', desc: 'Emissions, energy, and waste across your value chain' },
    { id: '002', title: 'Model', desc: 'Forecast performance and goal alignment' },
    { id: '003', title: 'Report', desc: 'Generate ESG disclosures, automate frameworks' },
    { id: '004', title: 'Act', desc: 'Surface insights and operational next steps' },
  ];

  return (
    <section className="w-full bg-white py-24 px-6 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Main Heading */}
        <h2 className="text-[40px] md:text-[56px] font-bold tracking-tighter leading-[1.05] text-center max-w-4xl mx-auto mb-20 text-[#1A1A1A]">
          Everything you need to measure,<br /> model, and act on sustainability
        </h2>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image (7 Columns) */}
          <div className="lg:col-span-7 relative w-full aspect-[4/3] lg:aspect-auto lg:h-[560px] square-[2rem] overflow-hidden bg-gray-100 shadow-sm">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop')" }}
            ></div>

            {/* Floating Energy Card - PERFECTLY CENTERED VERTICALLY */}
            <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-38 right-6 md:right-auto md:w-[340px] bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
              <div className="flex justify-between items-start">
                <p className="text-xs font-bold text-gray-800 font-mono tracking-tight">Energy consumption</p>
                {/* Asterisk Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-900">
                  <path d="M12 4v16M4 12h16M7 7l10 10M17 7L7 17"/>
                </svg>
              </div>
              <div className="flex items-end justify-between mt-12">
                <h3 className="text-[40px] font-black leading-none tracking-tight text-black">
                  583.7<span className="text-sm font-bold text-gray-500 ml-1">MWh</span>
                </h3>
                <p className="text-blue-600 text-xs font-black mb-1">↓ 12.4%</p>
              </div>
            </div>
          </div>

          {/* Right Column: List & Button (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200 py-7 first:pt-0 group cursor-pointer"
              >
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-2xl font-black text-[#1A1A1A] group-hover:text-gray-500 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-gray-400 font-mono tracking-widest font-bold">
                    {item.id}
                  </span>
                </div>
                <p className="text-gray-800 font-medium text-base pr-8 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Explore Features Button */}
            <button className="mt-10 bg-black text-white px-8 py-4 rounded-sm font-bold flex items-center gap-3 hover:bg-gray-800 transition-all w-max shadow-lg">
              <div className="w-1.5 h-1.5 bg-white"></div> Explore features
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}