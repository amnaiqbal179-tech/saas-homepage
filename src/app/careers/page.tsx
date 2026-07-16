import Link from 'next/link';

const jobs = [
  { title: "UX Designer", type: "Contract • San Francisco, CA", desc: "Shape the tools that drive climate intelligence. You'll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.", link: "#" },
  { title: "Data Scientist", type: "Full-time • Denver, CO", desc: "Help build the intelligence layer for climate action. You'll turn complex sustainability data into clear, actionable insights for enterprise teams.", link: "/job-listing/data-scientist" },
  { title: "Product Manager", type: "Part-time • Seattle, WA", desc: "Shape the tools that drive climate intelligence. You'll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.", link: "#" },
];

export default function CareersPage() {
  return (
    <main className="w-full min-h-screen bg-blue-100 py-20 px-6">
      <div className="max-w-[800px] mx-auto">
        
        <h1 className="text-5xl font-bold text-black mb-16 text-center">Aetherfield</h1>

        <div className="flex flex-col gap-6">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-black">{job.title}</h3>
                  <p className="text-gray-500 text-sm font-medium">{job.type}</p>
                </div>
                
                {/* Yahan Link wrap kiya gaya hai */}
                <Link href={job.link}>
                  <button className="bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                    View role
                  </button>
                </Link>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm max-w-xl">{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}