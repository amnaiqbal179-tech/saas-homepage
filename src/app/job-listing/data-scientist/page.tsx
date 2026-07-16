import Link from 'next/link';

export default function JobDetailsPage() {
  return (
    <main className="w-full min-h-screen bg-blue-100 py-16 px-6">
      {/* Container: Card ki width control aur centering ke liye */}
      <div className="max-w-[700px] mx-auto">
        
        {/* Back Button: Centered */}
        <div className="flex justify-center mb-8">
          <Link href="/careers" className="text-sm font-medium text-black hover:underline">
            ← Back to Careers
          </Link>
        </div>

        {/* Content Card */}
        <div className="bg-white p-12 rounded-3xl shadow-sm">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-black mb-2">Data Scientist</h1>
            <p className="text-gray-600 font-medium">Full-time • Denver, CO</p>
          </div>

          <p className="text-gray-800 leading-relaxed mb-10 text-center">
            Help build the intelligence layer for climate action. You'll turn complex sustainability data into clear, actionable insights for enterprise teams.
          </p>

          <hr className="my-8 border-gray-100" />

          {/* Body Content */}
          <h2 className="text-lg font-bold text-black mb-4">Company description</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            At Aetherfield, we build software that empowers companies to lead with climate accountability. Our platform helps sustainability and operations teams make sense of complex environmental data—transforming emissions, waste, and energy metrics into measurable, meaningful action. We're a mission-driven team of technologists, designers, and scientists working to accelerate the shift toward a low-carbon future.
          </p>

          <h2 className="text-lg font-bold text-black mb-4">About the role</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            As a Data Scientist at Aetherfield, you'll help shape the analytical engine behind our platform. You'll collaborate with product and engineering teams to design models that interpret environmental impact, forecast future trends, and uncover actionable insights for our customers. Your work will directly influence how companies plan, report, and act on their sustainability strategies.
          </p>

          <h2 className="text-lg font-bold text-black mb-4">Requirements</h2>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 mb-8">
            <li>3+ years of experience in data science or applied analytics (Python, SQL, etc.)</li>
            <li>Experience working with climate, sustainability, or supply chain datasets is a plus</li>
            <li>Strong foundation in statistics and data modeling</li>
            <li>Ability to communicate complex insights clearly to both technical and non-technical teams</li>
            <li>Curiosity, clarity, and care in how you approach messy data</li>
            <li>Passion for solving real-world problems with purpose and precision</li>
          </ul>

          <h2 className="text-lg font-bold text-black mb-4">Company benefits</h2>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2 mb-12">
            <li>Competitive salary and equity options</li>
            <li>Flexible, hybrid work environment</li>
            <li>Generous PTO and paid volunteer days</li>
            <li>Annual sustainability stipend</li>
            <li>Team offsites and climate-focused retreats</li>
            <li>A mission-first culture that values clarity, impact, and integrity</li>
          </ul>

          {/* Apply Now Button: Centered at the bottom of the card */}
          <div className="flex justify-center">
            <button className="bg-black text-white px-10 py-3 font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}