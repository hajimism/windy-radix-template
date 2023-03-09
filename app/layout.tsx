import { Inter } from "next/font/google";

import { Providers } from "./provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>
          <main className="font-inter bg-sage-1 min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
