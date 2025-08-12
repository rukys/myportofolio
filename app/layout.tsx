import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "@/context/language-context";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://rukysektiawan.vercel.app"),
  title: {
    default: "Ruky Sektiawan – Mobile Developer",
    template: "%s · Ruky Sektiawan",
  },
  description:
    "Mobile Developer & Frontend Engineer. 5+ years building React Native & Next.js apps.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ruky Sektiawan – Mobile Developer",
    description: "Building fast, reliable apps with React Native & Next.js.",
    url: "https://rukysektiawan.vercel.app",
    siteName: "Ruky Sektiawan",
    images: ["/og.jpg"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <LanguageProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <Analytics />
              <Toaster position="top-right" />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </LanguageProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
