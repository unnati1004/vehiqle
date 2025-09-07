import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({subsets:["latin"]})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${inter.className}`}
        >
        <Header/>
      <main className="min-h-screen"> {children}</main>
      <footer className="bg-blue-50 py-12">
        <div className="container">
          <p>Made with by RoadsiderCoder</p>
        </div>
      </footer>
      </body>
    </html>
        </ClerkProvider>
  );
}
