import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/helper/scroll-to-top";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio of Pratik Doke- Software Developer",
  description:
    "This is the portfolio of Pratik Doke. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={inter.className} suppressHydrationWarning>
      <ToastContainer />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        {children}
        <ScrollToTop />
      </main>
      <Footer />
    </body>
  </html>
  );
}
