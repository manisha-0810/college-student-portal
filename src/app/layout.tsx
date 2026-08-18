import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "RFP.ai Clone", description: "AI-powered RFP response automation landing page" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
