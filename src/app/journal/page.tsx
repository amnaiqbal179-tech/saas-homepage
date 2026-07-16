import Image from 'next/image';
import Link from 'next/link';

export default function JournalPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Header Image */}
      <section className="w-full flex justify-center py-10 px-5">
        <div className="relative w-full max-w-[1280px] h-[480px]">
          <Image
            src="/images/journal-header-image.png" 
            alt="Aetherfield Journal Header"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* 2. Articles Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-5 py-12">
        <h2 className="text-4xl font-bold mb-12 text-black">Latest articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          
          {/* Article 1 - Linked to the Climate-Ready Data Stack page */}
          <Link href="/article/climate-ready-stack">
            <ArticleCard 
              img="/images/article1.png" 
              tag="Insights • 4 min" 
              title="How to Build a Climate-Ready Data Stack" 
              desc="A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows." 
            />
          </Link>
          
          {/* Other Articles */}
          <Link href="/article/sustainability-impact">
            <ArticleCard 
              img="/images/article2.png" 
              tag="Strategy • 7 min" 
              title="Sustainability Isn't a Side Project: Making Impact Operational" 
              desc="Why climate goals belong in your core roadmap—not just in the annual ESG report." 
            />
          </Link>

          <ArticleCard img="/images/article3.png" tag="Insights • 5 min" title="Inside the Aetherfield Model: How We Turn Data Into Action" desc="A behind-the-scenes look at our platform logic, system architecture, and sustainability reasoning." />
          <ArticleCard img="/images/article4.png" tag="Tooling • 6 min" title="From Spreadsheets to Systems: The Evolution of Climate Reporting" desc="Why legacy tools aren't enough—and what the next generation of reporting looks like." />
        </div>
      </section>

      {/* 3. Subscribe Section */}
      <section className="w-full py-24 bg-white flex flex-col items-center justify-center text-center px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">Subscribe to Aetherfield Journal</h2>
        <button className="bg-black text-white px-8 py-4 font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors">
          <span>Sign up to newsletter</span>
          <span>→</span>
        </button>
      </section>
    </main>
  );
}

// Reusable Article Card Component
function ArticleCard({ img, tag, title, desc }: { img: string, tag: string, title: string, desc: string }) {
  return (
    <article className="group cursor-pointer">
      <div className="w-full h-[350px] bg-gray-100 mb-6 overflow-hidden">
        <Image src={img} alt={title} width={600} height={350} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">{tag}</p>
      <h3 className="text-2xl font-bold mb-3 text-black leading-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </article>
  );
}