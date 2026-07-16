import Image from 'next/image';
import Link from 'next/link';

export default function SustainabilityArticle() {
  return (
    <main className="w-full bg-white">
      {/* Article Content Section */}
      <article className="max-w-[800px] mx-auto py-20 px-5">
        <p className="text-gray-500 font-semibold mb-6">Strategy • 7 min</p>
        <h1 className="text-5xl font-bold text-black mb-12 leading-tight">
          Sustainability Isn't a Side Project: Making Impact Operational
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] mb-12 bg-gray-100">
          <Image 
            src="/images/sustainability-hero.png" 
            alt="Sustainability Hero"
            fill
            className="object-cover"
          />
        </div>

        {/* Author Details */}
        <div className="flex gap-16 mb-12 text-sm border-b pb-12">
          <div>
            <p className="text-gray-400 uppercase tracking-widest font-bold">Published</p>
            <p className="font-semibold text-black">May 31, 2028</p>
          </div>
          <div>
            <p className="text-gray-400 uppercase tracking-widest font-bold">Author</p>
            <p className="font-semibold text-black">Gail Force</p>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg text-gray-800 leading-relaxed space-y-8">
          <p>Too often, sustainability lives on the edge of the org chart—under-resourced, reactive, and disconnected from the core business. But real impact isn't an initiative, it's an operating principle. From product decisions to procurement flows, we'll explore what it takes to embed sustainability into the systems that shape everyday work.</p>
          
          <h2 className="text-2xl font-bold text-black">The Risk of Isolation</h2>
          <p>When sustainability is framed as a special project, it stays optional. It doesn't scale, and it rarely survives resource cuts. Real impact demands more than executive sponsorship or a glossy strategy deck—it requires integration into the systems that run the business.</p>

          

          <h2 className="text-2xl font-bold text-black">Connect to Core Workflows</h2>
          <p>The most successful sustainability programs live inside decision-making, not adjacent to it. That means embedding carbon data in procurement reviews, emissions factors in product roadmaps, and impact metrics in business KPIs. Alignment isn't just helpful—it's how things get done.</p>

          <h2 className="text-2xl font-bold text-black">Mind the Gaps</h2>
          <p>Even teams with good intentions can fall into operational gaps. Sustainability may be owned by one team, but its success hinges on others—like finance, legal, ops, and product—adopting the same standards and workflows. Clear roles, shared tooling, and open feedback loops close the gap between ambition and execution.</p>

          <h2 className="text-2xl font-bold text-black">Systems Over Sprints</h2>
          <p>Impact doesn't come from one-off campaigns. It comes from systems that make the right choice the easy choice—again and again. Whether through automation, governance, or smart defaults, sustainability needs to show up where decisions are made, not just where reports are written.</p>
        </div>
      </article>

      {/* Recent Articles Section */}
      <section className="max-w-[1000px] mx-auto px-5 py-20 border-t">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">Recent articles</h2>
          <Link href="/journal" className="text-black font-semibold underline">View all articles</Link>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <RecentCard img="/images/article1.png" title="How to Build a Climate-Ready Data Stack" tag="Insights • 4 min" />
          <RecentCard img="/images/article2.png" title="Sustainability Isn't a Side Project" tag="Strategy • 7 min" />
          <RecentCard img="/images/article3.png" title="Inside the Aetherfield Model" tag="Insights • 5 min" />
        </div>
      </section>

      
          
    </main>
  );
}

function RecentCard({ img, title, tag }: { img: string, title: string, tag: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="w-full h-[200px] bg-gray-100 mb-4 overflow-hidden rounded-lg">
        <Image src={img} alt={title} width={400} height={200} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{tag}</p>
    </div>
  );
}