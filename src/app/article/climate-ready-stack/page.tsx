import Image from 'next/image';
import Link from 'next/link';

export default function ClimateArticlePage() {
  return (
    <main className="w-full bg-white">
      {/* 1. Article Content Section */}
      <article className="max-w-[800px] mx-auto py-20 px-5">
        <p className="text-gray-500 font-semibold mb-4">Insights • 4 min</p>
        <h1 className="text-5xl font-bold text-black mb-12 leading-tight">
          How to Build a Climate-Ready Data Stack
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] mb-12 bg-gray-100 rounded-lg overflow-hidden">
          <Image 
            src="/images/climate-hero.png" 
            alt="Climate Ready Data Stack"
            fill
            className="object-cover"
          />
        </div>

        {/* Author Details */}
        <div className="flex gap-16 mb-12 text-sm border-b pb-12">
          <div>
            <p className="text-gray-400 uppercase tracking-widest font-bold">Published</p>
            <p className="font-semibold text-black">May 7, 2028</p>
          </div>
          <div>
            <p className="text-gray-400 uppercase tracking-widest font-bold">Author</p>
            <p className="font-semibold text-black">Lana Terra</p>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg text-gray-800 leading-relaxed space-y-8">
          <p>Climate action is only as strong as the data that informs it. But most data stacks weren't designed with emissions, supply chains, or climate modeling in mind. It's time to rethink our infrastructure—starting with the foundation.</p>
          
          <h2 className="text-2xl font-bold text-black">Built for Another Era</h2>
          <p>Most data infrastructures were built to optimize for sales, user growth, or cost—not carbon. This creates friction when sustainability teams try to source emissions data from systems that weren't designed to capture it.</p>

          <h2 className="text-2xl font-bold text-black">Bridging the Gaps</h2>
          <p>Emissions data lives everywhere—and nowhere. From procurement software to building sensors, critical signals are often siloed across vendors, formats, or departments.</p>
        </div>
      </article>

      {/* 2. Recent Articles Section with Images */}
      <section className="max-w-[1000px] mx-auto px-5 py-20 border-t">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-black">Recent articles</h2>
          <Link href="/journal" className="text-black font-semibold underline">View all articles</Link>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {/* Article 1 Image */}
          <RecentCard img="/images/article1.png" title="How to Build a Climate-Ready Data Stack" tag="Insights • 4 min" />
          {/* Article 2 Image */}
          <RecentCard img="/images/article2.png" title="Sustainability Isn't a Side Project" tag="Strategy • 7 min" />
          {/* Article 3 Image */}
          <RecentCard img="/images/article3.png" title="Inside the Aetherfield Model" tag="Insights • 5 min" />
        </div>
      </section>

      
          
    </main>
  );
}

// Reusable Recent Card Component
function RecentCard({ img, title, tag }: { img: string, title: string, tag: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="w-full h-[250px] bg-gray-100 mb-4 overflow-hidden rounded-lg">
        <Image 
          src={img} 
          alt={title} 
          width={400} 
          height={250} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <h3 className="font-bold text-lg mb-1 text-black">{title}</h3>
      <p className="text-sm text-gray-500 font-medium">{tag}</p>
    </div>
  );
}