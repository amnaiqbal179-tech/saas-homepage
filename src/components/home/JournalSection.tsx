{/* From the Journal Section */}
export default function JournalSection(){
    return(

<section className="max-w-4xl mx-auto py-24 px-4 flex flex-col items-center">
  
  {/* Section Heading & Diamond Branding */}
  <div className="relative flex flex-col items-center mb-0 w-full center-text">
    {/* Diamond Branding - Absolute positioned relative to container */}
    <div className="absolute -left-16 -top-14 hidden md:flex w-44 h-26 rotate-[-10deg] border-2 border-blue-500 rounded-2x5 items-center justify-center shrink-0">
      <span className="absolute -top-1 bg-transparent px-8 text-[9px] text-blue-500 font-bold tracking-widest uppercase">earth</span>
      <span className="absolute -left-2 rotate-[-90deg] bg-transparent px-8 text-[9px] text-blue-500 font-bold tracking-widest uppercase">tech</span>
      <span className="absolute -right-2 rotate-[-90deg] bg-transparent px-8 text-[9px] text-blue-500 font-bold tracking-widest uppercase">data</span>
      <div className="text-center text-blue-600">
        <p className="text-[12px] font-bold leading-none">Aetherfield</p>
        <p className="text-[11px] font-bold">Journal</p>
      </div>
      <span className="absolute -bottom-2 text-[8px] text-blue-500">®</span>
    </div>

    <h2 className="text-5xl font-semibold tracking-tighter">From the journal</h2>
  </div>

  {/* Journal Entries List - Centered and Spaced */}
  <div className="w-full space-y-8 mb-12">
    {[
      { title: "How to Build a Climate-Ready Data Stack", tag: "Insights", time: "4 min", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80" },
      { title: "Sustainability Isn't a Side Project: Making Impact Operational", tag: "Strategy", time: "7 min", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80" },
      { title: "Inside the Aetherfield Model: How We Turn Data Into Action", tag: "Insights", time: "5 min", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80" }
    ].map((post, i) => (
      <div key={i} className="flex gap-8 border-b border-gray-200 pb-8 last:border-0 hover:opacity-80 transition cursor-pointer">
        {/* Square Image Box */}
        <div className="w-40 h-24 shrink-0">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover square-x2 text-center" />
        </div>
        {/* Text Area */}
        <div className="flex flex-col justify-center">
          <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
          <p className="text-xs text-gray-500 font-mono uppercase">{post.tag} • {post.time}</p>
        </div>
      </div>
    ))}
  </div>

  {/* View All Button */}
  <button className="bg-black text-white px-6 py-3 square-lg font-bold text-sm hover:bg-gray-800 transition text-center">
    View all articles
  </button>
</section>
  );
}
