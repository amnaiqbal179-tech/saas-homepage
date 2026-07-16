// src/components/home/ActionSection.tsx

export default function ActionSection() {
  const cards = [
    {
      title: "Clarity drives action",
      description: "We believe better decisions start with better data—measured, visible, and trusted.",
      // Custom SVG matching the exact 3/4 pie chart icon in Figma
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-black mb-6">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="2" x2="12" y2="22"></line>
          <line x1="2" y1="12" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "Sustainability is a systems problem",
      description: "We build tools that help teams connect the dots between operations, impact, and accountability.",
      // Custom SVG matching the globe icon in Figma
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-black mb-6">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M2 12h20"></path>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      title: "Progress over perfection",
      description: "We support real-world momentum—helping organizations move from ambition to measurable change.",
      // Custom SVG matching the arrow in circle icon in Figma
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-black mb-6">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 16L16 8"></path>
          <path d="M16 8H10"></path>
          <path d="M16 8v6"></path>
        </svg>
      )
    }
  ];

  return (
    // bg-[#F5F3EC] gives the exact warm beige/sand color from Figma
    <section className="relative w-full bg-[#F5F3EC] py-32 px-6 overflow-hidden">
      
      {/* Texture Background Overlay */}
      {/* Note: Figma mein jo fingerprints/wood grain jaisa texture hai, uske liye ye placeholder texture use kiya gaya hai. 
          Agar aapke paas Figma se exact background image export hai, to uski URL yahan dal dein. */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-multiply bg-cover bg-center"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')" }}
      ></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Main Heading */}
        <h2 className="text-[48px] md:text-[64px] font-bold tracking-tighter leading-[1.05] text-center max-w-3xl mx-auto mb-20 text-[#1A1A1A]">
          Built for clarity<br />
          Designed for action
        </h2>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              {card.icon}
              
              {/* Card Title */}
              <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-3 leading-snug">
                {card.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-black-600 text-[15px] leading-relaxed font-medium">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}