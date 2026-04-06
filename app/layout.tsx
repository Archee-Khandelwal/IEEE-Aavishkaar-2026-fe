import "./globals.css";
import Link from "next/link";
import { Space_Grotesk, Sora, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-grotesk",
});

export const metadata = {
  title: "RIT TechFest",
  description: "TechFest Schedule",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(sora.variable, spaceGrotesk.variable, "font-sans", geist.variable)}>
      <body className="bg-transparent text-white">

        {/* 🔥 NAVBAR (clean, no orange strip) */}
        <nav className="w-full flex justify-between items-center px-10 py-5 bg-black/80 backdrop-blur-md border-b border-white/10">

          {/* LEFT */}
          <h1 className="text-xl font-semibold tracking-wide">
            RIT TechFest
          </h1>

          {/* RIGHT */}
          <div className="flex gap-10 text-sm text-gray-300">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/events" className="hover:text-white transition">Events</a>
            <a href="/schedule" className="hover:text-white transition text-orange-400">Schedule</a>
            <a href="/sponsors" className="hover:text-white transition">Sponsors</a>
            <Link href="/team" className="hover:text-white transition">Team</Link>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </div>

        </nav>

        {/* 🔥 MAIN CONTENT */}
        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}