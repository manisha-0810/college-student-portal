import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Campus Hub", description: "College student portal" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
