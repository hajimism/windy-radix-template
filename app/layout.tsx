import { Inter } from "next/font/google";

import "./tailwind.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Windy Radix Template",
  description: "Scaffolding shadcn/ui with Radix colors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <main className="font-inter">{children}</main>
      </body>
    </html>
  );
}
