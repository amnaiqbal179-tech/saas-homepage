import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6">
      <Link href="/" className="font-bold text-xl">Aetherfield</Link>
      
      <div className="flex gap-6">
        <Link href="/product">Product</Link>
        {/* Yahan journal ka link */}
        <Link href="/journal">Journal</Link> 
        <Link href="/about">About</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/get-started" className="font-bold">Get started →</Link>
      </div>
    </nav>
  );
}