{/* Pixel-Perfect Testimonial Section */}
export default function TestimonialSection(){
    return (
<section className="max-w-5xl mx-auto py-24 px-4">
  <div className="bg-white  square-[40px] overflow-hidden flex flex-col md:flex-row ">
    
    {/* Image Container - Exact proportion */}
    <div className="w-full md:w-[45%] h-[400px] md:h-auto bg-blue-500 relative flex-shrink-0">
      <img 
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
        alt="Elliot Williams" 
        className="w-full h-full object-cover mix-blend-multiply opacity-90"
      />
    </div>

    {/* Content Container - Exact spacing */}
    <div className="w-full md:w-[55%] p-10 md:p-16 flex flex-col justify-center bg-white">
      {/* Quote Mark - Font style */}
      <div className="text-5xl text-blue-500 mb-6 font-serif leading-none">“</div>
      
      {/* Testimonial Text - Font & Spacing */}
      <h3 className="text-[28px] leading-[1.2] font-medium tracking-tight text-gray-900 mb-10">
        We finally moved past spreadsheets and guesswork. Now we have real data to guide real decisions.
      </h3>
      
      {/* Author Name - Spacing and Weight */}
      <div className="pt-6 border-t border-gray-100">
        <p className="font-bold text-[18px] text-gray-900">Elliot Williams</p>
        <p className="text-[14px] text-gray-500 font-medium">Head of Sustainability, Flux Materials</p>
      </div>
    </div>
  </div>
</section>

 );
}
