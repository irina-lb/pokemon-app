import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomThemeProvider from "@theme/CustomThemeProvider";
import Header from "@components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon App ",
  description: "Find your favorite pokemon",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <CustomThemeProvider>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </CustomThemeProvider>
    </html>
  );
}
