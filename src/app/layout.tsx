import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WanderWise",
  description: "Your helping travel buddy",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={montserrat.className}>
        <div className="z-10">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
      
  );
}
