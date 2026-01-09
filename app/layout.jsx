import { Orbitron, Outfit, Poppins } from "next/font/google";
import { ThemeProvider } from "@/component/ThemeProvider";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import RecaptchaProvider from "@/component/RecaptchaProvider"; 
import "@/styles/globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio of Muhammad Raza",
};

// Fonts
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400","500","600","700","800"], variable: "--font-heading" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-subheading" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-body" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${outfit.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="font-body transition-colors duration-300">
        <ThemeProvider>
          {/*  Client-side reCAPTCHA wrapper */}
          <RecaptchaProvider>
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
          </RecaptchaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
