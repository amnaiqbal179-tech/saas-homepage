import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar /> {/* Global Navbar */}
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Global Footer */}
      </body>
    </html>
  );
}