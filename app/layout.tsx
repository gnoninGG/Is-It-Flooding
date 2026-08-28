import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Is It Flooding?", description: "Community flood intelligence for safer decisions." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
