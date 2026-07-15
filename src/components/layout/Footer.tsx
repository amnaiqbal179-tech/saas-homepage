// src/components/layout/Footer.tsx

const Footer = () => {
  return (
    <footer className="w-full bg-[#5C5C26] pt-16 pb-8 px-6 md:px-12 border-t-2 border-black">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Links Section (Ab upar aa gaya hai) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-8 border-b border-[#F8F94D]/20 text-[#F8F94D] text-sm font-medium">
          <div className="flex gap-8">
            <a href="#" className="hover:underline">Product</a>
            <a href="#" className="hover:underline">Journal</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Careers</a>
          </div>
          <div className="mt-4 md:mt-0">© 2025 - All rights reserved</div>
        </div>

        {/* Aetherfield Bold Text (Links ke neeche) */}
        <div className="text-[15vw] md:text-[200px] font-black leading-[0.75] tracking-tighter text-[#F8F94D] uppercase select-none">
          Aetherfield
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;