import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#E4E63B] text-[#555D28] pt-10">
      {/* Top Links Section */}
      <div className="max-w-[1280px] mx-auto px-5 pb-10 flex flex-wrap justify-between items-center text-sm font-semibold">
        <div className="flex gap-6">
          <Link href="/product">Product</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/about">About</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/get-started">Get started</Link>
        </div>
        <div>© 2025 · All rights reserved</div>
      </div>

      {/* Textured Background Section */}
      <div 
        className="w-full h-[400px] flex items-end justify-start px-5 pb-10"
        style={{
          backgroundImage: "url('/images/footer-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#E4E63B" // Base yellow-greenish color
        }}
      >
        <h1 className="text-[12rem] font-bold leading-none text-[#555D28] tracking-tighter">
          Aetherfield
        </h1>
      </div>
    </footer>
  );
}