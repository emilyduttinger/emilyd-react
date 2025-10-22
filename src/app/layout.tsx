import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { cookies } from "next/headers";
import "../styles/globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "@/app/contexts/ThemeContext"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emily Duttinger | Frontend UX/UI Engineer",
  description: "I'm a Frontend UI/UX Engineer specializing in creating engaging and accessible web experiences. I'm a firm believer in the power of design systems to create scalable and consistent user interfaces."
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  // Read theme from cookie server-side to prevent hydration mismatch
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme');
  const theme = themeCookie?.value || 'dark';

  return (
    <html lang="en" className={theme}>
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased transition-colors`}
      >
        <ThemeProvider initialTheme={theme}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
