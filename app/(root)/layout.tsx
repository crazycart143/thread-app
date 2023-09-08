import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Topbar from "@/components/shared/Topbar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";
import Bottombar from "@/components/shared/Bottombar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Topbar />
        <main className="flex">
          <LeftSideBar />
          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
          <RightSideBar />
        </main>
      </html>
    </ClerkProvider>
  );
}
