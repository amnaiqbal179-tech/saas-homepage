import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  { name: "Eunji Park", title: "Founder", email: "e.park@aetherfield.com" },
  { name: "Al Gorithm", title: "Senior Systems Architect", email: "a.gorithm@aetherfield.com" },
  { name: "Cassandra Query", title: "Head of Data Platforms", email: "c.query@aetherfield.com" },
  { name: "Sue Logic", title: "Principal Software Engineer", email: "s.logic@aetherfield.com" },
  { name: "Dash Bordman", title: "Product Manager", email: "d.bordman@aetherfield.com" },
  { name: "Greta Watt", title: "Director of Climate Strategy", email: "g.watt@aetherfield.com" },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* 1. Hero Section: Enhanced for Figma Layout */}
      <section className="flex flex-col md:flex-row items-center min-h-[600px] w-full border-b overflow-hidden">
        {/* Left Side: Blue-to-Peach Gradient with Card */}
        <div className="w-full md:w-1/2 min-h-[600px] bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center relative p-10 order-1 md:order-1">
          {/* Floating Article Card (Like Figma) */}
          <div className="bg-white p-6 rounded-2xl shadow-xl w-80 transform rotate-2">
            <div className="w-full h-40 bg-gray-200 mb-4 rounded-lg overflow-hidden">
              <Image src="/images/article2.png" alt="Sustainability" width={300} height={160} className="object-cover" />
            </div>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">STRATEGY</span>
            <p className="font-bold mt-2 leading-tight text-black">Sustainability Isn't a Side Project: Making Impact Operational</p>
          </div>
        </div>

        {/* Right Side: White Background Content */}
        <div className="w-full md:w-1/2 p-12 md:p-20 bg-white order-2 md:order-2">
          <p className="text-gray-500 mb-4 font-medium uppercase tracking-widest text-sm">Our mission</p>
          <h1 className="text-5xl font-bold leading-tight mb-8 text-black">Climate action starts with better information.</h1>
          <button className="bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-all">
            Meet the team
          </button>
        </div>
      </section>

      {/* 2. Values Section */}
      <section className="py-24 px-12 md:px-20 max-w-[1400px] mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-black">Our values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             { title: "Clarity drives action", desc: "We believe better decisions start with better data." },
             { title: "Sustainability is a systems problem", desc: "We build tools that help teams connect the dots." },
             { title: "Progress over perfection", desc: "We support real-world momentum." }
           ].map((v, i) => (
             <div key={i} className="border-t pt-8">
               <h3 className="font-bold text-xl mb-4 text-black">{v.title}</h3>
               <p className="text-gray-600 leading-relaxed">{v.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 3. Founder Story Section: Fixed for Desktop Layout */}
      <section className="flex flex-col md:flex-row items-center py-20 px-12 md:px-20 bg-gray-50">
        {/* Image (Figma: Left) */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-20 order-1 md:order-1">
          <Image src="/images/about-hero.png" alt="Eunji Park" width={600} height={600} className="rounded-2xl shadow-lg" />
        </div>
        {/* Text Content (Figma: Right) */}
        <div className="w-full md:w-1/2 order-2 md:order-2">
          <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Founder's story</p>
          <h2 className="text-4xl font-bold mb-6 text-black">Eunji Park</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Eunji founded Aetherfield with one goal: to help companies take climate action without waiting for a perfect plan. By bridging the gap between legacy systems and modern climate reporting, Aetherfield empowers teams to make measurable impact.
          </p>
        </div>
      </section>

      {/* 4. Team Table Section */}
      <section className="py-20 px-12 md:px-20 max-w-[1400px] mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-black">Meet the team</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-500 uppercase text-sm tracking-wider">
                <th className="pb-4 pt-2">Name</th>
                <th className="pb-4 pt-2">Title</th>
                <th className="pb-4 pt-2 text-right">Contact</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((m, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="py-6 font-bold text-black">{m.name}</td>
                  <td className="py-6 text-gray-700">{m.title}</td>
                  <td className="py-6 text-right text-blue-600 underline">{m.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}