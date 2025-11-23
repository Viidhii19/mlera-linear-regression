import { Inter } from "next/font/google";
import "./globals.css";
// Fixed: Changed alias '@/' to relative path '../' to ensure resolution
import Navbar from "../components/Navbar"; 
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MLera Assignment",
  description: "Linear Regression Module",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Navbar />
          <main className="w-full bg-white dark:bg-[#0f0a1e] min-h-screen transition-colors duration-300">
              {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}