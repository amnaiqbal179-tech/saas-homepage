export default function DashboardSection() {
  // Graph ke liye custom data points (Figma ki curve match karne ke liye)
  const graphData = [
    25, 26, 28, 30, 32, 35, 38, 42, 45, 50, 55, 65, 80, 100, 130, 
    160, 190, 220, 205, 180, 150, 130, 115, 105, 95, 90, 85, 80, 75, 75
  ];
  const peakIndex = 17; // Jahan 220 likha hai

  return (
    <section className="w-full max-w-5xl mx-auto px-6 mt-12 mb-24 relative z-10">
      {/* Main White Card Dashboard */}
      <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-10 border border-gray-100">
        
        {/* Header Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Good morning, Acme Inc</h2>
          <p className="text-gray-500">Your daily impact metrics are ready to review.</p>
        </div>

        {/* 3 Top Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: 56% with Yellow Block */}
          <div className="bg-[#F9FAFB] rounded-2xl p-6 relative flex justify-between">
            <div className="flex flex-col justify-between">
              <p className="text-xs font-semibold text-gray-600">192,000 tCO₂e</p>
              <h3 className="text-5xl font-bold mt-8">56<span className="text-2xl">%</span></h3>
            </div>
            {/* The Yellow Block */}
            <div className="w-20 h-20 bg-[#F4EC26] rounded-sm"></div>
          </div>

          {/* Card 2: Energy Consumption */}
          <div className="bg-[#F9FAFB] rounded-2xl p-6 flex flex-col justify-between relative">
            <div className="flex justify-between items-start">
              <p className="text-xs font-semibold text-gray-600">Energy consumption</p>
              {/* Asterisk Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M12 4v16M4 12h16M7 7l10 10M17 7L7 17"/>
              </svg>
            </div>
            <div className="flex items-end justify-between mt-8">
              <h3 className="text-3xl font-bold">583.7<span className="text-sm font-medium text-gray-500 ml-1">MWh</span></h3>
              <p className="text-blue-500 text-xs font-bold">↓ 12.4%</p>
            </div>
          </div>

          {/* Card 3: Image and Forecast */}
          <div className="bg-[#F9FAFB] rounded-2xl p-4 flex gap-4 items-center">
            {/* Image Placeholder (Aap apni image ka path yahan de sakti hain) */}
            <div className="w-24 h-24 bg-green-900 rounded-xl overflow-hidden relative flex-shrink-0">
               {/* Agar actual image lagani ho to <img> tag use karein */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center opacity-80"></div>
            </div>
            <div className="flex flex-col justify-between h-full py-1">
              <span className="bg-[#F4EC26]/20 text-[#9B9511] text-[10px] font-bold px-2 py-1 rounded w-max uppercase tracking-wider mb-2">Forecast</span>
              <p className="text-sm font-bold leading-tight pr-2">You are 16% off your 2027 emissions goal</p>
            </div>
          </div>
        </div>

        {/* Custom Bar Graph Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-6">Carbon emissions trend</h4>
          <div className="flex h-48 gap-4">
            
            {/* Y-Axis (Left Numbers) */}
            <div className="flex flex-col justify-between text-[10px] text-gray-400 font-medium pb-6 h-full">
              <span>240</span>
              <span>160</span>
              <span>80</span>
              <span>0</span>
            </div>

            {/* Bars Container */}
            <div className="flex-1 relative flex items-end justify-between border-b border-gray-200 pb-2 h-full">
              {/* Horizontal grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
                <div className="border-t border-gray-100 w-full h-0"></div>
                <div className="border-t border-gray-100 w-full h-0"></div>
                <div className="border-t border-gray-100 w-full h-0"></div>
                <div className="border-t border-gray-100 w-full h-0"></div>
              </div>

              {/* Generating Bars */}
              {graphData.map((val, idx) => (
                <div key={idx} className="relative group w-1 flex flex-col items-center justify-end h-full">
                  
                  {/* Highlight for the peak value */}
                  {idx === peakIndex && (
                    <div className="absolute -top-6 flex flex-col items-center">
                      <span className="text-[10px] font-bold text-[#D4CD1B] bg-[#FFFDE7] px-1 rounded">220</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F4EC26] mt-1 z-10"></div>
                    </div>
                  )}

                  {/* The actual bar line */}
                  <div 
                    className={`w-[2px] rounded-t-sm transition-all duration-300 ${idx === peakIndex ? 'bg-black' : 'bg-gray-800'}`} 
                    style={{ height: `${(val / 240) * 100}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* X-Axis (Bottom Months) */}
          <div className="flex justify-between pl-10 pr-4 mt-2 text-[10px] text-gray-400 font-medium">
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
}